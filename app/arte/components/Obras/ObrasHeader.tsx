"use client";

export default function ObrasHeader() {
  return (
    <>
      <div
        style={{
          color: "#D8AE88",
          fontSize: "11px",
          letterSpacing: ".28em",
          textTransform: "uppercase",
        }}
      >
        Gestión de obras
      </div>

      <h1
        style={{
          color: "#ECE3D9",
          fontWeight: 200,
          fontSize: "54px",
          marginTop: "14px",
        }}
      >
        Mis Obras
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,.70)",
          lineHeight: 1.8,
          maxWidth: "820px",
          fontSize: "18px",
        }}
      >
        Desde aquí administrarás todas las obras del Estudio.
        Podrás crear, editar, publicar, archivar y organizar
        cada pieza del museo.
      </p>
    </>
  );
}