/**
 * mdxToTranscript — convert MDX lesson source to plain spoken text for TTS.
 * No heavy AST parser — regex/string ops only.
 */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Unescape JS string escapes inside a captured prop value. */
function unescapeJs(s: string): string {
  return s
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\\\/g, "\\")
    .replace(/\\n/g, " ")
    .replace(/\\t/g, " ");
}

/**
 * Extract all string literals from a JS object/array literal fragment.
 * Handles both "double" and 'single' quoted strings, respecting escaped quotes.
 */
function extractStringsFromLiteral(literal: string): string[] {
  const results: string[] = [];
  // Match double-quoted strings
  const dq = /"((?:[^"\\]|\\.)*)"/g;
  let match: RegExpExecArray | null;
  while ((match = dq.exec(literal)) !== null) {
    const s = unescapeJs(match[1]).trim();
    if (s) results.push(s);
  }
  // Match single-quoted strings (not already in double-quoted context)
  const sq = /'((?:[^'\\]|\\.)*)'/g;
  while ((match = sq.exec(literal)) !== null) {
    const s = unescapeJs(match[1]).trim();
    if (s) results.push(s);
  }
  return results;
}

/** Extract value of a named prop (handles JSX attribute syntax and JS object literal syntax). */
function extractPropValue(jsx: string, propName: string): string {
  // Match propName="..." or propName='...' (simple string prop, JSX attr style)
  const simpleDQ = new RegExp(`${propName}="((?:[^"\\\\]|\\\\.)*)"`, "s");
  const simpleSQ = new RegExp(`${propName}='((?:[^'\\\\]|\\\\.)*)'`, "s");
  const m = simpleDQ.exec(jsx) ?? simpleSQ.exec(jsx);
  if (m) return unescapeJs(m[1]).trim();

  // Match propName={...} — brace-balanced extraction (JSX attr style)
  const braceStart = new RegExp(`${propName}=\\{`);
  let braceMatch = braceStart.exec(jsx);

  // Also match JS object literal key style: "propName: value" or propName: value
  // e.g. inside {{ title: "foo", points: [...] }}
  if (!braceMatch) {
    const objKeyDQ = new RegExp(`["']?${propName}["']?\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`, "s");
    const objKeySQ = new RegExp(`["']?${propName}["']?\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'`, "s");
    const km = objKeyDQ.exec(jsx) ?? objKeySQ.exec(jsx);
    if (km) return unescapeJs(km[1]).trim();
    // Brace-balanced for JS object key: propName: { ... } or propName: [ ... ]
    const objBraceStart = new RegExp(`["']?${propName}["']?\\s*:\\s*([[{])`);
    braceMatch = objBraceStart.exec(jsx);
  }

  if (!braceMatch) return "";

  const startIdx = braceMatch.index + braceMatch[0].length - 1; // position of '{' or '['
  const openChar = jsx[startIdx];
  const closeChar = openChar === "{" ? "}" : "]";
  let depth = 0;
  let i = startIdx;
  while (i < jsx.length) {
    if (jsx[i] === openChar) depth++;
    else if (jsx[i] === closeChar) {
      depth--;
      if (depth === 0) {
        return jsx.slice(startIdx, i + 1);
      }
    }
    i++;
  }
  return "";
}

/** Extract text children of a JSX tag (non-self-closing). */
function extractChildren(jsx: string, tagName: string): string {
  // Match opening tag up to > (possibly with props)
  const openRe = new RegExp(`<${tagName}[^>]*>`, "s");
  const openMatch = openRe.exec(jsx);
  if (!openMatch) return "";
  const afterOpen = jsx.slice(openMatch.index + openMatch[0].length);
  const closeTag = `</${tagName}>`;
  const closeIdx = afterOpen.indexOf(closeTag);
  if (closeIdx === -1) return afterOpen.trim();
  return afterOpen.slice(0, closeIdx).trim();
}

