export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F4F1] px-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-light text-[#C46A4A] mb-8">
          Gracias
        </h1>

        <p className="text-xl md:text-2xl text-[#212121] font-light leading-relaxed">
          Hemos recibido tu registro.
        </p>

        <p className="mt-6 text-neutral-600">
          Muy pronto recibirás noticias sobre nuevas obras,
          proyectos y exposiciones.
        </p>

        <a
          href="/inicio"
          className="
            inline-block
            mt-12
            border
            border-[#C46A4A]
            px-10
            py-4
            text-[#C46A4A]
            hover:bg-[#C46A4A]
            hover:text-white
            transition-all
          "
        >
          Volver al estudio
        </a>
      </div>
    </main>
  );
}