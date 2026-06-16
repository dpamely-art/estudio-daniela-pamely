"use client";

import { useState } from "react";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import Obras from "../components/Obras";
import Link from "next/link";
import Dashboard from "../components/Dashboard";
import NuevaObra from "../components/NuevaObra";
import Colecciones from "../components/Colecciones";
import Coleccionistas from "../components/Coleccionistas";
import Pedidos from "../components/Pedidos";
import Certificados from "../components/Certificados";
import Envios from "../components/Envios";
import Suscripciones from "../components/Suscripciones";
import Estadisticas from "../components/Estadisticas";
import Usuarios from "../components/Usuarios";
import Configuracion from "../components/Configuracion";

export default function MiPerfilPage() {
const [activeModule, setActiveModule] =
  useState("inicio");

  return (
    <>
      <NavigationMuseo onOpenConversation={() => {}} />

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
              <>
  <div
    style={{
      color: "#D8AE88",
      fontSize: "11px",
      letterSpacing: ".28em",
      textTransform: "uppercase",
    }}
  >
    Estudio Daniela Pamely
  </div>

  <div
    style={{
      color: "#ECE3D9",
      fontSize: "42px",
      fontWeight: 200,
      lineHeight: 1.2,
      marginTop: "10px",
    }}
  >
    Panel Privado de la Artista
  </div>
</>

              <div
  style={{
    color: "rgba(255,255,255,.72)",
    fontSize: "20px",
    marginTop: "10px",
    maxWidth: "760px",
    lineHeight: 1.7,
  }}
>
  Desde este espacio podrás administrar
  obras, colecciones, certificados,
  pedidos especiales y el Archivo del
  Estudio.
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

        <section
  style={{
    width: "min(1280px,92%)",
    margin: "60px auto 80px",
  }}
>
  <div
    style={{
      color: "#D8AE88",
      fontSize: "11px",
      letterSpacing: ".28em",
      textTransform: "uppercase",
      marginBottom: "28px",
    }}
  >
    Hoy en el Estudio
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(260px,1fr))",
      gap: "22px",
    }}
  >
    {[
      
  {
    icon: "🎨",
    title: "Obras",
    text: "Administrar el catálogo",
    status: "12 activas",
  },
  {
    icon: "📜",
    title: "Certificados",
    text: "Emitir y consultar",
    status: "18 emitidos",
  },
  {
    icon: "📦",
    title: "Pedidos especiales",
    text: "Solicitudes pendientes",
    status: "1 pendiente",
  },
  {
    icon: "🖼",
    title: "Colecciones",
    text: "Editar salas del museo",
    status: "5 publicadas",
  },

    ].map((item) => (
      <div
        key={item.title}
        style={{
          padding: "28px",
          borderRadius: "20px",
          border:
            "1px solid rgba(216,174,136,.16)",
          background:
            "linear-gradient(180deg,#11141A,#0A0C10)",
        }}
      >
        <div
          style={{
            fontSize: "34px",
          }}
        >
          {item.icon}
        </div>

        <div
          style={{
            marginTop: "18px",
            color: "#ECE3D9",
            fontSize: "28px",
            fontWeight: 200,
          }}
        >
          {item.title}
        </div>

        <div
          style={{
            marginTop: "10px",
            color: "rgba(255,255,255,.62)",
            lineHeight: 1.7,
          }}
        >
          {item.text}
        </div>

         <div
          style={{
            marginTop: "18px",
            color: "#D8AE88",
            fontSize: "13px",
            letterSpacing: ".08em",
          }}
        >
          {item.status}
</div>
         

      </div>
    ))}
  </div>
</section>

        <section
  style={{
    width: "min(1280px,92%)",
    margin: "0 auto 100px",
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: "32px",
    alignItems: "start",
  }}
>
  <aside
  style={{
    border: "1px solid rgba(216,174,136,.16)",
    borderRadius: "20px",
    padding: "24px",
    background:
      "linear-gradient(180deg,#11141A,#0A0C10)",
    position: "sticky",
    top: "120px",
  }}
