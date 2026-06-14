"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useMuseum } from "../context/MuseumContext";
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutActions from "../components/CheckoutActions";
import { useEffect, useState } from "react";
import PaymentSelector from "../components/PaymentSelector";
import ProcessingIncorporation from "../components/ProcessingIncorporation";

export default function CheckoutPage() {
  const { selectedWorks } = useMuseum();

  const [paymentMethod, setPaymentMethod] =
  useState<"apple" | "mercadopago">(
    "apple"
  );

  const [processing, setProcessing] =
  useState(false);

  const [ready, setReady] =
  useState(false);

  const [completed, setCompleted] =
  useState(false);

  useEffect(() => {
  if (!processing) return;

  const timer = setTimeout(() => {
    setReady(true);
  
    setTimeout(() => {
    setCompleted(true);
  }, 2000);
}, 2000);

  return () => clearTimeout(timer);
}, [processing]);

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
  ready={ready}
  onContinue={() =>
    setProcessing(true)
  }
/>

    <PaymentSelector
  method={paymentMethod}
  onChange={setPaymentMethod}
/>

   <>
  <ProcessingIncorporation
    visible={processing && !ready}
  />

  {ready && !completed && (
    <div
      style={{
        marginTop: "34px",
        padding: "28px",
        borderRadius: "22px",
        background:
          "linear-gradient(180deg,#11141A,#0A0C10)",
        border:
          "1px solid rgba(216,174,136,.18)",
      }}
    >
      <div
        style={{
          color: "#D8AE88",
          fontSize: "11px",
          letterSpacing: ".22em",
          textTransform: "uppercase",
        }}
      >
        Incorporación preparada
      </div>

      <div
        style={{
          marginTop: "18px",
          fontSize: "28px",
          fontWeight: 200,
        }}
      >
        ✅ Tu expediente ha sido generado
      </div>

      <div
        style={{
          marginTop: "18px",
          color: "rgba(255,255,255,.62)",
          lineHeight: 1.8,
        }}
      >
        El Museo ha reservado la edición y
        preparado el proceso para continuar
        con el método de incorporación
        seleccionado.
      </div>
    </div>
  )}
</>

       {completed && (
  <div
    style={{
      marginTop: "34px",
      padding: "34px",
      borderRadius: "22px",
      background:
        "linear-gradient(180deg,#11141A,#0A0C10)",
      border:
        "1px solid rgba(216,174,136,.18)",
      textAlign: "center",
    }}
  >
    <div
      style={{
        color: "#D8AE88",
        fontSize: "11px",
        letterSpacing: ".22em",
        textTransform: "uppercase",
      }}
    >
      Incorporación confirmada
    </div>

    <div
      style={{
        marginTop: "18px",
        fontSize: "34px",
        fontWeight: 200,
      }}
    >
      🏛️ Incorporación preparada


    </div>

    <div
      style={{
        marginTop: "22px",
        color: "rgba(255,255,255,.66)",
        lineHeight: 1.9,
      }}
    >
      <>
  Tu expediente ha sido preparado y la
  obra ha iniciado formalmente su proceso
  de incorporación al Archivo del
  Estudio Daniela Pamely.

  <br />
  <br />

  📜 Certificado de autenticidad:
  preparado.

  <br />
  <br />

  📦 Próximo paso:
  continuar con el método de
  incorporación seleccionado.
</>

<div
  style={{
    marginTop: "34px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <button
    style={{
      height: "54px",
      padding: "0 34px",
      borderRadius: "999px",
      border: "none",
      cursor: "pointer",

      background:
        "linear-gradient(90deg,#D8AE88,#C98E62)",

      color: "#111",

      fontSize: "15px",

      fontWeight: 500,
    }}
  >
    Continuar con el método seleccionado
  </button>
</div>

    </div>
  </div>
)}

</section>
      </main>

      <FooterMuseo />
    </>
  );
}