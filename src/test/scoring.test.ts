import { describe, expect, it } from "vitest";
import { createEmptyDraft, createEmptyScores } from "@/lib/defaultDraft";
import {
  appendComment,
  calculateGrade,
  calculateTotalPoints,
  getCompletedCriteriaCount,
  validateAssessment
} from "@/lib/scoring";
import type { ScoreMap } from "@/lib/types";

describe("Punkte- und Notenberechnung", () => {
  it("summiert nur gesetzte Kriterienpunkte", () => {
    const scores: ScoreMap = {
      ...createEmptyScores(),
      textkenntnis: 4,
      deutung: 3,
      idee: 2
    };

    expect(calculateTotalPoints(scores)).toBe(9);
    expect(getCompletedCriteriaCount(scores)).toBe(3);
  });

  it("berechnet die Note mit der Formel Punkte / 20 * 5 + 1", () => {
    expect(calculateGrade(20)).toBe(6.0);
    expect(calculateGrade(18)).toBe(5.5);
    expect(calculateGrade(16)).toBe(5.0);
    expect(calculateGrade(14)).toBe(4.5);
    expect(calculateGrade(12)).toBe(4.0);
    expect(calculateGrade(10)).toBe(3.5);
    expect(calculateGrade(8)).toBe(3.0);
  });

  it("rundet auf eine Dezimalstelle", () => {
    expect(calculateGrade(17)).toBe(5.3);
    expect(calculateGrade(15)).toBe(4.8);
    expect(calculateGrade(1)).toBe(1.3);
  });

  it("begrenzt Punkte ausserhalb des gültigen Bereichs", () => {
    expect(calculateGrade(-4)).toBe(1.0);
    expect(calculateGrade(99)).toBe(6.0);
  });
});

describe("Validierung und Kommentare", () => {
  it("meldet fehlende Pflichtfelder und offene Kriterien", () => {
    const draft = createEmptyDraft();

    expect(validateAssessment(draft)).toEqual(
      expect.arrayContaining([
        "Name der Schülerin oder des Schülers fehlt.",
        "Klasse fehlt.",
        "Titel der Lektüre fehlt.",
        "Autorin oder Autor fehlt.",
        "Alle fünf Kriterien brauchen eine Punktestufe."
      ])
    );
  });

  it("validiert das freie Formatfeld", () => {
    const draft = createEmptyDraft();
    draft.meta.productForm = "anderes Format";

    expect(validateAssessment(draft)).toContain("Das andere Format muss kurz benannt werden.");
  });

  it("fügt Kommentarbausteine lesbar an", () => {
    expect(appendComment("", "Erster Baustein.")).toBe("Erster Baustein.");
    expect(appendComment("Vorhandener Kommentar.", "Zweiter Baustein.")).toBe(
      "Vorhandener Kommentar.\nZweiter Baustein."
    );
  });
});
