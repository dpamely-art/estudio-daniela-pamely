"use client";

export default function Certificados() {
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
        Autenticidad
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Certificados
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Cada obra del Estudio cuenta con un
        certificado único de autenticidad y
        procedencia. Desde aquí podrás emitir,
        consultar y administrar el archivo
        documental.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "18px",
        }}
      >
        {[
          {
            title: "Emitidos",
            value: "18",
          },
          {
            title: "Pendientes",
            value: "2",
          },
          {
            title: "Verificados",
            value: "15",
          },
          {
            title: "Archivados",
            value: "31",
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
          marginTop: "40px",
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
        En la incidencia #005 este módulo se
        conectará automáticamente con Firebase
        para generar certificados digitales y
        códigos de verificación únicos.
      </div>
    </section>
  );
}