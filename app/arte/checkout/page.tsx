"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useMuseum } from "../context/MuseumContext";

export default function CheckoutPage() {
  const { selectedWorks } = useMuseum();
  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "140px 60px 80px",
          color: "#ECE3D9",
          minHeight: "100vh",
        }}
      >
        <section
  style={{
    display: "grid",
    gridTemplateColumns: "1.6fr .8fr",
    gap: "70px",
    marginTop: "50px",
    alignItems: "start",
  }}
>
  <div>
    <span
      style={{
        color: "#D8AE88",
        fontSize: "12px",
        letterSpacing: ".35em",
        textTransform: "uppercase",
      }}
    >
      Proceso de incorporación
    </span>

    <h1
      style={{
        marginTop: "12px",
        fontSize: "54px",
        fontWeight: 200,
        marginBottom: "18px",
      }}
    >
      Mi selección
    </h1>

    <p
      style={{
        color: "rgba(255,255,255,.68)",
        fontSize: "18px",
        lineHeight: 1.8,
        maxWidth: "720px",
      }}
    >
      Estás a punto de incorporar estas obras a tu
      colección. Antes de continuar revisaremos cada
      pieza y prepararemos el proceso de adquisición.
    </p>

    {selectedWorks.length === 0 ? (
  <div
    style={{
      color: "rgba(255,255,255,.55)",
    }}
  >
    No has incorporado ninguna obra todavía.
  </div>
) : (
  selectedWorks.map((work) => (
    <div
      key={work.id}
      style={{
        padding: "20px 0",
        borderBottom:
          "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: 200,
        }}
      >
        {work.title}
      </div>

      <div
        style={{
          marginTop: "6px",
          color: "rgba(255,255,255,.6)",
        }}
      >
        {work.collection}
      </div>

      <div
        style={{
          marginTop: "10px",
          color: "#D8AE88",
        }}
      >
        {work.price}
      </div>
    </div>
  ))
)}
  </div>

 <div
  style={{
    color: "#D8AE88",
    letterSpacing: ".22em",
    textTransform: "uppercase",
    fontSize: "12px",
  }}
>
  Resumen
</div>

<div
  style={{
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <span
      style={{
        color: "rgba(255,255,255,.6)",
      }}
    >
      Obras
    </span>

    <span>
      {selectedWorks.length}
    </span>
  </div>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <span
      style={{
        color: "rgba(255,255,255,.6)",
      }}
    >
      Certificado
    </span>

    <span>
      Incluido
    </span>
  </div>

  <hr
    style={{
      border: 0,
      borderTop:
        "1px solid rgba(255,255,255,.08)",
    }}
  />

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      fontSize: "26px",
      fontWeight: 200,
    }}
  >
    <span>Total</span>

    <span>
      {selectedWorks.reduce(
        (sum, work) =>
          sum +
          Number(
            work.price.replace(/[^\d]/g, "")
          ),
        0
      ).toLocaleString()}{" "}
      MXN
    </span>
  </div>
</div>
</section>
      </main>

      <FooterMuseo />
    </>
  );
}