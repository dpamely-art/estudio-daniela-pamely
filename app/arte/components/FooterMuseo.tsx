export default function FooterMuseo() {
  return (
    <footer
      className="
        w-full

        flex
        justify-center

        pt-32
        pb-16

        px-10
      "
    >
      <div
        className="
          w-full
          max-w-[1600px]
          px-6
md:px-10
xl:px-16
        "
      >
        {/* Línea */}

        <div
          className="
            w-full
            h-px

            bg-white/10
          "
        />

        {/* Contenido */}

        <div
          className="
            mt-10

            flex
            flex-col
            md:flex-row

            justify-between
            items-end

            gap-6
            md:gap-10
            xl:gap-20
          "
        >
          {/* Marca */}

          <div>
            <p
              className="
                uppercase

                tracking-[0.35em]

                text-[11px]

                text-[#D8AE88]
              "
            >
              ESTUDIO DANIELA PAMELY
            </p>

            <p
              className="
                mt-5

                text-white/45

                leading-8

                text-[12px]
                md:text-[14px]
                xl:text-[15px]

                max-w-md
              "
            >
              Arquitectura, arte y escritura como una
              misma forma de habitar el mundo.
            </p>
          </div>

          {/* Derechos */}

          <div
            className="
              text-right

              uppercase

              tracking-[0.22em]

              text-[10px]

              text-white/35
            "
          >
            © 2026

            <br />

            Todos los derechos reservados.

            <br />

            México · España · USA
          </div>
        </div>
      </div>
    </footer>
  );
}