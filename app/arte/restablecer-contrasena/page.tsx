"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import Link from "next/link";

export default function RestablecerContrasenaPage() {
  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        className="
          relative
          w-full
          min-h-screen
          flex
          flex-col
        "
      >

        {/* Background */}

        <div
          className="
            absolute
            inset-0
            -z-10
          "
          style={{
            backgroundImage:
              "url('/fondoingresar.png')",

            backgroundSize: "cover",

            backgroundPosition: "center",

            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="
            absolute
            inset-0
            -z-10
          "
          style={{
            background:
              "rgba(5,8,14,.28)",
          }}
        />

<section
  className="
    flex-1

    flex
    items-center
    justify-center

    px-6
  "
>
  <div
    className="
      w-full
      max-w-[1200px]

      grid

      lg:grid-cols-2

      gap-24

      items-center
    "
  >

    {/* Columna izquierda */}

    <div>

      <h1
        style={{
          color: "#ECE3D9",
          fontSize: "64px",
          fontWeight: 200,
          lineHeight: 1.05,
          marginBottom: "34px",
        }}
      >
        Nueva
        <br />
        contraseña
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,.82)",
          fontSize: "20px",
          lineHeight: 1.8,
          maxWidth: "520px",
        }}
      >
        Algunas puertas solo necesitan
        una nueva llave para volver a abrirse.
      </p>

    </div>

    <div
  style={{
    position: "relative",

    width: "100%",
    maxWidth: "580px",

    marginLeft: "auto",
    marginTop: "150px",

    background: "rgba(18,24,34,.38)",

    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",

    border: "1px solid rgba(255,255,255,.10)",

    borderRadius: "14px",

    padding: "34px 42px 30px 42px",

    boxShadow:
      "0 40px 120px rgba(0,0,0,.22)",
  }}
>

  <h2
    style={{
      color: "#ECE3D9",

      fontWeight: 200,

      fontSize: "40px",

      textAlign: "center",

      marginBottom: "10px",
    }}
  >
    Crear nueva contraseña
  </h2>

  <p
    style={{
      color: "rgba(255,255,255,.68)",

      textAlign: "center",

      fontSize: "15px",

      lineHeight: 1.6,

      marginBottom: "34px",
    }}
  >
    Define una nueva contraseña para proteger tu acceso al museo.
  </p>

   <input
  type="password"
  placeholder="Nueva contraseña"
  style={{
    width: "100%",
    height: "52px",

    marginBottom: "22px",

    padding: "0 18px",

    background: "rgba(255,255,255,.06)",

    border:
      "1px solid rgba(255,255,255,.12)",

    borderRadius: "999px",

    color: "#ECE3D9",

    outline: "none",
  }}
/>

<input
  type="password"
  placeholder="Confirmar contraseña"
  style={{
    width: "100%",
    height: "52px",

    marginBottom: "22px",

    padding: "0 18px",

    background: "rgba(255,255,255,.06)",

    border:
      "1px solid rgba(255,255,255,.12)",

    borderRadius: "999px",

    color: "#ECE3D9",

    outline: "none",
  }}
/>

<Link
  href="/arte/acceso-restaurado"
  style={{
    textDecoration: "none",
    display: "block",
  }}
>
  <button
    style={{
      width: "100%",
      height: "52px",

      borderRadius: "999px",

      border: "none",

      background:
        "linear-gradient(90deg,#D8AE88,#C98E62)",

      color: "#111",

      letterSpacing: ".22em",

      fontSize: "12px",

      fontWeight: 500,

      cursor: "pointer",
    }}
  >
    ACTUALIZAR CONTRASEÑA
  </button>
</Link>

<div
  style={{
    marginTop: "26px",

    textAlign: "center",
  }}
>
  <div
    style={{
      color: "rgba(255,255,255,.58)",

      fontSize: "14px",

      lineHeight: 1.7,
    }}
  >
    Una vez actualizada, las salas del museo volverán a estar abiertas para ti.
  </div>
</div>

<div
  style={{
    marginTop: "28px",

    textAlign: "center",
  }}
>
  <a
    href="/arte/ingresar"
    style={{
      color: "#D8AE88",

      textDecoration: "none",

      fontSize: "16px",

      fontWeight: 300,

      letterSpacing: ".03em",
    }}
  >
    ← Volver a ingresar
  </a>
</div>

</div>

  </div>
</section>

        <div className="flex-1" />

        <FooterMuseo />

      </main>
    </>
  );
}