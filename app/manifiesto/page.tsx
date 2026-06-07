
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import FadeUp from "../components/Motion/FadeUp";

export default function Manifiesto() {
  const router = useRouter();

  return (
    <main
      className="relative min-h-screen px-8 md:px-20 lg:px-32 py-20"
      style={{ backgroundColor: "rgba(255,255,255,0.80)" }}
    >
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

      <button
        onClick={() => router.push("/inicio")}
        className="fixed top-6 left-6 z-50 text-xs md:text-sm uppercase tracking-[0.22em] text-[#212121] hover:opacity-70 transition"
      >
        ← Inicio
      </button>

      <section className="max-w-5xl mx-auto">
        <FadeUp>
        <h1 className="fade-up text-5xl md:text-7xl italic font-light text-[#B58A3D]">
          Manifiesto
        </h1>
        </FadeUp>
        <div className="w-32 h-[2px] bg-[#C46A4A] mt-6 mb-12" />

        <div className="max-w-3xl text-[#756a63] text-lg md:text-[1.22rem] leading-[1.95] font-light space-y-10">
          <p>
            Creemos que la forma en que habitamos el mundo termina por habitar
            también nuestra vida.
          </p>

          <p>
            Los espacios que atravesamos, las imágenes que contemplamos, las
            palabras que elegimos y las memorias que conservamos construyen
            silenciosamente la persona que llegamos a ser.
          </p>

          <p>
            Por eso no aceptamos que la belleza sea un privilegio, que la
            dignidad dependa del poder adquisitivo o que el trabajo deba costar
            la paz de quien lo realiza.
          </p>

          <p>
            Nos negamos a creer que una existencia acelerada, agotada y
            desconectada sea la única forma posible de vivir.
          </p>
        </div>

        <div className="my-20 grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="text-[#756a63] text-lg md:text-[1.18rem] leading-[1.9] font-light space-y-8">
            
            <p>
              Entendemos la arquitectura, el arte y la escritura como distintos
              lenguajes para una misma búsqueda.
            </p>

            <p className="italic text-2xl md:text-4xl text-[#6b5b4d]">
              La posibilidad de reconciliar a las personas con su manera de
              habitar.
            </p>
            
          
          </div>
        
          <div className="border-l border-[#d8cfc7] pl-8 text-[#6b5b4d] italic text-xl md:text-2xl space-y-5">
            <p>No construimos únicamente espacios.</p>
            <p>No producimos únicamente obras.</p>
            <p>No escribimos únicamente historias.</p>
            <p className="not-italic text-3xl md:text-5xl mt-8">
              Diseñamos posibilidades.
            </p>
          </div>
        
        </div>

        <div className="my-20 grid md:grid-cols-3 gap-8 text-[#756a63]">
          {[
            ["Cada proyecto", "es una invitación", "a detenerse."],
            ["Cada obra", "es una invitación", "a recordar."],
            ["Cada palabra", "es una invitación", "a mirar de nuevo."],
          ].map((b, i) => (
            <div key={i} className="border-t border-[#d8cfc7] pt-6">
              <p>{b[0]}</p>
              <p>{b[1]}</p>
              <p className="italic">{b[2]}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl ml-auto text-[#756a63] text-lg md:text-[1.2rem] leading-[1.95] font-light space-y-8 my-20">
          <p>
            Porque creemos que habitar no consiste en ocupar un lugar.
          </p>

          <p>
            Habitar es reconocer que nuestro tiempo, nuestro cuerpo, nuestra
            memoria y nuestros afectos también son territorios que merecen ser
            cuidados.
          </p>
        </div>

        <div className="my-24 text-center">
          <p className="text-[#756a63] text-xl mb-5">
            Nuestro trabajo no busca impresionar.
          </p>

          <h2 className="italic font-light text-4xl md:text-6xl text-[#6b5b4d]">
            Busca reconciliar.
          </h2>
        </div>

        <div className="flex justify-center my-16">
          <Image
            src="/Photo Perfil.jpeg"
            alt="Daniela Pamely"
            width={430}
            height={560}
            className="w-[250px] md:w-[340px] h-auto object-cover"
          />
        </div>

        <div className="text-center text-[#5f554e]">
          <h3 className="uppercase tracking-[0.28em] text-2xl">
            Daniela Pamely
          </h3>

          <p className="italic mt-5 text-xl">Fundadora</p>

          <div className="flex justify-center mt-8">
            <Image
              src="/Firm_est-01.png"
              alt="Firma"
              width={300}
              height={180}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center mt-20 text-[#756a63] leading-[2]">
          <p>Y si después de encontrarte con este Estudio,</p>
          <p>descubres que aún puedes elegir una vida más libre,</p>
          <p>más digna y más profundamente tuya,</p>

          <p className="italic text-3xl md:text-4xl mt-8 text-[#6b5b4d]">
            entonces nuestra labor habrá comenzado.
          </p>

          <p className="mt-10 text-sm uppercase tracking-[0.25em]">
            Gracias por habitar este manifiesto.
          </p>
        </div>
      </section>
    </main>
  );
}
