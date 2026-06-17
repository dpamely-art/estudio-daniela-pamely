"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import { useRouter } from "next/navigation";
import { useMuseum } from "../context/MuseumContext";

export default function PerfilPage() {
  const router = useRouter();

const {
  selectedWorks,
  favoriteWorks,
  userType,
} = useMuseum();

  const cards = [
  {
    icon: "🖼",
    title: "Explorar Museo",
    subtitle: "Descubre las colecciones vigentes",
    route: "/arte/museo",
  },
  {
    icon: "🎨",
    title: "Colecciones",
    subtitle: "Recorre todas las series del Estudio",
    route: "/arte/museo",
  },
  {
    icon: "❤️",
    title: "Mi Colección",
    subtitle: "Consulta las obras seleccionadas",
    route: "/arte/mi-coleccion",
  },

  {
  icon: "🤍",
  title: "Favoritos",
  subtitle: "Obras guardadas para después",
  route: "/arte/favoritos",
},

   {
  icon: "📚",
  title: "Biblioteca Privada",
  subtitle:
    "Ensayos, manifiestos y cuadernos del Estudio",
  route: "/arte/biblioteca",
},

  {
    icon: "📦",
    title: "Mis Pedidos",
    subtitle: "Da seguimiento a tus adquisiciones",
    route: "/arte/historial",
  },
  {
    icon: "📜",
    title: "Mis Certificados",
    subtitle: "Consulta los certificados de autenticidad",
    route: "/arte/certificados",
  },
  {
    icon: "📍",
    title: "Direcciones",
    subtitle: "Gestiona tus direcciones de envío",
    route: "/arte/direccion",
  },
  {
    icon: "💳",
    title: "Métodos de Pago",
    subtitle: "Administra tus formas de pago",
    route: "/arte/pago",
  },
  {
    icon: "✨",
    title: "Próximas Colecciones",
    subtitle: "Conoce los próximos lanzamientos",
    route: "/arte/proximas-colecciones",
  },
];

  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
        style={{
          width: "min(1320px,92%)",
          margin: "0 auto",
          padding: "150px 0 100px",
          color: "#ECE3D9",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            color: "#D8AE88",
            fontSize: "12px",
            letterSpacing: ".35em",
            textTransform: "uppercase",
          }}
        >
          Área privada
        </div>

        <h1
          style={{
            marginTop: "14px",
            fontSize: "62px",
            fontWeight: 200,
            lineHeight: 1,
          }}
        >
          Bienvenida al Estudio
        </h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "760px",
            color: "rgba(255,255,255,.68)",
            fontSize: "20px",
            lineHeight: 1.8,
          }}
        >
          Este es tu espacio dentro del Estudio
          Daniela Pamely. Desde aquí podrás
          explorar el Museo, administrar tu
          colección y dar seguimiento a todas tus
          adquisiciones.
        </p>
          <section
  style={{
    marginTop: "50px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "18px",
  }}
>
  {[
  {
    value: selectedWorks.length.toString(),
    label: "Mi colección",
  },
  {
    value: favoriteWorks.length.toString(),
    label: "Favoritos",
  },
  {
    value: "0",
    label: "Certificados",
  },
  {
  value:
    userType === "founder"
      ? "Fundador"
      : "Coleccionista",
  label: "Nivel",
},
].map((item) => (
    <div
      key={item.label}
      style={{
        padding: "24px",
        borderRadius: "18px",
        background:
          "rgba(255,255,255,.03)",
        border:
          "1px solid rgba(216,174,136,.12)",
      }}
    >
      <div
        style={{
          fontSize: "34px",
          fontWeight: 200,
          color: "#D8AE88",
        }}
      >
        {item.value}
      </div>

      <div
        style={{
          marginTop: "8px",
          color: "rgba(255,255,255,.65)",
        }}
      >
        {item.label}
      </div>
    </div>
  ))}