/** Ensure a sentence ends with a period. */
function ensurePeriod(s: string): string {
  const trimmed = s.trimEnd();
  if (!trimmed) return trimmed;
  const last = trimmed[trimmed.length - 1];
  if (last === "." || last === "!" || last === "?" || last === ":") return trimmed;
  return trimmed + ".";
}

// ---------------------------------------------------------------------------
// Attack-ID → spoken-name map. Mirrors web/lib/attacks.ts but inlined so
// transcript.ts has zero non-stdlib runtime deps (the standalone
// scripts/prebuild-tts.mjs reuses the same logic shape).
// ---------------------------------------------------------------------------

const ATTACK_NAMES: Record<string, string> = {
  SP1: "Vendor Registry Poisoning",
  AI1: "Conversational Seeding",
  MAA1: "Multi-Agent Chain",
  CI1: "CI/CD Log Injection",
  EL1: "Error Log IDP Injection",
  GIT1: "Git Commit Body Injection",
  SL1: "Slack Community Injection",
  WIKI1: "Wiki and Registry Double Trust",
  TP1: "Tool-Output Prose Injection",
  ITS1: "Helpdesk Ticket Metadata Injection",
  SURV1: "Customer Survey URL Injection",
  CONF1: "Config File App-Domain Injection",
  INV1: "Invoice Payment Portal Injection",
  CAL1: "Calendar Invite Pre-Read Injection",
  EMAIL1: "Email Thread Forwarding Injection",
  SC1: "npm README Supply-Chain Injection",
  SC2: "Malicious Skill Plugin",
  SS1: "Skill Worm",
  MT1: "Multi-Turn Context Priming",
  CS1: "Context Saturation",
  H1: "HR Benefits Phishing",
  L1: "NDA Wiki Worm",
  L4: "Vendor Questionnaire Injection",
  M1: "RAG Corpus Poisoning",
  DEF1: "Registry Integrity Audit Layer",
};

/** Replace attack IDs (with optional version suffixes) with their spoken names. */
function expandAttackIds(s: string): string {
  let out = s;
  // Process longer IDs first so e.g. EMAIL1 wins before E1 would (no overlap today, but future-proof).
  const ids = Object.keys(ATTACK_NAMES).sort((a, b) => b.length - a.length);
  for (const id of ids) {
    const name = ATTACK_NAMES[id];
    // Match the ID with optional " v2" / " v3" / " hybrid" / "-FC" suffixes; consume them.
    const re = new RegExp(
      `\\b${id}(?:\\s+v\\d+(?:[\\.-]\\d+)?)?(?:\\s+hybrid)?(?:\\s*-?FC)?\\b`,
      "g"
    );
    out = out.replace(re, `the ${name} attack`);
  }
  return out;
}

/** Strip URLs and bare hostnames so TTS doesn't spell out domains character-by-character. */
function stripUrls(s: string): string {
  let out = s;
  // Full http(s) URLs
  out = out.replace(/\bhttps?:\/\/\S+/gi, "an attacker URL");
  // Bare hostnames with a recognizable TLD (and any path)
  out = out.replace(
    /\b(?:[a-z0-9-]+\.)+(?:com|net|org|io|dev|app|ai|co|cloud|internal|gov|edu|us|uk|info|tech)(?:\/[^\s,)]*)?/gi,
    "an attacker URL"
  );
  // Collapse repeated "an attacker URL" runs
  out = out.replace(/(?:an attacker URL[\s,.;:]+){2,}/gi, "an attacker URL. ");
  return out;
}

/** Strip code-shaped `KEY=value` and `key:value` tokens that read horribly aloud. */
function stripCodeTokens(s: string): string {
  let out = s;
  // ENV-style assignments: KEY=value (uppercase identifier on the left)
  out = out.replace(/\b[A-Z][A-Z0-9_]{2,}\s*=\s*\S+/g, " ");
  // Lower-snake-case assignments inside a sentence: foo_bar=value or foo_bar: value-with-equals
  out = out.replace(/\b[a-z][a-z0-9_]+=\S+/g, " ");
  return out;
}

