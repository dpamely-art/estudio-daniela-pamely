"use client";

import { useWizard } from "./WizardContext";
import { slugify } from "../../../utils/slugify";

export default function StepIdentity() {

  const {
    draft,
    setDraft,
  } = useWizard();
  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          color: "#D8AE88",
          fontSize: "11px",
          letterSpacing: ".28em",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        Paso 1
      </div>

      <h1
        style={{
          color: "#ECE3D9",
          fontSize: "48px",
          fontWeight: 200,
          marginBottom: "18px",
        }}
      >
        Identidad
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,.70)",
          fontSize: "18px",
          lineHeight: 1.8,
          maxWidth: "720px",
          marginBottom: "50px",
        }}
      >
        Toda obra comienza con una identidad.
        Define su nombre y la forma en que será
        reconocida dentro del Archivo del Estudio.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "26px",
        }}
      >
        <div>
          <div
            style={{
              color: "#ECE3D9",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            Título
          </div>

          <input
                value={draft.title}
                onChange={(e) =>
                    setDraft({
                    ...draft,
                    title: e.target.value,
                    })
                }
                placeholder="Ej. Magia I"
                style={{
                    width: "100%",
                    height: "54px",
                    borderRadius: "12px",
                    border:
                    "1px solid rgba(255,255,255,.12)",
                    background:
                    "rgba(255,255,255,.04)",
                    color: "#ECE3D9",
                    padding: "0 18px",
                    outline: "none",
                    fontSize: "16px",
                }}
                />
            
        </div>

        <div>
          <div
            style={{
              color: "#ECE3D9",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            Subtítulo
          </div>

        <input
            onChange={(e) => {
  const title = e.target.value;

  setDraft({
    ...draft,
    title,
    slug: slugify(title),
  });
}}
            />
        </div>

        <div>
          <div
            style={{
              color: "#ECE3D9",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            Slug
          </div>

          <input
  value={draft.slug}
  readOnly
  placeholder="magia-i"
  style={{
    width: "100%",
    height: "54px",
    borderRadius: "12px",
    border:
      "1px solid rgba(255,255,255,.12)",
    background:
      "rgba(255,255,255,.04)",
    color: "#D8AE88",
    padding: "0 18px",
    outline: "none",
    fontSize: "16px",
  }}
/>
        </div>
      </div>
    </section>
  );
}