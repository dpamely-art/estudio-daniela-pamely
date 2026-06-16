"use client";

export default function Envios() {
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
        Logística
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Envíos
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Desde aquí administrarás las guías,
        entregas nacionales e internacionales,
        estados de envío y seguimiento de cada
        pieza.
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
            title: "Preparando",
            value: "2",
          },
          {
            title: "En tránsito",
            value: "4",
          },
          {
            title: "Entregados",
            value: "37",
          },
          {
            title: "Incidencias",
            value: "0",
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
                fontSize: "13px",
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                marginTop: "10px",
                color: "#ECE3D9",
                fontSize: "42px",
                fontWeight: 200,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "42px",
          padding: "24px",
          borderRadius: "18px",
          border:
            "1px solid rgba(216,174,136,.14)",
          background:
            "linear-gradient(180deg,#11141A,#0A0C10)",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
        }}
      >
        Este módulo se conectará posteriormente
        con paqueterías, generación automática
        de guías y seguimiento en tiempo real.
      </div>
    </section>
  );
}