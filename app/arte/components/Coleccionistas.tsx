"use client";

export default function Coleccionistas() {
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
        Comunidad del Estudio
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Coleccionistas
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Aquí podrás administrar los miembros
        del museo, suscripciones, historial de
        adquisiciones y beneficios exclusivos.
      </p>

      <div
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px",
        }}
      >
        {[
          {
            title: "Coleccionistas",
            value: "27",
          },
          {
            title: "Suscripción mensual",
            value: "14",
          },
          {
            title: "Suscripción anual",
            value: "9",
          },
          {
            title: "Pendientes",
            value: "4",
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
          padding: "26px",
          borderRadius: "18px",
          border:
            "1px solid rgba(216,174,136,.14)",
          background:
            "linear-gradient(180deg,#11141A,#0A0C10)",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "13px",
            letterSpacing: ".18em",
          }}
        >
          PRÓXIMAMENTE
        </div>

        <div
          style={{
            marginTop: "12px",
            color: "#ECE3D9",
            fontSize: "26px",
            fontWeight: 200,
          }}
        >
          CRM del Estudio
        </div>

        <p
          style={{
            marginTop: "14px",
            color: "rgba(255,255,255,.65)",
            lineHeight: 1.8,
          }}
        >
          Este módulo se conectará con Firebase
          para administrar usuarios, compras,
          certificados, membresías y actividad
          dentro del museo.
        </p>
      </div>
    </section>
  );
}