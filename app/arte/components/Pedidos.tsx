"use client";

export default function Pedidos() {
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
        Gestión comercial
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Pedidos especiales
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Desde aquí administrarás solicitudes
        personalizadas, piezas reservadas,
        cotizaciones y seguimiento de clientes.
      </p>

      <div
        style={{
          marginTop: "42px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "18px",
        }}
      >
        {[
          {
            title: "Pendientes",
            value: "3",
          },
          {
            title: "En proceso",
            value: "2",
          },
          {
            title: "Terminados",
            value: "18",
          },
          {
            title: "Entregados",
            value: "25",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              padding: "24px",
              borderRadius: "18px",
              border:
                "1px solid rgba(216,174,136,.14)",
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
                marginTop: "12px",
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
        Próximamente este módulo se conectará con
        el sistema de clientes, pagos y producción
        para dar seguimiento completo a cada obra.
      </div>
    </section>
  );
}