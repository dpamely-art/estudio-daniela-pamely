"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useRouter } from "next/navigation";

export default function EnvioPage() {
  const router = useRouter();

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
          Método de envío
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
          En una siguiente fase el Museo calculará
          automáticamente costos y tiempos de entrega
          según tu ubicación. Por ahora selecciona el
          método de incorporación.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gap: "18px",
          }}
        >
          {[
            "📦 Envío asegurado a domicilio",
            "🏛️ Entrega personalizada por el Estudio",
            "🌎 Envío internacional",
          ].map((item) => (
            <button
              key={item}
              style={{
                width: "100%",
                padding: "24px",
                borderRadius: "20px",
                border:
                  "1px solid rgba(216,174,136,.18)",
                background:
                  "linear-gradient(180deg,#11141A,#0A0C10)",
                color: "#ECE3D9",
                fontSize: "18px",
                fontWeight: 300,
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
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
              router.push("/arte/checkout")
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
            Continuar al pago
          </button>
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}