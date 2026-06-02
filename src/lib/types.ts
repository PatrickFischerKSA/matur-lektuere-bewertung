export type ProductForm =
  | "Podcast"
  | "Nachdichtung"
  | "Gerichtsakte"
  | "Lernfilm / BookTok"
  | "digitale Lernlandschaft / Game"
  | "Collage / Poster"
  | "Essay"
  | "anderes Format";

export type RubricScore = 1 | 2 | 3 | 4;

export type CriterionId =
  | "textkenntnis"
  | "deutung"
  | "idee"
  | "ausarbeitung"
  | "reflexion";

export type ScoreMap = Record<CriterionId, RubricScore | null>;

export type CommentMap = Record<CriterionId, string>;

export type FeedbackFields = {
  staerken: string;
  lesart: string;
  gewinn: string;
  gesamteindruck: string;
};

export type AssessmentMeta = {
  studentName: string;
  className: string;
  readingTitle: string;
  author: string;
  productForm: ProductForm;
  customProductForm: string;
  productTitle: string;
  assessmentDate: string;
};

export type AssessmentDraft = {
  meta: AssessmentMeta;
  scores: ScoreMap;
  criterionComments: CommentMap;
  feedback: FeedbackFields;
};
