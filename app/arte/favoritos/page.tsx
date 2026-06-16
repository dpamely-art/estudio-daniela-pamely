"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";

export default function FavoritosPage() {
  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          width: "min(1400px,92%)",
          margin: "0 auto",
          padding: "160px 0 100px",
          minHeight: "100vh",
          color: "#ECE3D9",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "12px",
            letterSpacing: ".28em",
            textTransform: "uppercase",
          }}
        >
          Colección personal
        </div>

        <h1
          style={{
            marginTop: "16px",
            fontSize: "58px",
            fontWeight: 200,
          }}
        >
          Mis Favoritos
        </h1>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "700px",
            color: "rgba(255,255,255,.65)",
            lineHeight: 1.8,
          }}
        >
          Aquí podrás conservar las obras
          que deseas estudiar, contemplar o
          adquirir más adelante.
        </p>

        <div
          style={{
            marginTop: "60px",
            padding: "40px",
            borderRadius: "24px",
            border:
              "1px solid rgba(216,174,136,.12)",
            background:
              "rgba(255,255,255,.03)",
          }}
        >
          Aún no tienes obras guardadas.
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}