/** Convert a list (bullet or numbered) to prose sentences. */
function listToSentences(block: string): string {
  return block
    .split("\n")
    .map((line) => {
      const stripped = line.replace(/^(\s*[-*]|\s*\d+\.)\s+/, "").trim();
      return stripped ? ensurePeriod(stripped) : "";
    })
    .filter(Boolean)
    .join(" ");
}

// ---------------------------------------------------------------------------
// JSX component handlers
// ---------------------------------------------------------------------------

type ComponentHandler = (jsx: string) => string;

const componentHandlers: Record<string, ComponentHandler> = {
  Comparison(jsx) {
    const leftVal = extractPropValue(jsx, "left");
    const rightVal = extractPropValue(jsx, "right");
    const leftTitle = extractPropValue(leftVal, "title");
    const rightTitle = extractPropValue(rightVal, "title");
    const leftPoints = extractStringsFromLiteral(extractPropValue(leftVal, "points"))
      .map((p) => `- ${p}`)
      .join("\n");
    const rightPoints = extractStringsFromLiteral(extractPropValue(rightVal, "points"))
      .map((p) => `- ${p}`)
      .join("\n");
    return `[Comparison]\n${leftTitle}:\n${leftPoints}\n${rightTitle}:\n${rightPoints}`;
  },

  Callout(jsx) {
    const typeVal = extractPropValue(jsx, "type") || "note";
    const titleVal = extractPropValue(jsx, "title") || "";
    const children = extractChildren(jsx, "Callout");
    const label = typeVal === "danger" ? "Danger" : typeVal === "warn" ? "Warning" : "Note";
    const body = children ? stripInlineMarkdown(stripJsx(children)) : "";
    return `[${label}${titleVal ? ` — ${titleVal}` : ""}] ${body}`;
  },

  UseCase(jsx) {
    const scenario = extractPropValue(jsx, "scenario");
    const attacker = extractPropValue(jsx, "attacker");
    const impact = extractPropValue(jsx, "impact");
    const defense = extractPropValue(jsx, "defense");
    const parts: string[] = ["[Use case]"];
    if (scenario) parts.push(`Scenario: ${scenario}`);
    if (attacker) parts.push(`Attack: ${attacker}`);
    if (impact) parts.push(`Impact: ${impact}`);
    if (defense) parts.push(`Defense: ${defense}`);
    return parts.join("\n");
  },

  KeyPoint(jsx) {
    const title = extractPropValue(jsx, "title");
    const body = extractPropValue(jsx, "body");
    const children = extractChildren(jsx, "KeyPoint");
    const parts: string[] = ["[Key takeaway]"];
    if (title) parts.push(title);
    if (body) parts.push(body);
    if (children) parts.push(stripInlineMarkdown(stripJsx(children)));
    return parts.join(" ");
  },

  AttackCard(jsx) {
    const title = extractPropValue(jsx, "title");
    const summary = extractPropValue(jsx, "summary");
    const mechanism = extractPropValue(jsx, "mechanism");
    const impact = extractPropValue(jsx, "impact");
    const parts: string[] = [`[Attack — ${title}]`];
    if (summary) parts.push(`Summary: ${summary}`);
    if (mechanism) parts.push(`Mechanism: ${mechanism}`);
    if (impact) parts.push(`Impact: ${impact}`);
    return parts.join("\n");
  },

  FlowSteps(jsx) {
    const stepsVal = extractPropValue(jsx, "steps");
    if (!stepsVal) return "";

    // extractPropValue may return the wrapping `{[...]}` from JSX expression
    // braces. Peel outer `{` `}` and `[` `]` so we can iterate array elements.
    let inner = stepsVal.trim();
    if (inner.startsWith("{") && inner.endsWith("}")) inner = inner.slice(1, -1).trim();
    if (inner.startsWith("[") && inner.endsWith("]")) inner = inner.slice(1, -1).trim();

    // Try object form: each element is `{ label: "...", desc: "..." }`.
    const objectChunks: string[] = [];
    let depth = 0;
    let chunkStart = -1;
    for (let i = 0; i < inner.length; i++) {
      const c = inner[i];
      if (c === "{") {
        if (depth === 0) chunkStart = i;
        depth++;
      } else if (c === "}") {
        depth--;
        if (depth === 0 && chunkStart !== -1) {
          objectChunks.push(inner.slice(chunkStart, i + 1));
          chunkStart = -1;
        }
      }
    }

    let stepTexts: string[] = [];
    if (objectChunks.length) {
      stepTexts = objectChunks
        .map((chunk) => {
          const label = extractPropValue(chunk, "label") || extractPropValue(chunk, "title");
          const desc = extractPropValue(chunk, "desc") || extractPropValue(chunk, "body");
          return [label, desc].filter(Boolean).join(", ");
        })
        .filter((s) => s.trim().length > 0);
    } else {
      stepTexts = extractStringsFromLiteral(stepsVal);
    }

    if (!stepTexts.length) return "";
    return `[Steps]\n${stepTexts.map((s, i) => `${i + 1}. ${s}`).join("\n")}`;
  },

  DoDont(jsx) {
    const doVal = extractPropValue(jsx, "do");
    const dontVal = extractPropValue(jsx, "dont");
    const doItems = doVal ? extractStringsFromLiteral(doVal) : [];
    const dontItems = dontVal ? extractStringsFromLiteral(dontVal) : [];
    const parts: string[] = [];
    if (doItems.length) parts.push(`Do:\n${doItems.map((i) => `- ${i}`).join("\n")}`);
    if (dontItems.length) parts.push(`Don't:\n${dontItems.map((i) => `- ${i}`).join("\n")}`);
    return parts.join("\n");
  },

  StatBar(jsx) {
    const label = extractPropValue(jsx, "label");
    const value = extractPropValue(jsx, "value");
    if (!label && !value) return "";
    return `[Stat] ${label || ""}${value ? `: ${value}` : ""}`;
  },

  Diagram(jsx) {
    const caption = extractPropValue(jsx, "caption");
    return caption ? `[Diagram] ${caption}` : "";
  },

  AttackRef(jsx) {
    const id = extractPropValue(jsx, "id");
    if (!id) return "";
    // Strip version suffix to match base ID
    const base = id.replace(/\s+v\d+(?:[\.-]\d+)?.*$/i, "").trim();
    const name = ATTACK_NAMES[base];
    return name ? `the ${name} attack` : "";
  },

  Defeats(jsx) {
    const ids = extractPropValue(jsx, "ids");
    if (!ids) return "";
    const names = ids
      .split(/\s*,\s*/)
      .map((raw) => raw.replace(/\s+v\d+(?:[\.-]\d+)?.*$/i, "").trim())
      .map((base) => ATTACK_NAMES[base])
      .filter(Boolean);
    if (!names.length) return "";
    if (names.length === 1) return `the ${names[0]} attack`;
    if (names.length === 2) return `the ${names[0]} and ${names[1]} attacks`;
    const last = names.pop()!;
    return `the ${names.join(", ")}, and ${last} attacks`;
  },
};

