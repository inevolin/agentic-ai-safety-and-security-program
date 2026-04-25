import { ATTACKS, lookupAttack } from "./attacks";

describe("ATTACKS dictionary", () => {
  it("has unique IDs matching the key", () => {
    for (const [key, meta] of Object.entries(ATTACKS)) {
      expect(meta.id).toBe(key);
    }
  });

  it("entries have name, summary, slug", () => {
    for (const meta of Object.values(ATTACKS)) {
      expect(meta.name.length).toBeGreaterThan(0);
      expect(meta.summary.length).toBeGreaterThan(0);
      expect(meta.slug.length).toBeGreaterThan(0);
    }
  });

  it("includes core 21+ documented IDs from CLAUDE.md", () => {
    const expected = [
      "SP1", "AI1", "MAA1", "TP1", "CI1", "EL1", "GIT1", "SL1",
      "WIKI1", "CAL1", "EMAIL1", "INV1", "SURV1", "ITS1", "CONF1",
      "MT1", "CS1", "DEF1",
    ];
    for (const id of expected) {
      expect(ATTACKS[id]).toBeDefined();
    }
  });
});

describe("lookupAttack", () => {
  it("returns null for empty input", () => {
    expect(lookupAttack("")).toBeNull();
  });

  it("returns null for unknown ID", () => {
    expect(lookupAttack("ZZZ99")).toBeNull();
  });

  it("matches plain ID", () => {
    expect(lookupAttack("SP1")?.id).toBe("SP1");
    expect(lookupAttack("AI1")?.id).toBe("AI1");
  });

  it("strips ' vN' version suffix", () => {
    expect(lookupAttack("SL1 v5")?.id).toBe("SL1");
    expect(lookupAttack("SP1 v2")?.id).toBe("SP1");
    expect(lookupAttack("CONF1 v3")?.id).toBe("CONF1");
  });

  it("strips '-FC' suffix", () => {
    expect(lookupAttack("SP1-FC")?.id).toBe("SP1");
  });

  it("strips ' full chain' suffix", () => {
    expect(lookupAttack("SP1 full chain")?.id).toBe("SP1");
  });

  it("scans tokens for combined IDs like 'CONF1-MAA1-v2'", () => {
    const r = lookupAttack("CONF1-MAA1-v2");
    expect(r).not.toBeNull();
    expect(["CONF1", "MAA1"]).toContain(r!.id);
  });
});
