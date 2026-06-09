
export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F4F1] px-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-light text-[#C46A4A] mb-8">
          ¡Gracias!
        </h1>

        <p className="text-xl text-[#212121]">
          Hemos recibido tu registro.
        </p>

        <p className="mt-4 text-neutral-600">
          Muy pronto recibirás noticias del estudio.
        </p>

        <a
          href="/inicio"
          className="inline-block mt-10 border border-[#C46A4A] px-8 py-3 text-[#C46A4A]"
        >
          Volver al estudio
        </a>
      </div>
    
    </main>
  );
}