>
  {[
    {
      label: "🏠 Inicio",
      value: "inicio",
    },
    {
      label: "🎨 Obras",
      value: "obras",
    },
    {
      label: "🖼 Colecciones",
      value: "colecciones",
    },
    {
      label: "👥 Coleccionistas",
      value: "coleccionistas",
    },
    {
      label: "📦 Pedidos",
      value: "pedidos",
    },
    {
      label: "📜 Certificados",
      value: "certificados",
    },
    {
      label: "🚚 Envíos",
      value: "envios",
    },
    {
      label: "💳 Suscripciones",
      value: "suscripciones",
    },
    {
      label: "📊 Estadísticas",
      value: "estadisticas",
    },
    {
      label: "👤 Usuarios",
      value: "usuarios",
    },
    {
      label: "⚙ Configuración",
      value: "configuracion",
    },
  ].map((item) => (
    <div
      key={item.value}
      onClick={() => setActiveModule(item.value)}
      style={{
        color: "#ECE3D9",
        borderBottom:
          "1px solid rgba(255,255,255,.06)",
        cursor: "pointer",
        background:
          activeModule === item.value
            ? "rgba(216,174,136,.10)"
            : "transparent",
        borderRadius: "10px",
        padding: "14px 12px",
      }}
    >
      {item.label}
    </div>
  ))}
</aside>
  <main
    style={{
      border: "1px solid rgba(216,174,136,.16)",
      borderRadius: "20px",
      padding: "34px",
      background:
        "linear-gradient(180deg,#11141A,#0A0C10)",
      minHeight: "700px",
    }}
  >

  {activeModule === "colecciones" && (
  <Colecciones />
)}

   {activeModule === "coleccionistas" && (
  <Coleccionistas />
)}

   {activeModule === "pedidos" && (
  <Pedidos />
)}

   {activeModule === "certificados" && (
  <Certificados />
)}
   
   {activeModule === "suscripciones" && (
  <Suscripciones />
)}

   {activeModule === "estadisticas" && (
  <Estadisticas />
)}

   {activeModule === "envios" && (
  <Envios />
)}

   {activeModule === "usuarios" && (
  <Usuarios />
)}

   {activeModule === "configuracion" && (
  <Configuracion />
)}

   {activeModule === "obras" && (
  <Obras
    onNew={() =>
      setActiveModule("nuevaObra")
    }
  />
)}

   {activeModule === "nuevaObra" && (
  <NuevaObra />
)}

   {activeModule === "colecciones" && (
  <div>
    <h2
      style={{
        color: "#ECE3D9",
        fontSize: "42px",
        fontWeight: 200,
      }}
    >
      Colecciones
    </h2>

    <p
      style={{
        marginTop: "18px",
        color: "rgba(255,255,255,.65)",
        lineHeight: 1.8,
      }}
    >
      Desde aquí administrarás las salas,
      colecciones permanentes y futuras
      exposiciones del museo.
    </p>
  </div>
)}

     {activeModule === "coleccionistas" && (
  <div>
    <h2
      style={{
        color: "#ECE3D9",
        fontSize: "42px",
        fontWeight: 200,
      }}
    >
      Coleccionistas
    </h2>

    <p
      style={{
        marginTop: "18px",
        color: "rgba(255,255,255,.65)",
        lineHeight: 1.8,
      }}
    >
      Aquí podrás consultar los miembros,
      sus suscripciones y el historial de
      su colección.
    </p>
  </div>
)}

     {activeModule === "pedidos" && (
  <div>
    <h2
      style={{
        color: "#ECE3D9",
        fontSize: "42px",
        fontWeight: 200,
      }}
    >
      Pedidos especiales
    </h2>

    <p
      style={{
        marginTop: "18px",
        color: "rgba(255,255,255,.65)",
        lineHeight: 1.8,
      }}
    >
      Gestiona solicitudes personalizadas,
      conversaciones y proyectos en
      desarrollo.
    </p>
  </div>
)}

  </main>
</section>

      <FooterMuseo />
    </>
  );
}