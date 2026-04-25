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
    // title is a plain string value; points is an array literal
    const leftTitle = extractPropValue(leftVal, "title");
    const rightTitle = extractPropValue(rightVal, "title");
    const leftPoints = extractStringsFromLiteral(extractPropValue(leftVal, "points")).join(". ");
    const rightPoints = extractStringsFromLiteral(extractPropValue(rightVal, "points")).join(". ");
    const parts: string[] = [];
    if (leftTitle || rightTitle) {
      parts.push(`Comparing ${leftTitle || "left"} versus ${rightTitle || "right"}.`);
    }
    if (leftTitle && leftPoints) parts.push(`${leftTitle}: ${ensurePeriod(leftPoints)}`);
    if (rightTitle && rightPoints) parts.push(`${rightTitle}: ${ensurePeriod(rightPoints)}`);
    return parts.join(" ");
  },

  Callout(jsx) {
    // <Callout type="danger" title="...">children</Callout>
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
    const parts: string[] = [];
    if (scenario) parts.push(`Use case: ${ensurePeriod(scenario)}`);
    if (attacker) parts.push(`Attack: ${ensurePeriod(attacker)}`);
    if (impact) parts.push(`Impact: ${ensurePeriod(impact)}`);
    if (defense) parts.push(`Defense: ${ensurePeriod(defense)}`);
    return parts.join(" ");
  },

  KeyPoint(jsx) {
    const title = extractPropValue(jsx, "title");
    const body = extractPropValue(jsx, "body");
    // KeyPoint may also have children
    const children = extractChildren(jsx, "KeyPoint");
    const parts: string[] = [];
    if (title) parts.push(`Key point: ${ensurePeriod(title)}`);
    if (body) parts.push(ensurePeriod(body));
    if (children) parts.push(stripInlineMarkdown(stripJsx(children)));
    return parts.join(" ");
  },

  AttackCard(jsx) {
    const title = extractPropValue(jsx, "title");
    const summary = extractPropValue(jsx, "summary");
    const parts: string[] = [];
    if (title) parts.push(`Attack: ${ensurePeriod(title)}`);
    if (summary) parts.push(ensurePeriod(summary));
    return parts.join(" ");
  },

  FlowSteps(jsx) {
    const stepsVal = extractPropValue(jsx, "steps");
    if (!stepsVal) return "";
    // steps may be array of strings or array of {title, body} objects
    const strings = extractStringsFromLiteral(stepsVal);
    return `Steps: ${strings.map(ensurePeriod).join(" ")}`;
  },

  DoDont(jsx) {
    const doVal = extractPropValue(jsx, "do");
    const dontVal = extractPropValue(jsx, "dont");
    const doItems = doVal ? extractStringsFromLiteral(doVal) : [];
    const dontItems = dontVal ? extractStringsFromLiteral(dontVal) : [];
    const parts: string[] = [];
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
    // Emit the id value so TTS reads e.g. "SP1" or "CI1"
    const id = extractPropValue(jsx, "id");
    return id ? id : "";
  },

  Defeats(jsx) {
    const ids = extractPropValue(jsx, "ids");
    return ids ? ids.replace(/,\s*/g, ", ") : "";
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
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → text
    .replace(/`([^`]+)`/g, "$1") // inline code → text
    .replace(/^>\s+/gm, "") // blockquote marker
    .trim();
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

  // 6. Convert headings → sentence breaks
  s = s.replace(/^#{1,6}\s+(.+)$/gm, (_, text) => ensurePeriod(text.trim()) + " ");

  // 7. Process JSX components → spoken text
  s = processJsx(s);

  // 8. Convert list bullets / numbered items → prose sentences
  s = s.replace(
    /(?:^|\n)((?:\s*(?:[-*]|\d+\.)\s+.+\n?)+)/g,
    (_full, block) => "\n" + listToSentences(block) + "\n"
  );

  // 9. Strip remaining inline markdown
  s = stripInlineMarkdown(s);

  // 10. Collapse whitespace — normalize multiple blank lines to single, multiple spaces to one
  s = s.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();

  // 11. Ensure consecutive sentences are separated by space
  s = s.replace(/\.\s*([A-Z])/g, ". $1");

  return s;
}
