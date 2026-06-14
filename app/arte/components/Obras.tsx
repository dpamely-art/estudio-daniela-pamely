"use client";

export default function Obras() {
  return (
    <section>
      <div
        style={{
          color: "#D8AE88",
          fontSize: "11px",
          letterSpacing: ".28em",
          textTransform: "uppercase",
        }}
      >
        Gestión de Obras
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Mis Obras
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Desde aquí administrarás todas las
        obras del Estudio. Podrás crear,
        editar, archivar y publicar nuevas
        piezas sin modificar el código.
      </p>

      <div
  style={{
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <div
    style={{
      color: "rgba(255,255,255,.6)",
      fontSize: "15px",
    }}
  >
    Aún no existen obras cargadas en este
    módulo.
  </div>

  <button
    style={{
      height: "52px",
      padding: "0 28px",
      borderRadius: "999px",
      border: "none",
      cursor: "pointer",
      background:
        "linear-gradient(90deg,#D8AE88,#C98E62)",
      color: "#111",
      fontSize: "15px",
      fontWeight: 600,
    }}
  >
    ＋ Nueva obra
  </button>
</div>
    </section>
  );
}