"use client";

export default function BenefitsPanel() {
  return (
    <section
      className="
      lg:translate-x-32
        flex
        flex-col
        justify-center

        max-w-[540px]

        px-8
      "
    >
      <h1
        style={{
          color: "#ECE3D9",

          fontSize: "46px",

          fontWeight: 200,

          marginBottom: "22px",
        }}
      >
        Crear tu cuenta
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,.66)",

          lineHeight: 1.9,

          fontSize: "17px",

          marginBottom: "42px",
        }}
      >
        Tu colección no comienza cuando
        adquieres una obra.

        <br />
        <br />

        Comienza cuando decides mirar el
        mundo de otra manera.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        <span
          style={{
            color: "#ECE3D9",
            fontSize: "16px",
            fontWeight: 300,
          }}
        >
          ✦ Guarda tus obras favoritas
        </span>

        <span
          style={{
            color: "#ECE3D9",
            fontSize: "16px",
            fontWeight: 300,
          }}
        >
          ✦ Accede a certificados y piezas especiales
        </span>

        <span
          style={{
            color: "#ECE3D9",
            fontSize: "16px",
            fontWeight: 300,
          }}
        >
          ✦ Descubre nuevas colecciones antes que nadie
        </span>
      </div>

      <div
        style={{
          marginTop: "54px",

          color: "rgba(255,255,255,.55)",

          fontSize: "15px",
        }}
      >
        ¿Ya formas parte del museo?

        <br />

        <span
          style={{
            color: "#D8AE88",
            cursor: "pointer",
          }}
        >
          Iniciar sesión →
        </span>
      </div>
    </section>
  );
}