"use client";

import type { FeedbackFields, FeedbackPrompt } from "@/lib/types";

type FeedbackSectionProps = {
  feedback: FeedbackFields;
  prompts: FeedbackPrompt[];
  onChange: (feedback: FeedbackFields) => void;
};

export function FeedbackSection({ feedback, prompts, onChange }: FeedbackSectionProps) {
  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <h2 className="section-title">Zusammenfassende Rückmeldung</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {prompts.map((field) => (
          <label key={field.key} className="block">
            <span className="field-label">{field.label}</span>
            <textarea
              className="field min-h-36"
              value={feedback[field.key]}
              onChange={(event) => onChange({ ...feedback, [field.key]: event.target.value })}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
