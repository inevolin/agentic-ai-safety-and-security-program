#!/usr/bin/env node
/**
 * prebuild-tts.mjs — pre-generate TTS audio for all lessons.
 * Run with: pnpm tts:prebuild (from the web/ directory)
 *
 * Reads XAI_API_KEY from environment or from web/.env.local if not set.
 */

import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_DIR = path.join(__dirname, "..");
const CONTENT_DIR = path.join(WEB_DIR, "content");
const AUDIO_DIR = path.join(WEB_DIR, "public", "audio");

// ---------------------------------------------------------------------------
// Load .env.local if XAI_API_KEY is not in process.env
// ---------------------------------------------------------------------------
function loadEnvLocal() {
  const envPath = path.join(WEB_DIR, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!(key in process.env)) {
      process.env[key] = val;
    }
  }
}
loadEnvLocal();

// ---------------------------------------------------------------------------
// Inline transcript logic (mirrors web/lib/transcript.ts)
// ---------------------------------------------------------------------------

function unescapeJs(s) {
  return s
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\")
    .replace(/\\n/g, " ")
    .replace(/\\t/g, " ");
}

function extractStringsFromLiteral(literal) {
  const results = [];
  const dq = /"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = dq.exec(literal)) !== null) {
    const s = unescapeJs(m[1]).trim();
    if (s) results.push(s);
  }
  const sq = /'((?:[^'\\]|\\.)*)'/g;
  while ((m = sq.exec(literal)) !== null) {
    const s = unescapeJs(m[1]).trim();
    if (s) results.push(s);
  }
  return results;
}

