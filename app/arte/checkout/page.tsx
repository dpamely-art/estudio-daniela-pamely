"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useMuseum } from "../context/MuseumContext";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutActions from "../components/CheckoutActions";

export default function CheckoutPage() {
  const { selectedWorks } = useMuseum();

const total = selectedWorks.reduce(
  (sum, work) =>
    sum +
    Number(
      work.price.replace(/[^\d]/g, "")
    ),
  0
);

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
    gridTemplateColumns: "minmax(0,1.7fr) 420px",
    gap: "80px",
    marginTop: "50px",
    alignItems: "start",
  }}
>
  <div>
    <span
      style={{
        position: "sticky",
        top: "140px",

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
      Proceso de incorporación
    </h1>

    <p
  style={{
    color: "rgba(255,255,255,.68)",
    fontSize: "18px",
    lineHeight: 1.8,
    maxWidth: "720px",
  }}
>
  Has decidido incorporar las siguientes obras al
  archivo de tu colección. Antes de continuar, el
  Museo verificará cada pieza, su certificado de
  autenticidad y preparará el proceso de
  incorporación.
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
    marginTop: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: "rgba(255,255,255,.62)",
    fontSize: "14px",
  }}
>
  <div>
    <strong
      style={{
        color: "#D8AE88",
        fontWeight: 400,
      }}
    >
      Colección:
    </strong>{" "}
    {work.collection}
  </div>

  <div>
    <strong
      style={{
        color: "#D8AE88",
        fontWeight: 400,
      }}
    >
      Estado:
    </strong>{" "}
    Reservada para incorporación
  </div>
</div>

      <div
  style={{
    marginTop: "14px",
  }}
>
  <div
    style={{
      color: "#D8AE88",
      fontSize: "12px",
      letterSpacing: ".18em",
      textTransform: "uppercase",
    }}
  >
    Inversión
  </div>

  <div
    style={{
      marginTop: "6px",
      fontSize: "22px",
      fontWeight: 300,
      color: "#ECE3D9",
    }}
  >
    {work.price}
  </div>
</div>
    </div>
  ))
)}
  </div>

 <CheckoutSummary
  total={total}
  works={selectedWorks.length}
/>
   
    <CheckoutActions
  disabled={selectedWorks.length === 0}
/>

</section>
      </main>

      <FooterMuseo />
    </>
  );
}