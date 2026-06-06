import { describe, expect, test } from "vitest";
import { createEmptyDraft } from "@/lib/defaultDraft";
import { buildWordDocumentHtml, createWordExportFilename } from "@/lib/wordExport";

describe("word export", () => {
  test("creates a stable doc filename from draft metadata", () => {
    const draft = createEmptyDraft();
    draft.meta.studentName = "Nora Steiner";
    draft.meta.readingTitle = "22 Bahnen";
    draft.meta.assessmentDate = "2026-06-03";

    expect(createWordExportFilename(draft)).toBe("2026-06-03-nora-steiner-22-bahnen.doc");
  });

  test("renders assessment content into the word document html", () => {
    const draft = createEmptyDraft();
    draft.meta.studentName = "Nora Steiner";
    draft.meta.className = "4a";
    draft.meta.readingTitle = "22 Bahnen";
    draft.meta.author = "Caroline Wahl";
    draft.scores.textkenntnis = 4;
    draft.criterionComments.textkenntnis = "Sehr textnah und präzise.";
    draft.feedback.gesamteindruck = "Insgesamt sehr überzeugend.";

    const html = buildWordDocumentHtml(draft, 17, 5.3);

    expect(html).toContain("Maturlektüre-Bewertung");
    expect(html).toContain("Nora Steiner");
    expect(html).toContain("22 Bahnen");
    expect(html).toContain("Textkenntnis und Textbezug");
    expect(html).toContain("Sehr textnah und präzise.");
    expect(html).toContain("17/20");
    expect(html).toContain("5.3");
    expect(html).toContain("Insgesamt sehr überzeugend.");
  });

  test("renders videoreportage labels and 30-point summary correctly", () => {
    const draft = createEmptyDraft([
      "bildgestaltung",
      "ton-verstaendlichkeit",
      "schnitt-technik",
      "kreativitaet-wirkung",
      "arbeitsprozess-zusammenarbeit"
    ], {
      productForm: "Videoreportage"
    });
    draft.meta.studentName = "Lia Graf";
    draft.meta.className = "3b";
    draft.meta.readingTitle = "Schule im Fokus";
    draft.meta.author = "Schulalltag";
    draft.meta.productTitle = "Team Nord";
    draft.scores.bildgestaltung = 6;
    draft.criterionComments.bildgestaltung = "Sehr bewusste Bildsprache.";

    const html = buildWordDocumentHtml(draft, 24, 5.0, {
      documentTitle: "Videoreportage-Bewertung Deutsch",
      maxPoints: 30,
      metaLabels: {
        readingTitle: "Titel der Videoreportage",
        author: "Thema / Fokus",
        productForm: "Produktform",
        productTitle: "Team / Gruppe",
        customProductForm: "Anderes Format"
      },
      feedbackPrompts: [
        { key: "staerken", label: "Das gelingt in der Reportage besonders gut:" },
        { key: "lesart", label: "Inhalt, Gestaltung oder Wirkung fallen besonders auf:" },
        { key: "gewinn", label: "Daran könnte die Reportage noch gewinnen:" },
        { key: "gesamteindruck", label: "Gesamteindruck:" }
      ],
      criteria: [
        {
          id: "bildgestaltung",
          title: "Bildgestaltung",
          levels: []
        }
      ]
    });

    expect(html).toContain("Videoreportage-Bewertung Deutsch");
    expect(html).toContain("Titel der Videoreportage");
    expect(html).toContain("Thema / Fokus");
    expect(html).toContain("Team / Gruppe");
    expect(html).toContain("24/30");
    expect(html).toContain("Sehr bewusste Bildsprache.");
  });
});