function extractPropValue(jsx, propName) {
  const simpleDQ = new RegExp(`${propName}="((?:[^"\\\\]|\\\\.)*)"`, "s");
  const simpleSQ = new RegExp(`${propName}='((?:[^'\\\\]|\\\\.)*)'`, "s");
  const m = simpleDQ.exec(jsx) ?? simpleSQ.exec(jsx);
  if (m) return unescapeJs(m[1]).trim();

  const braceStart = new RegExp(`${propName}=\\{`);
  let braceMatch = braceStart.exec(jsx);

  // Also handle JS object key style: propName: "value" or propName: { ... }
  if (!braceMatch) {
    const objKeyDQ = new RegExp(`["']?${propName}["']?\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "s");
    const objKeySQ = new RegExp(`["']?${propName}["']?\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'`, "s");
    const km = objKeyDQ.exec(jsx) ?? objKeySQ.exec(jsx);
    if (km) return unescapeJs(km[1]).trim();
    const objBraceStart = new RegExp(`["']?${propName}["']?\\s*:\\s*([[{])`);
    braceMatch = objBraceStart.exec(jsx);
  }

  if (!braceMatch) return "";

  const startIdx = braceMatch.index + braceMatch[0].length - 1;
  const openChar = jsx[startIdx];
  const closeChar = openChar === "{" ? "}" : "]";
  let depth = 0;
  let i = startIdx;
  while (i < jsx.length) {
    if (jsx[i] === openChar) depth++;
    else if (jsx[i] === closeChar) {
      depth--;
      if (depth === 0) return jsx.slice(startIdx, i + 1);
    }
    i++;
  }
  return "";
}

function extractChildren(jsx, tagName) {
  const openRe = new RegExp(`<${tagName}[^>]*>`, "s");
  const openMatch = openRe.exec(jsx);
  if (!openMatch) return "";
  const afterOpen = jsx.slice(openMatch.index + openMatch[0].length);
  const closeTag = `</${tagName}>`;
  const closeIdx = afterOpen.indexOf(closeTag);
  if (closeIdx === -1) return afterOpen.trim();
  return afterOpen.slice(0, closeIdx).trim();
}

function ensurePeriod(s) {
  const trimmed = s.trimEnd();
  if (!trimmed) return trimmed;
  const last = trimmed[trimmed.length - 1];
  if (last === "." || last === "!" || last === "?" || last === ":") return trimmed;
  return trimmed + ".";
}

function listToSentences(block) {
  return block
    .split("\n")
    .map((line) => {
      const stripped = line.replace(/^(\s*[-*]|\s*\d+\.)\s+/, "").trim();
      return stripped ? ensurePeriod(stripped) : "";
    })
    .filter(Boolean)
    .join(" ");
}

function stripJsx(s) {
  return s
    .replace(/<[A-Z][A-Za-z0-9]*(?:\s[^>]*)?\/?>/g, " ")
    .replace(/<\/[A-Z][A-Za-z0-9]*>/g, " ");
}

function stripInlineMarkdown(s) {
  return s
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^>\s+/gm, "")
    .trim();
}

const componentHandlers = {
  Comparison(jsx) {
    const leftVal = extractPropValue(jsx, "left");
    const rightVal = extractPropValue(jsx, "right");
    // title is a plain string; use extractPropValue directly (not extractStringsFromLiteral)
    const leftTitle = extractPropValue(leftVal, "title");
    const rightTitle = extractPropValue(rightVal, "title");
    const leftPoints = extractStringsFromLiteral(extractPropValue(leftVal, "points")).join(". ");
    const rightPoints = extractStringsFromLiteral(extractPropValue(rightVal, "points")).join(". ");
    const parts = [];
    if (leftTitle || rightTitle) parts.push(`Comparing ${leftTitle || "left"} versus ${rightTitle || "right"}.`);
    if (leftTitle && leftPoints) parts.push(`${leftTitle}: ${ensurePeriod(leftPoints)}`);
    if (rightTitle && rightPoints) parts.push(`${rightTitle}: ${ensurePeriod(rightPoints)}`);
    return parts.join(" ");
  },
  Callout(jsx) {
    const typeVal = extractPropValue(jsx, "type") || "note";
    const titleVal = extractPropValue(jsx, "title") || "";
    const children = extractChildren(jsx, "Callout");
    const label = typeVal === "danger" ? "Danger" : typeVal === "warn" ? "Warning" : "Note";
    const headline = titleVal ? `${label}: ${titleVal}.` : `${label}:`;
    const body = children ? stripInlineMarkdown(stripJsx(children)) : "";
    return [headline, body].filter(Boolean).join(" ");
  },
  UseCase(jsx) {
    const scenario = extractPropValue(jsx, "scenario");
    const attacker = extractPropValue(jsx, "attacker");
    const impact = extractPropValue(jsx, "impact");
    const defense = extractPropValue(jsx, "defense");
    const parts = [];
    if (scenario) parts.push(`Use case: ${ensurePeriod(scenario)}`);
    if (attacker) parts.push(`Attack: ${ensurePeriod(attacker)}`);
    if (impact) parts.push(`Impact: ${ensurePeriod(impact)}`);
    if (defense) parts.push(`Defense: ${ensurePeriod(defense)}`);
    return parts.join(" ");
  },
  KeyPoint(jsx) {
    const title = extractPropValue(jsx, "title");
    const body = extractPropValue(jsx, "body");
    const children = extractChildren(jsx, "KeyPoint");
    const parts = [];
    if (title) parts.push(`Key point: ${ensurePeriod(title)}`);
    if (body) parts.push(ensurePeriod(body));
    if (children) parts.push(stripInlineMarkdown(stripJsx(children)));
    return parts.join(" ");
  },
  AttackCard(jsx) {
    const title = extractPropValue(jsx, "title");
    const summary = extractPropValue(jsx, "summary");
    const parts = [];
    if (title) parts.push(`Attack: ${ensurePeriod(title)}`);
    if (summary) parts.push(ensurePeriod(summary));
    return parts.join(" ");
  },
  FlowSteps(jsx) {
    const stepsVal = extractPropValue(jsx, "steps");
    if (!stepsVal) return "";
    const strings = extractStringsFromLiteral(stepsVal);
    return `Steps: ${strings.map(ensurePeriod).join(" ")}`;
  },
  DoDont(jsx) {
    const doVal = extractPropValue(jsx, "do");
    const dontVal = extractPropValue(jsx, "dont");
    const doItems = doVal ? extractStringsFromLiteral(doVal) : [];
    const dontItems = dontVal ? extractStringsFromLiteral(dontVal) : [];
    const parts = [];
    if (doItems.length) parts.push(`Do: ${doItems.map(ensurePeriod).join(" ")}`);
    if (dontItems.length) parts.push(`Do not: ${dontItems.map(ensurePeriod).join(" ")}`);
    return parts.join(" ");
  },
  StatBar(jsx) {
    const label = extractPropValue(jsx, "label");
    const value = extractPropValue(jsx, "value");
    if (!label && !value) return "";
    return `Statistic: ${label || ""}${value ? ` — ${value}` : ""}.`;
  },
  Diagram(jsx) {
    const caption = extractPropValue(jsx, "caption");
    return caption ? `Diagram: ${ensurePeriod(caption)}` : "";
  },
  AttackRef(jsx) {
    const id = extractPropValue(jsx, "id");
    return id ? id : "";
  },
  Defeats(jsx) {
    const ids = extractPropValue(jsx, "ids");
    return ids ? ids.replace(/,\s*/g, ", ") : "";
  },
};

function processJsx(source) {
  let result = source;
  for (const [name, handler] of Object.entries(componentHandlers)) {
    const selfClosing = new RegExp(`<${name}(?:\\s[^>]*)?\\/>`,"gs");
    result = result.replace(selfClosing, (match) => {
      try { return handler(match) + " "; } catch { return " "; }
    });
    const openTagRe = new RegExp(`<${name}(?:\\s[^>]*)?>`,"gs");
    let m;
    while ((m = openTagRe.exec(result)) !== null) {
      const startIdx = m.index;
      const closeTag = `</${name}>`;
      const closeIdx = result.indexOf(closeTag, startIdx + m[0].length);
      if (closeIdx === -1) break;
      const fullMatch = result.slice(startIdx, closeIdx + closeTag.length);
      let replacement;
      try { replacement = handler(fullMatch) + " "; } catch { replacement = " "; }
      result = result.slice(0, startIdx) + replacement + result.slice(closeIdx + closeTag.length);
      openTagRe.lastIndex = startIdx + replacement.length;
    }
  }
  result = result.replace(/<[A-Z][A-Za-z0-9]*(?:\s[^>]*)?\/>/g, " ");
  result = result.replace(/<\/?[A-Z][A-Za-z0-9]*(?:\s[^>]*)?>/g, " ");
  return result;
}

function processTables(source) {
  return source
    .replace(/^\s*\|[-:| ]+\|\s*$/gm, "")
    .replace(/\|/g, ". ")
    .replace(/\.\s*\./g, ".");
}

function mdxToTranscript(source) {
  let s = source;
  s = s.replace(/^---[\s\S]*?---\s*\n?/, "");
  s = s.replace(/```[\s\S]*?```/g, " ");
  s = s.replace(/`([^`]*)`/g, "$1");
  s = s.replace(/^import\s+.*$/gm, "");
  s = s.replace(/^export\s+.*$/gm, "");
  s = processTables(s);
  s = s.replace(/^#{1,6}\s+(.+)$/gm, (_, text) => ensurePeriod(text.trim()) + " ");
  s = processJsx(s);
  s = s.replace(
    /(?:^|\n)((?:\s*(?:[-*]|\d+\.)\s+.+\n?)+)/g,
    (_full, block) => "\n" + listToSentences(block) + "\n"
  );
  s = stripInlineMarkdown(s);
  s = s.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
  s = s.replace(/\.\s*([A-Z])/g, ". $1");
  return s;
}

// ---------------------------------------------------------------------------
// Inline TTS + cache logic (mirrors web/lib/tts.ts)
// ---------------------------------------------------------------------------

const DEFAULT_VOICE = "rex";

function audioFilename(moduleId, lessonId, voice, hash) {
  return `m${moduleId}-l${lessonId}-${voice}-${hash}.mp3`;
}

function hashTranscript(transcript) {
  return crypto.createHash("sha256").update(transcript).digest("hex").slice(0, 12);
}

async function getOrCreateLessonAudio({ moduleId, lessonId, transcript, voice }) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    throw new Error("XAI_API_KEY is not set. Add it to web/.env.local as XAI_API_KEY=<your-key>");
  }
  fs.mkdirSync(AUDIO_DIR, { recursive: true });

  const hash = hashTranscript(transcript);
  const filename = audioFilename(moduleId, lessonId, voice, hash);
  const filePath = path.join(AUDIO_DIR, filename);
  const publicPath = `/audio/${filename}`;

  if (fs.existsSync(filePath)) {
    const bytes = fs.statSync(filePath).size;
    return { filePath, publicPath, cacheHit: true, bytes, hash };
  }

  const response = await fetch("https://api.x.ai/v1/tts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: transcript, voice_id: voice, language: "en" }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`xAI TTS API error ${response.status}: ${errBody}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, buffer);
  fs.renameSync(tmpPath, filePath);

  return { filePath, publicPath, cacheHit: false, bytes: buffer.length, hash };
}

