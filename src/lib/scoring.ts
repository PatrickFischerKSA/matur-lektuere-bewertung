import type { AssessmentDraft, ScoreMap } from "./types";

export const maxPoints = 20;

export function calculateTotalPoints(scores: ScoreMap): number {
  return Object.values(scores).reduce<number>((sum, score) => sum + (score ?? 0), 0);
}

export function calculateGrade(points: number, maximum = maxPoints): number {
  if (maximum <= 0) {
    throw new Error("Die maximale Punktzahl muss grösser als 0 sein.");
  }

  const clampedPoints = Math.max(0, Math.min(points, maximum));
  const rawGrade = (clampedPoints / maximum) * 5 + 1;

  return Math.round(rawGrade * 10) / 10;
}

export function getCompletedCriteriaCount(scores: ScoreMap): number {
  return Object.values(scores).filter((score) => score !== null).length;
}

export function validateAssessment(draft: AssessmentDraft): string[] {
  const errors: string[] = [];

  if (!draft.meta.studentName.trim()) {
    errors.push("Name der Schülerin oder des Schülers fehlt.");
  }

  if (!draft.meta.className.trim()) {
    errors.push("Klasse fehlt.");
  }

  if (!draft.meta.readingTitle.trim()) {
    errors.push("Titel der Lektüre fehlt.");
  }

  if (!draft.meta.author.trim()) {
    errors.push("Autorin oder Autor fehlt.");
  }

  if (draft.meta.productForm === "anderes Format" && !draft.meta.customProductForm.trim()) {
    errors.push("Das andere Format muss kurz benannt werden.");
  }

  if (!draft.meta.assessmentDate) {
    errors.push("Datum der Bewertung fehlt.");
  }

  if (getCompletedCriteriaCount(draft.scores) < 5) {
    errors.push("Alle fünf Kriterien brauchen eine Punktestufe.");
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
