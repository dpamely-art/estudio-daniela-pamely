"use client";

import Link from "next/link";

export default function Footer() {
  return (
  <>

    <div
      className="h-8"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0), #0A655B)"
      }}
    />

    <footer
      style={{
        background:"#0A655B"
      }}
      className="text-white"
    >

        <div className="max-w-7xl mx-auto px-8 md:px-16 py-10">

          <div className="text-center max-w-md mx-auto">

            <h3
              className="
                uppercase
                tracking-[0.28em]
                text-lg
                text-white
              "
            >
              Estudio Daniela Pamely
            </h3>
            <div className="w-20 h-px bg-[#F2EEE8] mx-auto mt-5 mb-5" />

            <div
className="
mt-4
    text-sm
    uppercase
    tracking-[0.18em]
    text-white/90
"
>

            <p>Arquitectura</p>



<p>Arte</p>



<p>Escritura</p>

        </div>

            <p
              className="
                mt-8
                text-sm
                text-white/70
                tracking-[0.08em]
              "
            >
              © 2026 Estudio Daniela Pamely
            </p>

           <p
 className="
mt-3
text-[11px]
uppercase
tracking-[0.45em]
text-white
"
>
  Todos los derechos reservados
</p>
          </div>

        </div>

            </footer>

  </>
  );
}