// ---------------------------------------------------------------------------
// Discover all lessons
// ---------------------------------------------------------------------------

function discoverLessons() {
  const lessons = [];
  const moduleDirs = fs.readdirSync(CONTENT_DIR).filter((d) => d.match(/^module\d+$/));
  moduleDirs.sort((a, b) => parseInt(a.replace("module", "")) - parseInt(b.replace("module", "")));
  for (const moduleDir of moduleDirs) {
    const moduleId = parseInt(moduleDir.replace("module", ""));
    const dir = path.join(CONTENT_DIR, moduleDir);
    const files = fs.readdirSync(dir).filter((f) => f.match(/^lesson-\d+\.mdx$/));
    files.sort((a, b) => {
      const n = (f) => parseInt(f.replace("lesson-", "").replace(".mdx", ""));
      return n(a) - n(b);
    });
    for (const file of files) {
      const lessonId = parseInt(file.replace("lesson-", "").replace(".mdx", ""));
      lessons.push({ moduleId, lessonId, filePath: path.join(dir, file) });
    }
  }
  return lessons;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const lessons = discoverLessons();
  console.log(`Found ${lessons.length} lessons. Generating TTS audio (voice: ${DEFAULT_VOICE})...\n`);

  let hits = 0;
  let generated = 0;
  let errors = 0;
  let totalBytes = 0;

  for (const { moduleId, lessonId, filePath } of lessons) {
    const label = `m${moduleId}/l${lessonId}`;
    try {
      const source = fs.readFileSync(filePath, "utf-8");
      const transcript = mdxToTranscript(source);
      const result = await getOrCreateLessonAudio({
        moduleId,
        lessonId,
        transcript,
        voice: DEFAULT_VOICE,
      });
      const status = result.cacheHit ? "hit " : "gen ";
      console.log(`[${status}]  ${label.padEnd(7)}  ${String(result.bytes).padStart(8)} bytes  ${path.basename(result.filePath)}`);
      totalBytes += result.bytes;
      if (result.cacheHit) hits++;
      else generated++;
    } catch (err) {
      console.error(`[ERR ]  ${label}  ${err.message}`);
      errors++;
    }
  }

  console.log(
    `\nDone. ${generated} generated, ${hits} cache hits, ${errors} errors. Total: ${(totalBytes / 1024).toFixed(1)} KB`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
