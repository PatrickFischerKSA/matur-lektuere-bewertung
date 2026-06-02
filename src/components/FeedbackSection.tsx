"use client";

import type { FeedbackFields } from "@/lib/types";

const fields: Array<{ key: keyof FeedbackFields; label: string }> = [
  { key: "staerken", label: "Das gelingt besonders gut:" },
  { key: "lesart", label: "Hier wird eine eigenständige Lesart sichtbar:" },
  { key: "gewinn", label: "Daran könnte das Produkt noch gewinnen:" },
  { key: "gesamteindruck", label: "Gesamteindruck:" }
];

type FeedbackSectionProps = {
  feedback: FeedbackFields;
  onChange: (feedback: FeedbackFields) => void;
};

export function FeedbackSection({ feedback, onChange }: FeedbackSectionProps) {
  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <h2 className="section-title">Zusammenfassende Rückmeldung</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
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
