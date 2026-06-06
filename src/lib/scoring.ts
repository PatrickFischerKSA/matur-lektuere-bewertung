import { rubricCriteria } from "./rubric";
import type { AssessmentDraft, CriterionId, MetaFieldLabels, ScoreMap } from "./types";

export const maxPoints = 20;
const allCriterionIds = rubricCriteria.map((criterion) => criterion.id);

export function calculateTotalPoints(
  scores: ScoreMap,
  criteria: CriterionId[] = allCriterionIds
): number {
  return criteria.reduce<number>((sum, criterionId) => sum + (scores[criterionId] ?? 0), 0);
}

export function calculateGrade(points: number, maximum = maxPoints): number {
  if (maximum <= 0) {
    throw new Error("Die maximale Punktzahl muss grösser als 0 sein.");
  }

  const clampedPoints = Math.max(0, Math.min(points, maximum));
  const rawGrade = (clampedPoints / maximum) * 5 + 1;

  return Math.round(rawGrade * 10) / 10;
}

export function getCompletedCriteriaCount(
  scores: ScoreMap,
  criteria: CriterionId[] = allCriterionIds
): number {
  return criteria.filter((criterionId) => scores[criterionId] != null).length;
}

export function validateAssessment(
  draft: AssessmentDraft,
  criteria: CriterionId[] = allCriterionIds,
  metaLabels?: Partial<MetaFieldLabels>
): string[] {
  const errors: string[] = [];
  const labels = {
    readingTitle: metaLabels?.readingTitle || "Titel der Lektüre",
    author: metaLabels?.author || "Autorin oder Autor",
    productForm: metaLabels?.productForm || "Produktform",
    productTitle: metaLabels?.productTitle || "Titel des Lernprodukts",
    customProductForm: metaLabels?.customProductForm || "Anderes Format"
  };

  if (!draft.meta.studentName.trim()) {
    errors.push("Name der Schülerin oder des Schülers fehlt.");
  }

  if (!draft.meta.className.trim()) {
    errors.push("Klasse fehlt.");
  }

  if (!draft.meta.readingTitle.trim()) {
    errors.push(`${labels.readingTitle} fehlt.`);
  }

  if (!draft.meta.author.trim()) {
    errors.push(`${labels.author} fehlt.`);
  }

  if (draft.meta.productForm === "anderes Format" && !draft.meta.customProductForm.trim()) {
    errors.push(`${labels.customProductForm} muss kurz benannt werden.`);
  }

  if (!draft.meta.assessmentDate) {
    errors.push("Datum der Bewertung fehlt.");
  }

  if (getCompletedCriteriaCount(draft.scores, criteria) < criteria.length) {
    errors.push(`Alle ${criteria.length} Kriterien brauchen eine Punktestufe.`);
  }

  return errors;
}

export function appendComment(existing: string, addition: string): string {
  const trimmedExisting = existing.trim();
  const trimmedAddition = addition.trim();

  if (!trimmedExisting) {
    return trimmedAddition;
  }

  return `${trimmedExisting}\n${trimmedAddition}`;
}
