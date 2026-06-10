"use client";

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

export default function NavigationMuseo() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="
          relative
          w-full
          h-[110px]
        "
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
        >
          <div
            className="
              flex
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
                  <span>{item.title}</span>

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
        </div>
      </nav>
    </header>
  );
}