// ---------------------------------------------------------------------------
// Core JSX stripper
// ---------------------------------------------------------------------------

/**
 * Process JSX blocks — replace known components with spoken text,
 * drop tags for unknown ones but keep text children.
 */
function processJsx(source: string): string {
  let result = source;

  for (const [name, handler] of Object.entries(componentHandlers)) {
    // Self-closing: <ComponentName .../>  or  <ComponentName ... />
    const selfClosing = new RegExp(`<${name}(?:\\s[^>]*)?\\/>`,"gs");
    result = result.replace(selfClosing, (match) => {
      try { return handler(match) + " "; } catch { return " "; }
    });

    // Block: <ComponentName ...>...</ComponentName>
    // Use a non-greedy brace-aware approach for the full tag
    const openTagRe = new RegExp(`<${name}(?:\\s[^>]*)?>`,"gs");
    let m: RegExpExecArray | null;
    while ((m = openTagRe.exec(result)) !== null) {
      const startIdx = m.index;
      const closeTag = `</${name}>`;
      const closeIdx = result.indexOf(closeTag, startIdx + m[0].length);
      if (closeIdx === -1) break;
      const fullMatch = result.slice(startIdx, closeIdx + closeTag.length);
      let replacement: string;
      try { replacement = handler(fullMatch) + " "; } catch { replacement = " "; }
      result = result.slice(0, startIdx) + replacement + result.slice(closeIdx + closeTag.length);
      openTagRe.lastIndex = startIdx + replacement.length;
    }
  }

  // For any remaining unknown JSX tags: drop the tags, keep text children
  // Remove remaining self-closing JSX tags
  result = result.replace(/<[A-Z][A-Za-z0-9]*(?:\s[^>]*)?\/>/g, " ");
  // Remove remaining JSX opening/closing tags but keep inner content
  result = result.replace(/<\/?[A-Z][A-Za-z0-9]*(?:\s[^>]*)?>/g, " ");

  return result;
}

