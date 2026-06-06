export type ProductForm =
  | "Podcast"
  | "Nachdichtung"
  | "Gerichtsakte"
  | "Lernfilm / BookTok"
  | "digitale Lernlandschaft / Game"
  | "Collage / Poster"
  | "Essay"
  | "Videoreportage"
  | "anderes Format";

export type RubricScore = number;

export type CriterionId = string;

export type ScoreMap = Record<CriterionId, RubricScore | null>;

export type CommentMap = Record<CriterionId, string>;

export type FeedbackFields = {
  staerken: string;
  lesart: string;
  gewinn: string;
  gesamteindruck: string;
};

export type FeedbackPrompt = {
  key: keyof FeedbackFields;
  label: string;
};

export type MetaFieldLabels = {
  readingTitle: string;
  author: string;
  productForm: string;
  productTitle: string;
  customProductForm: string;
};

export type MetaFieldConfig = {
  intro: string;
  readingTitleLabel: string;
  readingTitlePlaceholder: string;
  authorLabel: string;
  authorPlaceholder: string;
  productFormLabel: string;
  productTitleLabel: string;
  productTitlePlaceholder: string;
  customProductFormLabel: string;
  productFormOptions: ProductForm[];
  hideProductForm?: boolean;
  productFormLocked?: boolean;
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
