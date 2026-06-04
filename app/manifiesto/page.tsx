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

      <div className="relative z-10 max-w-[640px]">
        {/* Título */}
        <h1
  style={{ color: "#B58A3D"}}
  className="
    text-4xl
    md:text-6xl
    italic
    font-light
    mb-10
  "
>
  Manifiesto
</h1>

        <div
          className="mt-3 mb-20"
          style={{
            width: "130px",
            height: "2px",
            backgroundColor: "#C46A4A",
          }}
        />

        {/* Texto */}
        <div
  className="
    text-[#756a63]
    text-lg
    md:text-[1.9rem]
    leading-relaxed
    font-light
    space-y-40
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
            mt-16
            text-center
            italic
            font-light
            text-4xl
            text-[#5f554e]
          "
        >
          La libertad.
        </h2>

        {/* Foto */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/Photo Perfil.jpeg"
            alt="Daniela Pamely"
            width={300}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Nombre */}
        <div className="text-center mt-16">
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
        <div className="flex justify-center mt-8">
          <Image
            src="/Firm_est-01.png"
            alt="Firma"
            width={260}
            height={160}
          />
        </div>
      </div>
    </main>
  );
}