"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useRouter } from "next/navigation";

export default function ConfirmacionPage() {

  const router = useRouter();

  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "140px 60px 100px",
          color: "#ECE3D9",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "11px",
            letterSpacing: ".34em",
            textTransform: "uppercase",
          }}
        >
          Incorporación confirmada
        </div>

        <h1
          style={{
            marginTop: "18px",
            fontSize: "58px",
            fontWeight: 200,
          }}
        >
          Bienvenido al Archivo
        </h1>

        <p
          style={{
            margin: "30px auto 0",
            maxWidth: "720px",
            lineHeight: 1.9,
            color: "rgba(255,255,255,.68)",
            fontSize: "18px",
          }}
        >
          El Museo ha recibido tu solicitud de
          incorporación y ha iniciado la preparación
          de tu expediente. A continuación podrás
          consultar el certificado generado para esta
          incorporación.
        </p>

        <div
          style={{
            marginTop: "60px",
            padding: "36px",
            borderRadius: "24px",
            background:
              "linear-gradient(180deg,#11141A,#0A0C10)",
            border:
              "1px solid rgba(216,174,136,.18)",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: 200,
            }}
          >
            🏛️ Incorporación aceptada
          </div>

          <div
            style={{
              marginTop: "20px",
              color: "rgba(255,255,255,.62)",
              lineHeight: 1.8,
            }}
          >
            El siguiente paso es consultar el
            certificado emitido por el Estudio para
            esta incorporación.
          </div>
        </div>

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <button
            onClick={() =>
              router.push("/arte/certificados")
            }
            style={{
              height: "56px",
              padding: "0 36px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(90deg,#D8AE88,#C98E62)",
              color: "#111",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Ver certificado
          </button>
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}