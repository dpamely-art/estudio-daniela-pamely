import type { ReactNode } from "react";
import { MuseumProvider } from "./context/MuseumContext";

type Props = {
  children: ReactNode;
};

export default function ArteLayout({ children }: Props) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      {/* Fondo del museo */}

      <div className="fixed inset-0 -z-20">
        <img
          src="/negaz1.jpeg"
          alt=""
          style={{
  filter:
    "brightness(1.06) contrast(1.02) saturate(1.08)",
}}
          className="
            w-full
            h-full
            object-cover
            object-center
            select-none
            pointer-events-none
          "
        />
      </div>

      {/* Capa para unificar el color */}

      <div
  className="fixed inset-0 -z-10"
  style={{
    background:
      "linear-gradient(rgba(6,15,28,.10), rgba(6,15,28,.18))",
  }}
/>

      {/* Contenido */}

      <div className="relative z-10">
  <MuseumProvider>
    {children}
  </MuseumProvider>
</div>

    </main>
  );
}