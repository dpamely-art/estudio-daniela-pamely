"use client";

type ObraInfoPanelProps = {
  coleccion: string;
  titulo: string;
  edicion: string;
};

export default function ObraInfoPanel({
  coleccion,
  titulo,
  edicion,
}: ObraInfoPanelProps) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <span
        style={{
          color: "#D8AE88",

          fontSize: "12px",

          letterSpacing: ".35em",

          textTransform: "uppercase",

          fontWeight: 400,
        }}
      >
        {coleccion}
      </span>

      <h1
        style={{
          marginTop: "2px",

          marginBottom: "2px",

          color: "#ECE3D9",

          fontSize: "46px",

          lineHeight: ".90",

          fontWeight: 200,
        }}
      >
        {titulo}
      </h1>

      <span
        style={{
          color: "rgba(255,255,255,.58)",

          fontSize: "10px",

          letterSpacing: ".22em",

          textTransform: "uppercase",
        }}
      >
        {edicion}
      </span>
      
    </section>
  );
}