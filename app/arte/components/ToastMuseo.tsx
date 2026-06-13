"use client";

import Link from "next/link";

type Props = {
  visible: boolean;
  title: string;
  subtitle: string;
};

export default function ToastMuseo({
  visible,
  title,
  subtitle,
}: Props) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "32px",
        right: "32px",

        width: "390px",

        padding: "26px",

        borderRadius: "20px",

        background:
          "linear-gradient(180deg, rgba(14,15,20,.98), rgba(8,9,12,.98))",

        border:
          "1px solid rgba(216,174,136,.28)",

        backdropFilter: "blur(20px)",

        color: "#ECE3D9",

        zIndex: 9999,

        boxShadow:
          "0 24px 80px rgba(0,0,0,.45)",
      }}
    >
      <div
        style={{
          color: "#D8AE88",
          fontSize: "11px",
          letterSpacing: ".30em",
          textTransform: "uppercase",
        }}
      >
        ✓ Obra incorporada
      </div>

      <div
        style={{
          marginTop: "14px",
          fontSize: "30px",
          fontWeight: 200,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "14px",
          color: "rgba(255,255,255,.68)",
          lineHeight: 1.7,
          fontSize: "15px",
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          marginTop: "22px",
          borderTop:
            "1px solid rgba(216,174,136,.12)",
          paddingTop: "18px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "rgba(255,255,255,.55)",
            fontSize: "12px",
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Puedes continuar explorando
        </span>

        <Link
          href="/arte/mi-coleccion"
          style={{
            textDecoration: "none",
            color: "#D8AE88",
            fontSize: "12px",
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          Ver mi selección →
        </Link>
      </div>
    </div>
  );
}