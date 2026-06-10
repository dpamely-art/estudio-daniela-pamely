import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ArteLayout({ children }: Props) {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05080E]">

      {/* Fondo del museo */}

      <div className="fixed inset-0 -z-20">
        <img
          src="/negaz1.jpeg"
          alt=""
          className="
            w-full
            h-full
            object-cover
            object-top
            select-none
            pointer-events-none
          "
        />
      </div>

      {/* Capa para unificar el color */}

      <div
        className="
          fixed
          inset-0
          -z-10

          bg-[#03060C]/15
        "
      />

      {/* Contenido */}

      <div className="relative z-10">
        {children}
      </div>

    </main>
  );
}