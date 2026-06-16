"use client";

import ObraCard from "./ObraCard";
import { obrasMock } from "../../data/obrasMock";

export default function ObrasGrid() {
  if (obrasMock.length === 0) {
    return (
      <section
        style={{
          border: "1px dashed rgba(216,174,136,.22)",
          borderRadius: "18px",
          padding: "70px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "64px",
          }}
        >
          🎨
        </div>

        <div
          style={{
            marginTop: "18px",
            color: "#ECE3D9",
            fontSize: "28px",
            fontWeight: 200,
          }}
        >
          No existen obras registradas
        </div>

        <div
          style={{
            marginTop: "12px",
            color: "rgba(255,255,255,.58)",
          }}
        >
          Cuando agregues una obra aparecerá aquí.
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",
        gap: "24px",
      }}
    >
      {obrasMock.map((obra) => (
        <ObraCard
          key={obra.id}
          titulo={obra.titulo}
          coleccion={obra.coleccion}
          estado={obra.estado}
          precio={obra.precio}
        />
      ))}
    </section>
  );
}