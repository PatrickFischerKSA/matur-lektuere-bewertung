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
});
