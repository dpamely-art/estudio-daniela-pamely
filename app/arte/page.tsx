import NavigationMuseo from "./components/NavigationMuseo";
import HeroMuseo from "./components/HeroMuseo";
import CarruselMuseo from "./components/CarruselMuseo";
import FooterMuseo from "./components/FooterMuseo";

export default function ArtePage() {
  return (
    <>
      <NavigationMuseo />

      <main
        className="
          relative
          w-full

          flex
          flex-col
          items-center
        "
      >
        {/* HERO */}

        <section
          className="
            w-full

            min-h-screen

            flex
            items-center
            justify-center
          "
        >
          <HeroMuseo />
        </section>

        {/* CARRUSEL */}

        <section
          className="
            w-full

            -mt-24

            flex
            justify-center
          "
        >
          <CarruselMuseo />
        </section>

        {/* FOOTER */}

        <FooterMuseo />
      </main>
    </>
  );
}