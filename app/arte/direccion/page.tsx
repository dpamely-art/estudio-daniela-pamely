"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useRouter } from "next/navigation";

export default function DireccionPage() {

  const router = useRouter();

  const inputStyle = {
    width: "100%",
    height: "52px",
    padding: "0 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    color: "#ECE3D9",
    outline: "none",
  } as const;

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
          Dirección de incorporación
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
          Esta información permitirá al Museo
          preparar el envío, calcular tiempos de
          entrega y generar correctamente el
          expediente de incorporación.
        </p>

        <div
          style={{
            marginTop: "50px",
            padding: "30px",
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
              fontSize: "12px",
              letterSpacing: ".22em",
              textTransform: "uppercase",
            }}
          >
            Dirección
          </div>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gap: "16px",
            }}
          >
            <input
              placeholder="País"
              style={inputStyle}
            />

            <input
              placeholder="Estado"
              style={inputStyle}
            />

            <input
              placeholder="Ciudad"
              style={inputStyle}
            />

            <input
              placeholder="Código Postal"
              style={inputStyle}
            />

            <input
              placeholder="Dirección completa"
              style={inputStyle}
            />
          </div>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() =>
                router.push("/arte/envio")
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
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}