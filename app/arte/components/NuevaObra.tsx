"use client";

export default function NuevaObra() {
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
        Asistente de creación
      </div>

      <h1
        style={{
          marginTop: "12px",
          fontSize: "42px",
          fontWeight: 200,
          color: "#ECE3D9",
        }}
      >
        Nueva Obra
      </h1>

      <p
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.65)",
          lineHeight: 1.8,
          maxWidth: "760px",
        }}
      >
        Bienvenida al asistente de creación.
        Desde aquí podrás crear una nueva obra
        para el Estudio sin modificar el código.
      </p>

        <div
  style={{
    marginTop: "42px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  }}
>
  {[
    "1. Tipo",
    "2. Identidad",
    "3. Arte",
    "4. Multimedia",
    "5. Comercial",
    "6. Publicar",
  ].map((step, index) => (
    <div
      key={step}
      style={{
        padding: "10px 18px",
        borderRadius: "999px",
        border: "1px solid rgba(216,174,136,.20)",
        background:
          index === 0
            ? "rgba(216,174,136,.12)"
            : "transparent",
        color:
          index === 0
            ? "#D8AE88"
            : "rgba(255,255,255,.55)",
        fontSize: "13px",
      }}
    >
      {step}
    </div>
  ))}
</div>

       <div
  style={{
    marginTop: "50px",
  }}
>
  <div
    style={{
      color: "#D8AE88",
      fontSize: "11px",
      letterSpacing: ".28em",
      textTransform: "uppercase",
      marginBottom: "20px",
    }}
  >
    Paso 1 de 6
  </div>

  <h2
    style={{
      fontSize: "34px",
      fontWeight: 200,
      color: "#ECE3D9",
      margin: 0,
    }}
  >
    ¿Qué deseas crear?
  </h2>
</div>

     <div
  style={{
    marginTop: "34px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(240px,1fr))",
    gap: "18px",
  }}
>
  {[
    {
      title: "🖼 Obra única",
      description:
        "Una pieza independiente para el museo.",
    },
    {
      title: "🎨 Serie",
      description:
        "Un conjunto de obras relacionadas.",
    },
    {
      title: "📜 Edición limitada",
      description:
        "Una obra con un número definido de ejemplares.",
    },
    {
      title: "✏️ Borrador",
      description:
        "Guardar una idea para desarrollarla después.",
    },
  ].map((item) => (
    <div
      key={item.title}
      style={{
        border:
          "1px solid rgba(216,174,136,.16)",
        borderRadius: "18px",
        padding: "22px",
        background:
          "linear-gradient(180deg,#11141A,#0A0C10)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          color: "#ECE3D9",
          fontSize: "24px",
          fontWeight: 200,
        }}
      >
        {item.title}
      </div>

      <div
        style={{
          marginTop: "12px",
          color: "rgba(255,255,255,.62)",
          lineHeight: 1.7,
          fontSize: "14px",
        }}
      >
        {item.description}
      </div>
    </div>
  ))}
</div>

       <div
  style={{
    marginTop: "42px",
    display: "flex",
    justifyContent: "flex-end",
  }}
>
  <button
    style={{
      height: "56px",
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
    Continuar →
  </button>
</div>

    </section>
  );
}