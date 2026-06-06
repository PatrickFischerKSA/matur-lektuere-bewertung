"use client";

import type { AssessmentMeta, MetaFieldConfig, ProductForm } from "@/lib/types";

type MetaFormProps = {
  meta: AssessmentMeta;
  config: MetaFieldConfig;
  onChange: (meta: AssessmentMeta) => void;
};

export function MetaForm({ meta, config, onChange }: MetaFormProps) {
  const update = <K extends keyof AssessmentMeta>(key: K, value: AssessmentMeta[K]) => {
    onChange({ ...meta, [key]: value });
  };

  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Neue Bewertung</h2>
          <p className="mt-1 text-sm text-ink/65">
            {config.intro}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label>
          <span className="field-label">Name der Schülerin oder des Schülers</span>
          <input
            className="field"
            value={meta.studentName}
            onChange={(event) => update("studentName", event.target.value)}
            placeholder="Vorname Nachname"
          />
        </label>
        <label>
          <span className="field-label">Klasse</span>
          <input
            className="field"
            value={meta.className}
            onChange={(event) => update("className", event.target.value)}
            placeholder="z. B. 4a"
          />
        </label>
        <label>
          <span className="field-label">{config.readingTitleLabel}</span>
          <input
            className="field"
            value={meta.readingTitle}
            onChange={(event) => update("readingTitle", event.target.value)}
            placeholder={config.readingTitlePlaceholder}
          />
        </label>
        <label>
          <span className="field-label">{config.authorLabel}</span>
          <input
            className="field"
            value={meta.author}
            onChange={(event) => update("author", event.target.value)}
            placeholder={config.authorPlaceholder}
          />
        </label>
        {config.hideProductForm ? null : (
          <label>
            <span className="field-label">{config.productFormLabel}</span>
            <select
              className="field"
              value={meta.productForm}
              disabled={config.productFormLocked}
              onChange={(event) => update("productForm", event.target.value as ProductForm)}
            >
              {config.productFormOptions.map((form) => (
                <option key={form} value={form}>
                  {form}
                </option>
              ))}
            </select>
          </label>
        )}
        <label>
          <span className="field-label">{config.productTitleLabel}</span>
          <input
            className="field"
            value={meta.productTitle}
            onChange={(event) => update("productTitle", event.target.value)}
            placeholder={config.productTitlePlaceholder}
          />
        </label>
        {meta.productForm === "anderes Format" ? (
          <label>
            <span className="field-label">{config.customProductFormLabel}</span>
            <input
              className="field"
              value={meta.customProductForm}
              onChange={(event) => update("customProductForm", event.target.value)}
              placeholder="Format benennen"
            />
          </label>
        ) : null}
        <label>
          <span className="field-label">Datum der Bewertung</span>
          <input
            className="field"
            type="date"
            value={meta.assessmentDate}
            onChange={(event) => update("assessmentDate", event.target.value)}
          />
        </label>
      </div>
    </section>
  );
}
