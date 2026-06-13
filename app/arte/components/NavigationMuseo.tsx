"use client";

import { useState } from "react";
import { useMuseum } from "../context/MuseumContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    title: "INTRODUCCIÓN",
    href: "/arte",
  },
  {
    title: "INGRESAR",
    href: "/arte/ingresar",
  },
  {
    title: "COLECCIONES",
    href: "/arte/museo",
  },
  {
    title: "MI SELECCIÓN",
    href: "/arte/mi-coleccion",
  },
  {
    title: "SUSCRIPCIÓN",
    href: "/arte/suscripcion",
  },
  {
    title: "SALIR",
    href: "/inicio",
  },
];

type NavigationMuseoProps = {
  onOpenConversation: () => void;
};

export default function NavigationMuseo({
  onOpenConversation,
}: NavigationMuseoProps) {
  
  const pathname = usePathname();
  const { selectedWorks } = useMuseum();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
  className="fixed top-0 left-0 w-full z-50"
  style={{
    pointerEvents: "none",
  }}
>
      <nav
  className="
    relative
    w-full
    h-[110px]
  "
  style={{
    pointerEvents: "auto",
  }}
>
        <div
  className="
    absolute
    left-0
    right-0
    top-[42px]

    flex
    items-center
    justify-center
  "
  style={{
    position: "relative",
  }}
>
  {/* Botón móvil */}

<button
  className="hidden max-md:flex"
  onClick={() => setIsOpen(!isOpen)}
  style={{
    position: "absolute",
    right: "24px",
    top: "0px",

    width: "44px",
    height: "44px",

    alignItems: "center",
    justifyContent: "center",

    background: "transparent",
    border: "none",

    color: "#D8AE88",

    fontSize: "30px",

    cursor: "pointer",

    zIndex: 100,
  }}
>
  {isOpen ? "✕" : "☰"}
</button>
          <div
            className="
              hidden
              md:flex
              items-center

              text-[13px]
              uppercase
              tracking-[0.28em]
              font-light
              text-[#E6DDD3]

              select-none
            "
          >
            {menu.map((item, index) => {
              const active = pathname === item.href;

              return (
                <Link
  key={item.href}
  href={item.href}
  onClick={(e) => {
    if (item.title === "INTRODUCCIÓN") {
      e.preventDefault();
      onOpenConversation();
    }
  }}
  className={`
                  group
                  relative
                  overflow-visible
                  transition-all
                  duration-500

  ${
    active
      ? "text-[#D7A47C]"
      : "hover:text-[#D7A47C]"
  }
`}
                  style={{
                    marginRight:
                      index === menu.length - 1 ? 0 : 58,
                  }}
                >
                  <span>
  {item.title}

  {item.title === "MI SELECCIÓN" &&
    selectedWorks.length > 0 &&
    ` (${selectedWorks.length})`}
</span>

                  <span
                    className={`
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-[28px]

                      h-[1px]

                      bg-[#D7A47C]

                      transition-all
                      duration-500

                      ${
                        active
                          ? "w-8 opacity-100"
                          : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
                      }
                    `}
                  />

                  <span
  className="
    absolute
    left-1/2
    -translate-x-1/2

    -top-40

    w-[340px]
    h-[300px]

    pointer-events-none

    opacity-0
    group-hover:opacity-100

    transition-all
    duration-700
  "
  style={{
  background:
    `radial-gradient(
      ellipse at top,
      rgba(255,233,200,.55) 0%,
      rgba(255,220,175,.28) 18%,
      rgba(255,200,150,.12) 40%,
      rgba(255,180,120,.05) 60%,
      transparent 82%
    )`,
  filter: "blur(34px)",
}}
/>
                </Link>
              );
              })}
          </div>
          {/* Panel móvil */}

{isOpen && (
  <div
    style={{
      position: "fixed",
      inset: 0,

      background: "rgba(3,6,12,.94)",
      backdropFilter: "blur(18px)",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      gap: "34px",

      zIndex: 999,

      animation: "fadeIn .35s ease",
    }}
  >
    {menu.map((item) => {
      const active = pathname === item.href;

      return (
        <Link
  key={item.href}
  href={item.href}
  onClick={(e) => {
    setIsOpen(false);

    if (item.title === "INTRODUCCIÓN") {
      e.preventDefault();
      onOpenConversation();
    }
  }}
  className="group relative"
          style={{
            color: active ? "#D7A47C" : "#E6DDD3",

            textDecoration: "none",

            textTransform: "uppercase",

            letterSpacing: ".28em",

            fontSize: "18px",

            fontWeight: 300,

            transition: ".35s",
          }}
        >
          <>
  <span
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",

      width: "260px",
      height: "180px",

      background:
        "radial-gradient(ellipse at center, rgba(255,223,190,.30) 0%, rgba(255,223,190,.12) 35%, transparent 75%)",

      filter: "blur(26px)",

      opacity: 0,

      transition: ".5s",

      pointerEvents: "none",
    }}
    className="group-hover:opacity-100 active:opacity-100"
  />

  <span
    style={{
      position: "relative",
      zIndex: 2,
    }}
  >
    {item.title}
  </span>
</>
        </Link>
      );
    })}
  </div>
)}
        </div>
      </nav>
    </header>
  );
}