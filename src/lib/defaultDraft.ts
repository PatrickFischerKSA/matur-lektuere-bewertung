import { rubricCriteria } from "./rubric";
import type { AssessmentDraft, AssessmentMeta, CommentMap, CriterionId, ScoreMap } from "./types";

const today = () => new Date().toISOString().slice(0, 10);

const defaultCriterionIds = rubricCriteria.map((criterion) => criterion.id);

export function createEmptyScores(criteria: CriterionId[] = defaultCriterionIds): ScoreMap {
  return Object.fromEntries(criteria.map((criterionId) => [criterionId, null]));
}

export function createEmptyComments(criteria: CriterionId[] = defaultCriterionIds): CommentMap {
  return Object.fromEntries(criteria.map((criterionId) => [criterionId, ""]));
}

export function createEmptyDraft(
  criteria: CriterionId[] = defaultCriterionIds,
  metaOverrides: Partial<AssessmentMeta> = {}
): AssessmentDraft {
  return {
    meta: {
      studentName: "",
      className: "",
      readingTitle: "",
      author: "",
      productForm: "Podcast",
      customProductForm: "",
      productTitle: "",
      assessmentDate: today(),
      ...metaOverrides
    },
    scores: createEmptyScores(criteria),
    criterionComments: createEmptyComments(criteria),
    feedback: {
      staerken: "",
      lesart: "",
      gewinn: "",
      gesamteindruck: ""
    }
  };
}
