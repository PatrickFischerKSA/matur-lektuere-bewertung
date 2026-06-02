"use client";

import { productForms } from "@/lib/rubric";
import type { AssessmentMeta, ProductForm } from "@/lib/types";

type MetaFormProps = {
  meta: AssessmentMeta;
  onChange: (meta: AssessmentMeta) => void;
};

export function MetaForm({ meta, onChange }: MetaFormProps) {
  const update = <K extends keyof AssessmentMeta>(key: K, value: AssessmentMeta[K]) => {
    onChange({ ...meta, [key]: value });
  };

  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title">Neue Bewertung</h2>
          <p className="mt-1 text-sm text-ink/65">
            Stammdaten und Produktform für diese Rückmeldung.
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
          <span className="field-label">Titel der Lektüre</span>
          <input
            className="field"
            value={meta.readingTitle}
            onChange={(event) => update("readingTitle", event.target.value)}
            placeholder="Werk"
          />
        </label>
        <label>
          <span className="field-label">Autorin oder Autor</span>
          <input
            className="field"
            value={meta.author}
            onChange={(event) => update("author", event.target.value)}
            placeholder="Name"
          />
        </label>
        <label>
          <span className="field-label">Produktform</span>
          <select
            className="field"
            value={meta.productForm}
            onChange={(event) => update("productForm", event.target.value as ProductForm)}
          >
            {productForms.map((form) => (
              <option key={form} value={form}>
                {form}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="field-label">Titel des Lernprodukts</span>
          <input
            className="field"
            value={meta.productTitle}
            onChange={(event) => update("productTitle", event.target.value)}
            placeholder="optional"
          />
        </label>
        {meta.productForm === "anderes Format" ? (
          <label>
            <span className="field-label">Anderes Format</span>
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
