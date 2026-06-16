"use client";

export default function Suscripciones() {
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
        Membresías
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Suscripciones
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Administra las membresías de
        Coleccionistas, beneficios exclusivos,
        renovaciones y estadísticas de
        permanencia.
      </p>

      <div
        style={{
          marginTop: "42px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px",
        }}
      >
        {[
          {
            title: "Mensuales",
            value: "14",
          },
          {
            title: "Anuales",
            value: "9",
          },
          {
            title: "Renovaciones",
            value: "6",
          },
          {
            title: "Canceladas",
            value: "1",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              border:
                "1px solid rgba(216,174,136,.14)",
              borderRadius: "18px",
              padding: "22px",
              background:
                "linear-gradient(180deg,#11141A,#0A0C10)",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,.58)",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                marginTop: "10px",
                fontSize: "42px",
                color: "#ECE3D9",
                fontWeight: 200,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}