"use client";

export default function Colecciones() {
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
        Centro de Colecciones
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Administrar colecciones
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Desde aquí podrás crear, editar,
        publicar y organizar las salas del
        museo y las futuras exposiciones del
        Estudio Daniela Pamely.
      </p>

      <div
        style={{
          marginTop: "42px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              color: "rgba(255,255,255,.58)",
              fontSize: "14px",
            }}
          >
            ¿Qué deseas hacer?
          </div>

          <div
            style={{
              marginTop: "8px",
              color: "#ECE3D9",
              fontSize: "28px",
              fontWeight: 200,
            }}
          >
            Crear una nueva colección.
          </div>
        </div>

        <button
          style={{
            height: "54px",
            padding: "0 34px",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
            background:
              "linear-gradient(90deg,#D8AE88,#C98E62)",
            color: "#111",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          ＋ Nueva colección
        </button>
      </div>

      <div
        style={{
          marginTop: "52px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px",
        }}
      >
        {[
          {
            title: "Publicadas",
            value: "5",
          },
          {
            title: "Borradores",
            value: "2",
          },
          {
            title: "Próximas",
            value: "1",
          },
          {
            title: "Archivadas",
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
    </section>
  );
}
