import Image from "next/image";

export default function Manifiesto() {
  return (
    <main
  className="
    relative
    min-h-screen
    px-12
    md:px-40
    py-24
    flex
    justify-center
    
  "
  style={{
    backgroundColor: "rgba(255,255,255,0.78)",
  }}
>
      {/* Fondo */}
      <div
  className="fixed inset-0 pointer-events-none"
  style={{
    zIndex: -1,
    backgroundImage: "url('/background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>
<div className="relative z-10 max-w-4xl mx-auto">
  {/* Título */}

        <h1
  style={{ color: "#B58A3D"}}
  className="
    fade-up
    text-4xl
    md:text-6xl
    italic
    font-light
    mb-16
  "
>
  Manifiesto
</h1>

        <div
    className="fade-up delay-1 mt-6 mb-8"
          style={{
            width: "130px",
            height: "2px",
            backgroundColor: "#C46A4A",
          }}
        />

        {/* Texto */}
        <div
  className="
    fade-up
    delay-2
    text-[#756a63]
    text-lg
    md:text-[1.25rem]
    leading-loose
    font-light
    space-y-8
  "
>
          <p>
            Creemos que el arte es la máxima expresión de la vida.
            Es la herramienta con la que nombramos aquello que no
            siempre puede decirse con palabras; el lenguaje que
            transforma emociones, recuerdos y experiencias en algo compartido.
          </p>

          <p>
            Creemos que el cuerpo es un territorio.
            Un archivo vivo donde habitan la memoria, el deseo,
            la vulnerabilidad y la resistencia.
            Un espacio que busca ser libre frente a las estructuras sociales
            que intentan definirlo.
          </p>

          <p>
            Creemos que la memoria es el mapa de nuestra existencia.
            El rastro que dejamos y el que heredamos.
            La suma de los encuentros, las pérdidas, los afectos
            y las historias que construyen nuestra identidad.
          </p>

          <p>
            Creemos que la arquitectura es mucho más que construir espacios.
            Es la posibilidad de habitar el mundo con sentido.
            Es el acto de transformar el vacío en refugio,
            la materia en experiencia y el espacio en pertenencia.
          </p>

          <p>
            Nuestro trabajo existe en la intersección entre arte,
            cuerpo, memoria y arquitectura.
          </p>

          <p>
            Creamos objetos, imágenes, espacios y narrativas que invitan
            a habitar con conciencia, recordar con honestidad
            y vivir con sensibilidad.
          </p>

          <p>
            Porque creemos que habitar no es ocupar un lugar.
            Habitar es reconocernos dentro de él.
          </p>

          <p>
            Y creemos que cuando el arte, el cuerpo, la memoria y la
            arquitectura conversan entre sí, ocurre el deseo más inherente
            del ser humano:
          </p>
        </div>

        {/* Libertad */}
        <h2
          className="
            fade-up
            delay-3
            mt-16
            md:mt-10
            text-center
            italic
            font-light
            text-4xl
            md:text 5xl
            text-[#5f554e]
          "
        >
          La libertad.
        </h2>

        {/* Foto */}
        <div className="fade-up delay-3 mt-16 flex justify-center">
          <Image
  src="/Photo Perfil.jpeg"
  alt="Daniela Pamely"
  width={420}
  height={560}
  className="
    object-cover
    w-[220px]
    sm:w-[260px]
    md:w-[320px]
    lg:w-[380px]
    h-auto
  "
/>
        </div>

        {/* Nombre */}
        <div className="fade-up delay-4 text-center mt-16">
          <h3
            className="
              text-2xl
              tracking-[0.25em]
              uppercase
              text-[#5f554e]
            "
          >
            Daniela Pamely
          </h3>

          <p
            className="
              mt-8
              italic
              text-xl
              text-[#5f554e]
            "
          >
            Fundadora
          </p>
        </div>

        {/* Firma */}
        <div className="fade-up delay-4 flex justify-center mt-8">
          <Image
            src="/Firm_est-01.png"
            alt="Firma"
            width={320}
            height={200}
          />
        </div>
        </div>
    </main>
  );
}