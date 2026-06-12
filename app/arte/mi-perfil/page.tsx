"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import Link from "next/link";

<section
  style={{
    width: "100%",
    borderTop: "1px solid rgba(255,255,255,.08)",
    borderBottom: "1px solid rgba(255,255,255,.08)",

    background:
      "linear-gradient(90deg, rgba(10,20,36,.88), rgba(8,18,34,.72))",

    padding: "26px 0",
  }}
>
  <div
    style={{
      width: "min(1280px,92%)",
      margin: "0 auto",

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      gap: "40px",

      flexWrap: "wrap",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <div
        style={{
          width: "78px",
          height: "78px",

          borderRadius: "50%",

          border: "1px solid rgba(216,174,136,.55)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "#D8AE88",

          fontSize: "34px",
        }}
      >
        👤
      </div>

      <div>
        <div
          style={{
            color: "#ECE3D9",
            fontSize: "42px",
            fontWeight: 200,
            lineHeight: 1.2,
          }}
        >
          Bienvenida de nuevo, Daniela
        </div>

        <div
          style={{
            color: "rgba(255,255,255,.72)",
            fontSize: "20px",
            marginTop: "6px",
          }}
        >
          Explora, guarda y transforma tus espacios con arte.
        </div>
      </div>
    </div>

    <div
      style={{
        color: "rgba(255,255,255,.82)",
        textAlign: "right",
      }}
    >
      <div
        style={{
          fontSize: "15px",
          opacity: 0.7,
        }}
      >
        Miembro desde
      </div>

      <div
        style={{
          marginTop: "4px",
          fontSize: "24px",
          color: "#ECE3D9",
          fontWeight: 300,
        }}
      >
        junio 2026
      </div>
    </div>
  </div>
</section>