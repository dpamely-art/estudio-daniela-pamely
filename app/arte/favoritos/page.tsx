"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useMuseum } from "../context/MuseumContext";
import Link from "next/link";

export default function FavoritosPage() {
  const {
  favoriteWorks,
  removeFavorite,
} = useMuseum();

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
          {favoriteWorks.length === 0 ? (
            "Aún no tienes obras guardadas."
          ) : (
            <>
  <p
    style={{
      marginBottom: "24px",
    }}
  >
    Tienes {favoriteWorks.length} obra(s)
    guardada(s).
  </p>

  <div
    style={{
      display: "grid",
      gap: "24px",
    }}
  >
    {favoriteWorks.map((work) => (
      <div
        key={work.id}
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          padding: "20px",
          borderRadius: "18px",
          background:
            "rgba(255,255,255,.03)",
          border:
            "1px solid rgba(216,174,136,.10)",
        }}
      >
        <img
          src={work.image}
          alt={work.title}
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <div>
          <h3
            style={{
              margin: 0,
              fontWeight: 300,
            }}
          >
            {work.title}
          </h3>

          <p
            style={{
              marginTop: "8px",
              color:
                "rgba(255,255,255,.65)",
            }}
          >
            {work.price}
          </p>

            <Link
  href={`/arte/obras/${work.id}`}
  style={{
    display: "inline-block",
    marginTop: "12px",
    color: "#D8AE88",
    textDecoration: "none",
    fontSize: "14px",
  }}
>
  Ver obra →
</Link>
<button
  onClick={() =>
    removeFavorite(work.id)
  }
  style={{
    display: "block",
    marginTop: "12px",
    background: "transparent",
    border: "none",
    color: "#B86B6B",
    cursor: "pointer",
    padding: 0,
    fontSize: "14px",
  }}
>
  Eliminar
</button>
        </div>
      </div>
    ))}
  </div>
</>
          )}
        </div>
      </main>

      <FooterMuseo />
    </>
  );
}