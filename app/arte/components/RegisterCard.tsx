"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterCard() {

  const [showPassword, setShowPassword] =
useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
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
          Crear cuenta
        </h2>

        <p
          style={{
  color: "rgba(255,255,255,.68)",

  textAlign: "center",

  fontSize: "14px",

  fontWeight: 300,

  letterSpacing: ".04em",

  lineHeight: 1.45,

  marginBottom: "24px",
}}
        >
          Comienza tu elección privada
          <br />
          el museo te espera
        </p>

        <input
  type="email"
  placeholder="Correo electrónico"
  style={{
    width: "100%",
    height: "46px",
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

<input
  type="text"
  placeholder="Nombre de usuario"
  style={{
    width: "100%",
    height: "46px",
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
    marginBottom: "16px",
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
    onClick={() => setShowPassword(!showPassword)}
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
    position: "relative",
    marginBottom: "18px",
  }}
>
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirmar contraseña"
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
      setShowConfirmPassword(!showConfirmPassword)
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
    {showConfirmPassword ? "🙈" : "👁"}
  </button>
</div>

       <div
  style={{
    marginBottom: "24px",
  }}
>
  <label
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",

      color: "rgba(255,255,255,.78)",

      fontSize: "13px",

      lineHeight: 1.5,

      cursor: "pointer",
    }}
  >
    <input
      type="checkbox"
      style={{
        marginTop: "2px",

        width: "16px",
        height: "16px",

        accentColor: "#D8AE88",

        cursor: "pointer",
      }}
    />

    <span>
      Autorizo el tratamiento de mis datos y acepto los{" "}
      <span
        style={{
          color: "#D8AE88",
        }}
      >
        Términos y Condiciones
      </span>{" "}
      y la{" "}
      <span
        style={{
          color: "#D8AE88",
        }}
      >
        Política de Privacidad
      </span>.
    </span>
  </label>

  <label
    style={{
      display: "flex",
      alignItems: "center",

      gap: "10px",

      marginTop: "12px",

      color: "rgba(255,255,255,.62)",

      fontSize: "13px",

      cursor: "pointer",
    }}
  >
    <input
      type="checkbox"
      style={{
        width: "16px",
        height: "16px",

        accentColor: "#D8AE88",
      }}
    />

    Quiero recibir novedades, nuevas colecciones y experiencias del museo.
  </label>
</div>
        <button
          style={{
            width: "100%",
            height: "48px",

            borderRadius: "999px",

            border: "none",

            background:
              "linear-gradient(90deg,#D8AE88,#C98E62)",

            color: "#111",

            letterSpacing: ".18em",

            fontSize: "13px",

            fontWeight: 500,

            cursor: "pointer",
          }}
        >
          CREAR CUENTA
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
    height: "48px",

    borderRadius: "999px",

    background: "transparent",

    border: "1px solid rgba(216,174,136,.65)",

    color: "#D8AE88",

    letterSpacing: ".22em",

    fontSize: "12px",

    fontWeight: 300,

    cursor: "pointer",

    transition: ".35s",
  }}
>
  CONTINUAR CON GOOGLE
</button>

     <div
  style={{
    marginTop: "26px",

    textAlign: "center",
  }}
>
  <div
    style={{
      color: "rgba(255,255,255,.62)",

      fontSize: "14px",

      fontWeight: 300,

      marginBottom: "10px",
    }}
  >
    ¿Ya formas parte del museo?
  </div>

  <Link
    href="/arte/ingresar"
    style={{
      color: "#D8AE88",

      textDecoration: "none",

      fontSize: "15px",

      fontWeight: 300,

      letterSpacing: ".04em",

      transition: ".35s",
    }}
  >
    Entrar a mi colección →
  </Link>
</div>

      </div>
    </section>
  );
}