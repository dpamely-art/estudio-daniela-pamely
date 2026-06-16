"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import PaymentSelector from "../components/PaymentSelector";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PagoPage() {

  const router = useRouter();

  const [paymentMethod, setPaymentMethod] =
    useState<"apple" | "mercadopago">(
      "apple"
    );

  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "140px 60px 80px",
          color: "#ECE3D9",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "11px",
            letterSpacing: ".32em",
            textTransform: "uppercase",
          }}
        >
          Expediente del coleccionista
        </div>

        <h1
          style={{
            marginTop: "14px",
            fontSize: "54px",
            fontWeight: 200,
          }}
        >
          Método de incorporación
        </h1>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "760px",
            color: "rgba(255,255,255,.68)",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          Selecciona el método con el que deseas
          continuar la incorporación de tu obra al
          Archivo del Estudio Daniela Pamely.
        </p>

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <PaymentSelector
            method={paymentMethod}
            onChange={setPaymentMethod}
          />
        </div>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={() =>
              router.push("/arte/confirmacion")
            }
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
            Continuar
          </button>
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}