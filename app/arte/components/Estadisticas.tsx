"use client";

export default function Estadisticas() {
  return (
    <section>
      <h1
        style={{
          color:"#ECE3D9",
          fontSize:"42px",
          fontWeight:200,
        }}
      >
        Estadísticas
      </h1>

      <p
        style={{
          marginTop:"20px",
          color:"rgba(255,255,255,.65)",
          lineHeight:1.8,
        }}
      >
        Aquí se visualizarán ventas,
        visitantes, ingresos, colecciones,
        tendencias y comportamiento del museo.
      </p>
    </section>
  );
}