import { getModuleIndex, getLessonCount, getAllModules, getLesson } from "./content";

describe("content loader", () => {
  it("loads module 1 index with frontmatter", () => {
    const m = getModuleIndex(1);
    expect(m.frontmatter).toBeDefined();
    expect(typeof m.content).toBe("string");
  });

  it("counts at least one lesson per module 1..7", () => {
    for (let id = 1; id <= 7; id++) {
      expect(getLessonCount(id)).toBeGreaterThan(0);
    }
  });

  it("returns null for nonexistent lesson", () => {
    expect(getLesson(1, 999)).toBeNull();
  });

  it("getAllModules returns 7 modules with lessons", () => {
    const mods = getAllModules();
    expect(mods).toHaveLength(7);
    for (const m of mods) {
      expect(m.id).toBeGreaterThanOrEqual(1);
      expect(m.id).toBeLessThanOrEqual(7);
      expect(m.title.length).toBeGreaterThan(0);
      expect(m.lessons.length).toBeGreaterThan(0);
      for (const l of m.lessons) {
        expect(l.id).toBeGreaterThan(0);
        expect(l.title.length).toBeGreaterThan(0);
        expect(l.wordCount).toBeGreaterThan(0);
      }
    }
  });

  it("lesson IDs are sequential 1..N within each module", () => {
    const mods = getAllModules();
    for (const m of mods) {
      const ids = m.lessons.map((l) => l.id).sort((a, b) => a - b);
      ids.forEach((id, i) => expect(id).toBe(i + 1));
    }
  });
});