</section>

         {userType === "founder" && (
  <section
    style={{
      marginTop: "40px",
      padding: "32px",
      borderRadius: "22px",
      background:
        "linear-gradient(180deg,#1A1410,#0A0C10)",
      border:
        "1px solid rgba(216,174,136,.22)",
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
      Coleccionista Fundador
    </div>

    <h2
      style={{
        marginTop: "16px",
        fontSize: "34px",
        fontWeight: 200,
      }}
    >
      Beneficios activos
    </h2>

    <div
      style={{
        marginTop: "24px",
        display: "grid",
        gap: "14px",
        color: "rgba(255,255,255,.72)",
      }}
    >
      <div>✓ Acceso anticipado a colecciones</div>
      <div>✓ Biblioteca privada</div>
      <div>✓ Bitácora del Estudio</div>
      <div>✓ Certificado Fundacional</div>
      <div>✓ Edición exclusiva anual</div>
    </div>
  </section>
)}

        <section
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "24px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => router.push(card.route)}
              style={{
                cursor: "pointer",
                padding: "30px",
                borderRadius: "22px",
                border:
                  "1px solid rgba(216,174,136,.16)",
                background:
                  "linear-gradient(180deg,#11141A,#0A0C10)",
                transition: ".3s",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                }}
              >
                {card.icon}
              </div>

              <div
                style={{
                  marginTop: "22px",
                  fontSize: "30px",
                  fontWeight: 200,
                }}
              >
                {card.title}
              </div>

              <div
                style={{
                  marginTop: "12px",
                  color:
                    "rgba(255,255,255,.62)",
                  lineHeight: 1.7,
                  fontSize: "16px",
                }}
              >
                {card.subtitle}
              </div>

              <div
                style={{
                  marginTop: "24px",
                  color: "#D8AE88",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  fontSize: "11px",
                }}
              >
                Entrar →
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            marginTop: "70px",
            padding: "34px",
            borderRadius: "22px",
            background:
              "linear-gradient(180deg,#11141A,#0A0C10)",
            border:
              "1px solid rgba(216,174,136,.16)",
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
            Próximamente
          </div>

          <h2
            style={{
              marginTop: "16px",
              fontSize: "34px",
              fontWeight: 200,
            }}
          >
            Próximas colecciones
          </h2>

          <p
            style={{
              marginTop: "14px",
              color:
                "rgba(255,255,255,.65)",
              lineHeight: 1.8,
              maxWidth: "760px",
            }}
          >
            Aquí recibirás acceso anticipado a
            nuevas colecciones, experiencias,
            talleres y anuncios exclusivos del
            Estudio.
          </p>

            <div
  style={{
    marginTop: "40px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  }}
>
  <button
    onClick={() => router.push("/arte/museo")}
    style={{
      height: "52px",
      padding: "0 28px",
      borderRadius: "999px",
      border: "none",
      cursor: "pointer",
      background:
        "linear-gradient(90deg,#D8AE88,#C98E62)",
      color: "#111",
      fontWeight: 600,
      fontSize: "14px",
    }}
  >
    Explorar Museo
  </button>

  <button
    onClick={() =>
      router.push("/arte/mi-coleccion")
    }
    style={{
      height: "52px",
      padding: "0 28px",
      borderRadius: "999px",
      border:
        "1px solid rgba(216,174,136,.35)",
      cursor: "pointer",
      background: "transparent",
      color: "#D8AE88",
      fontWeight: 500,
      fontSize: "14px",
    }}
  >
    Mi Colección
  </button>
</div>

        </section>
      </main>

      <section
  style={{
    marginTop: "70px",
  }}
>
  <div
    style={{
      color: "#D8AE88",
      fontSize: "12px",
      letterSpacing: ".28em",
      textTransform: "uppercase",
      marginBottom: "22px",
    }}
  >
    Actividad reciente
  </div>

  <div
    style={{
      display: "grid",
      gap: "16px",
    }}
  >
    <div
      style={{
        padding: "22px",
        borderRadius: "18px",
        border:
          "1px solid rgba(216,174,136,.12)",
        background:
          "rgba(255,255,255,.03)",
        color: "rgba(255,255,255,.72)",
      }}
    >
      {selectedWorks.length > 0
        ? `Última obra agregada a tu colección: ${
            selectedWorks[
              selectedWorks.length - 1
            ].title
          }`
        : "Aún no has agregado obras a tu colección."}
    </div>

    <div
      style={{
        padding: "22px",
        borderRadius: "18px",
        border:
          "1px solid rgba(216,174,136,.12)",
        background:
          "rgba(255,255,255,.03)",
        color: "rgba(255,255,255,.72)",
      }}
    >
      {favoriteWorks.length > 0
        ? `Último favorito guardado: ${
            favoriteWorks[
              favoriteWorks.length - 1
            ].title
          }`
        : "Aún no has guardado favoritos."}
    </div>

    <div
      style={{
        padding: "22px",
        borderRadius: "18px",
        border:
          "1px solid rgba(216,174,136,.12)",
        background:
          "rgba(255,255,255,.03)",
        color: "rgba(255,255,255,.72)",
      }}
    >
      Expediente de coleccionista activo.
    </div>
  </div>
</section>

      <FooterMuseo />
    </>
  );
}