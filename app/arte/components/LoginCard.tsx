"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginCard() {

  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <section
      className="
        w-full

        flex
        items-center
        justify-center

        px-6

        mt-32
        pb-24
      "
    >
      <div
        style={{
            position: "relative",
          width: "min(560px,92vw)",

          background:
            "rgba(18,24,34,.38)",

          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",

          border:
            "1px solid rgba(255,255,255,.10)",

          borderRadius: "14px",

          padding:
          "26px 40px 18px 40px",

          boxShadow:
  "0 40px 120px rgba(0,0,0,.22)",
        }}
      >

        <Link
  href="/arte"
  style={{
    position: "absolute",

    top: "18px",
    right: "18px",

    color: "rgba(255,255,255,.38)",

    fontSize: "24px",

    fontWeight: 200,

    textDecoration: "none",

    transition: ".35s",

    cursor: "pointer",

    lineHeight: 1,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#D8AE88";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color =
      "rgba(255,255,255,.38)";
  }}
>
  ×
</Link>

        <h2
          style={{
  color: "#ECE3D9",

  fontWeight: 200,

  fontSize: "30px",

  letterSpacing: ".02em",

  textAlign: "center",

  marginBottom: "6px",
}}
        >
          Hola otra vez
        </h2>

        <p
          style={{
  color: "rgba(255,255,255,.68)",

  textAlign: "center",

  fontSize: "14px",

  fontWeight: 300,

  letterSpacing: ".04em",

  lineHeight: 1.45,

  marginBottom: "20px",
}}
        >
          Tu colección privada
          <br />
          te está esperando.
        </p>
        <input
          type="email"
          placeholder="Correo electrónico"
          style={{
            width: "100%",
            height: "48px",
            marginBottom: "16px",
            padding: "0 18px",

            background: "rgba(255,255,255,.06)",

            border:
              "1px solid rgba(255,255,255,.12)",

            borderRadius: "999px",

            color: "#ECE3D9",

            outline: "none",
          }}
        />

        <div
  style={{
    position: "relative",
    marginBottom: "18px",
  }}
>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Contraseña"
    style={{
      width: "100%",
      height: "48px",
      padding: "0 52px 0 18px",

      background: "rgba(255,255,255,.06)",

      border:
        "1px solid rgba(255,255,255,.12)",

      borderRadius: "999px",

      color: "#ECE3D9",

      outline: "none",
    }}
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(!showPassword)
    }
    style={{
      position: "absolute",

      right: "16px",
      top: "50%",

      transform: "translateY(-50%)",

      background: "transparent",

      border: "none",

      color: "rgba(255,255,255,.72)",

      cursor: "pointer",

      fontSize: "18px",
    }}
  >
    {showPassword ? "🙈" : "👁"}
  </button>
</div>
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: "22px",

    fontSize: "14px",
  }}
>
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",

      color: "rgba(255,255,255,.82)",

      cursor: "pointer",
    }}
  >
    <input
      type="checkbox"
      style={{
        width: "16px",
        height: "16px",
        accentColor: "#CFA57C",
        cursor: "pointer",

    opacity: 0.82,
      }}
    />

    Recordarme
  </label>

  <span
    style={{
      color: "#D8AE88",
      cursor: "pointer",
      fontSize: "12px",
      letterSpacing: ".03em",
    }}
  >
    ¿Olvidaste tu contraseña?
  </span>
</div>
        <button
          style={{
            width: "100%",
            height: "50px",

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
          CONTINUAR
        </button>

         <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "18px",

    marginTop: "24px",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      flex: 1,
      height: "1px",
      background: "rgba(255,255,255,.16)",
    }}
  />

  <span
    style={{
      color: "#ECE3D9",
      fontSize: "18px",
      fontWeight: 300,
    }}
  >
    O
  </span>

  <div
    style={{
      flex: 1,
      height: "1px",
      background: "rgba(255,255,255,.16)",
    }}
  />
</div>
        
    <button
  style={{
    width: "100%",
    height: "50px",

    borderRadius: "999px",

    background: "transparent",

    border: "1px solid rgba(216,174,136,.65)",

    color: "#D8AE88",

    letterSpacing: ".22em",

    fontSize: "12px",

    fontWeight: 400,

    cursor: "pointer",

    transition: ".35s",
  }}
>
  CREAR CUENTA
</button>

     <div
  style={{
    marginTop: "22px",

    textAlign: "center",
  }}
>
  <div
    style={{
      color: "rgba(255,255,255,.78)",

      fontSize: "16px",

      fontWeight: 300,

      marginBottom: "4px",
    }}
  >
    ¿Aún no tienes cuenta?
  </div>

  <div
    style={{
      color: "rgba(255,255,255,.55)",

      fontSize: "13px",

      lineHeight: 1.6,

      fontWeight: 300,
    }}
  >
    Descubre colecciones,
    <br />
    certificados y experiencias exclusivas.
  </div>
</div>

      </div>
    </section>
  );
}