/** Strip remaining JSX tags without content handling (for nested calls). */
function stripJsx(s: string): string {
  return s
    .replace(/<[A-Z][A-Za-z0-9]*(?:\s[^>]*)?\/?>/g, " ")
    .replace(/<\/[A-Z][A-Za-z0-9]*>/g, " ");
}

// ---------------------------------------------------------------------------
// Markdown table handler
// ---------------------------------------------------------------------------

function processTables(source: string): string {
  // Convert table rows to prose. Replace | separator with ". " and strip separator lines.
  return source
    .replace(/^\s*\|[-:| ]+\|\s*$/gm, "") // strip separator rows like |---|---|
    .replace(/\|/g, ". ") // replace pipes with period-space
    .replace(/\.\s*\./g, "."); // clean up double periods
}

// ---------------------------------------------------------------------------
// Inline markdown stripper
// ---------------------------------------------------------------------------

function stripInlineMarkdown(s: string): string {
  return s
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/(^|[^A-Za-z0-9_])__([^_\n]+)__(?![A-Za-z0-9_])/g, "$1$2")
    .replace(/(^|[^A-Za-z0-9_])_([^_\n]+)_(?![A-Za-z0-9_])/g, "$1$2")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → text
    .replace(/`([^`]+)`/g, "$1") // inline code → text
    .replace(/^>\s+/gm, "") // blockquote marker
    .trim();
}

// ---------------------------------------------------------------------------
// Speakable-text sanitizer — strip emoji, decorative symbols, and special
// punctuation that TTS engines tend to mispronounce.
// ---------------------------------------------------------------------------

// Built lazily via RegExp constructor so the `u` flag + Unicode property escapes
// don't trip TS's older default lib target during typecheck.
const SANITIZE_RULES: Array<[RegExp, string]> = [
  [new RegExp("\\p{Extended_Pictographic}", "gu"), " "], // emoji + pictographs
  [new RegExp("\\p{Emoji_Modifier}", "gu"), " "],
  [new RegExp("\\u200D", "g"), " "], // zero-width joiner
  [new RegExp("[\\uFE00-\\uFE0F]", "g"), " "], // variation selectors
  [new RegExp("[\\u2190-\\u21FF]", "g"), " "], // arrows
  [new RegExp("[\\u2200-\\u22FF]", "g"), " "], // math operators
  [new RegExp("[\\u2300-\\u23FF]", "g"), " "], // misc technical
  [new RegExp("[\\u2500-\\u257F]", "g"), " "], // box drawing
  [new RegExp("[\\u2580-\\u259F]", "g"), " "], // block elements
  [new RegExp("[\\u25A0-\\u25FF]", "g"), " "], // geometric shapes
  [new RegExp("[\\u2600-\\u26FF]", "g"), " "], // misc symbols
  [new RegExp("[\\u2700-\\u27BF]", "g"), " "], // dingbats
  [new RegExp("[\\u2B00-\\u2BFF]", "g"), " "], // misc symbols and arrows
  // Normalize fancy punctuation to plain ASCII so TTS reads them cleanly.
  [new RegExp("[\\u2018\\u2019\\u201A\\u201B]", "g"), "'"],
  [new RegExp("[\\u201C\\u201D\\u201E\\u201F]", "g"), '"'],
  [new RegExp("[\\u2014\\u2015]", "g"), ", "], // em-dash, horizontal bar
  [new RegExp("\\u2013", "g"), ", "], // en-dash
  [new RegExp("\\u2026", "g"), "..."], // ellipsis
  [new RegExp("[\\u00B7\\u2022\\u25E6]", "g"), "."], // bullets
  // Catch-all for remaining decorative symbols (Unicode So + Sk classes).
  [new RegExp("[\\p{So}\\p{Sk}]", "gu"), " "],
];

function sanitizeForSpeech(s: string): string {
  let out = s;
  for (const [re, replacement] of SANITIZE_RULES) {
    out = out.replace(re, replacement);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function mdxToTranscript(source: string): string {
  let s = source;

  // 1. Strip frontmatter
  s = s.replace(/^---[\s\S]*?---\s*\n?/, "");

  // 2. Strip fenced code blocks (``` ... ```)
  s = s.replace(/```[\s\S]*?```/g, " ");

  // 3. Strip inline backticks (keep content for readability)
  s = s.replace(/`([^`]*)`/g, "$1");

  // 4. Strip MDX import / export statements
  s = s.replace(/^import\s+.*$/gm, "");
  s = s.replace(/^export\s+.*$/gm, "");

  // 5. Process markdown tables before heading conversion
  s = processTables(s);

  // 6. Convert headings → bare section markers. The downstream dialogue
  //    scripter will rewrite into natural conversation; we just need clean
  //    structure here.
  s = s.replace(/^(#{1,6})\s+(.+)$/gm, (_full, _hashes: string, text: string) => {
    const title = text.trim().replace(/[.?!:]+$/, "");
    return `\n\n# ${title}\n\n`;
  });

  // 7. Process JSX components → spoken text
  s = processJsx(s);

  // 8. Convert list bullets / numbered items → prose sentences
  s = s.replace(
    /(?:^|\n)((?:\s*(?:[-*]|\d+\.)\s+.+\n?)+)/g,
    (_full, block) => "\n" + listToSentences(block) + "\n"
  );

  // 9. Strip remaining inline markdown
  s = stripInlineMarkdown(s);

  // 10. Strip URLs / bare hostnames so TTS doesn't spell them out
  s = stripUrls(s);

  // 11. Strip code-shaped KEY=value tokens that read horribly aloud
  s = stripCodeTokens(s);

  // 12. Replace attack IDs (SP1, CONF1 v3, MAA1+CONF1 hybrid v2, ...) with prose names
  s = expandAttackIds(s);

  // 13. Strip emoji + decorative symbols + normalize fancy punctuation
  s = sanitizeForSpeech(s);

  // 11. Collapse whitespace — normalize multiple blank lines to single, multiple spaces to one
  s = s.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();

  // 12. Tidy stray comma punctuation from symbol stripping. Period sequences
  //     are intentional pause cues — leave them alone.
  s = s
    .replace(/\s+,/g, ",")
    .replace(/,(?=\S)/g, ", ")
    .replace(/,\s*,+/g, ",");

  // 13. Ensure consecutive sentences are separated by space
  s = s.replace(/\.\s*([A-Z])/g, ". $1");

  return s;
}
