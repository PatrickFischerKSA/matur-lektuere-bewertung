import { rubricCriteria } from "./rubric";
import type { RubricCriterion } from "./rubric";
import type { AssessmentDraft } from "./types";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatMultiline(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return "<em>Keine Angabe</em>";
  }

  return escapeHtml(trimmed).replaceAll("\n", "<br>");
}

function productFormLabel(draft: AssessmentDraft): string {
  if (draft.meta.productForm === "anderes Format" && draft.meta.customProductForm.trim()) {
    return draft.meta.customProductForm.trim();
  }

  return draft.meta.productForm;
}

function safeFileSegment(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

export function createWordExportFilename(draft: AssessmentDraft): string {
  const student = safeFileSegment(draft.meta.studentName) || "bewertung";
  const reading = safeFileSegment(draft.meta.readingTitle) || "lektuere";
  const date = draft.meta.assessmentDate || "undatiert";
  return `${date}-${student}-${reading}.doc`;
}

export function buildWordDocumentHtml(
  draft: AssessmentDraft,
  totalPoints: number,
  grade: number,
  options?: {
    criteria?: RubricCriterion[];
    maxPoints?: number;
    documentTitle?: string;
  }
): string {
  const criteria = options?.criteria || rubricCriteria;
  const maximum = options?.maxPoints || 20;
  const documentTitle = options?.documentTitle || "Maturlektüre-Bewertung";

  const criterionMarkup = criteria.map((criterion) => {
    const score = draft.scores[criterion.id];
    const comment = draft.criterionComments[criterion.id];

    return `
      <section class="criterion">
        <h3>${escapeHtml(criterion.title)}</h3>
        <p><strong>Punktestufe:</strong> ${score ?? "-"}</p>
        <p>${formatMultiline(comment)}</p>
      </section>
    `;
  }).join("");

  return `
    <!doctype html>
    <html lang="de">
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(documentTitle)} ${escapeHtml(draft.meta.studentName || "")}</title>
        <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            color: #1f2933;
            margin: 36px;
            line-height: 1.5;
          }
          h1, h2, h3 {
            color: #1f2933;
            margin-bottom: 8px;
          }
          h1 {
            font-size: 24px;
          }
          h2 {
            font-size: 18px;
            margin-top: 28px;
          }
          h3 {
            font-size: 15px;
            margin-top: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 12px;
          }
          th, td {
            border: 1px solid #d4d8dd;
            padding: 8px 10px;
            text-align: left;
            vertical-align: top;
          }
          th {
            background: #f4f1eb;
            width: 30%;
          }
          .criterion {
            border-top: 1px solid #d4d8dd;
            padding-top: 12px;
          }
          .summary-box {
            margin-top: 20px;
            padding: 14px 16px;
            background: #f4f1eb;
            border: 1px solid #d4d8dd;
          }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(documentTitle)}</h1>
        <table>
          <tr><th>Name</th><td>${escapeHtml(draft.meta.studentName || "-")}</td></tr>
          <tr><th>Klasse</th><td>${escapeHtml(draft.meta.className || "-")}</td></tr>
          <tr><th>Lektüre</th><td>${escapeHtml(draft.meta.readingTitle || "-")}</td></tr>
          <tr><th>Autorin / Autor</th><td>${escapeHtml(draft.meta.author || "-")}</td></tr>
          <tr><th>Produktform</th><td>${escapeHtml(productFormLabel(draft))}</td></tr>
          <tr><th>Produkttitel</th><td>${escapeHtml(draft.meta.productTitle || "-")}</td></tr>
          <tr><th>Bewertungsdatum</th><td>${escapeHtml(draft.meta.assessmentDate || "-")}</td></tr>
        </table>

        <div class="summary-box">
          <p><strong>Gesamtpunkte:</strong> ${totalPoints}/${maximum}</p>
          <p><strong>Note:</strong> ${grade.toFixed(1)}</p>
        </div>

        <h2>Kriterien und Kommentare</h2>
        ${criterionMarkup}

        <h2>Gesamtfeedback</h2>
        <section class="criterion">
          <h3>Stärken</h3>
          <p>${formatMultiline(draft.feedback.staerken)}</p>
        </section>
        <section class="criterion">
          <h3>Lesart / Vertiefung</h3>
          <p>${formatMultiline(draft.feedback.lesart)}</p>
        </section>
        <section class="criterion">
          <h3>Gewinn der Form</h3>
          <p>${formatMultiline(draft.feedback.gewinn)}</p>
        </section>
        <section class="criterion">
          <h3>Gesamteindruck</h3>
          <p>${formatMultiline(draft.feedback.gesamteindruck)}</p>
        </section>
      </body>
    </html>
  `;
}
