import React from "react";
import { ATTACKS } from "@/lib/attacks";
import { AttackRef } from "@/components/AttackRef";

// Build a regex from all known attack IDs, sorted longest-first so e.g. MAA1
// matches before M1. Optional version suffixes ("v2", "v3", " v5") and the
// "-FC" full-chain marker are captured as part of the same token so the pill
// label preserves the verbatim display string.
const ATTACK_IDS_SORTED = Object.keys(ATTACKS).sort((a, b) => b.length - a.length);
const ATTACK_REF_REGEX = new RegExp(
  `\\b(${ATTACK_IDS_SORTED.join("|")})((?:\\s?v\\d+(?:\\.\\d+)?)|(?:-FC))?\\b`,
  "g",
);

/**
 * Replace bare attack-ID tokens in a string with <AttackRef> tooltip pills.
 * Returns a ReactNode (string for inputs with no IDs, otherwise an array
 * of mixed strings and <AttackRef> elements). Safe to drop into any JSX
 * text slot that accepts ReactNode (e.g. <p>{renderWithAttackRefs(text)}</p>).
 */
export function renderWithAttackRefs(text: string): React.ReactNode {
  if (!text) return text;
  // Reset stateful regex to be safe across calls
  ATTACK_REF_REGEX.lastIndex = 0;
  const out: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = ATTACK_REF_REGEX.exec(text)) !== null) {
    const start = match.index;
    if (start > lastIndex) {
      out.push(text.slice(lastIndex, start));
    }
    const fullLabel = match[0];
    const baseId = match[1];
    if (ATTACKS[baseId]) {
      out.push(<AttackRef key={`ar-${key++}-${start}`} id={fullLabel} />);
    } else {
      out.push(fullLabel);
    }
    lastIndex = start + fullLabel.length;
  }
  if (lastIndex === 0) return text;
  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return <>{out}</>;
}
