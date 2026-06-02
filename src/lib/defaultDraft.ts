import type { AssessmentDraft, CommentMap, ScoreMap } from "./types";

const today = () => new Date().toISOString().slice(0, 10);

export function createEmptyScores(): ScoreMap {
  return {
    textkenntnis: null,
    deutung: null,
    idee: null,
    ausarbeitung: null,
    reflexion: null
  };
}

export function createEmptyComments(): CommentMap {
  return {
    textkenntnis: "",
    deutung: "",
    idee: "",
    ausarbeitung: "",
    reflexion: ""
  };
}

export function createEmptyDraft(): AssessmentDraft {
  return {
    meta: {
      studentName: "",
      className: "",
      readingTitle: "",
      author: "",
      productForm: "Podcast",
      customProductForm: "",
      productTitle: "",
      assessmentDate: today()
    },
    scores: createEmptyScores(),
    criterionComments: createEmptyComments(),
    feedback: {
      staerken: "",
      lesart: "",
      gewinn: "",
      gesamteindruck: ""
    }
  };
}
