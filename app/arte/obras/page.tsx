"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import BreadcrumbMuseo from "../components/BreadcrumbMuseo";
import ObraLayout from "../components/ObraLayout";
import ObraGallery from "../components/ObraGallery";
import ObraRightPanel from "../components/ObraRightPanel";
import { artworks } from "../data/artworks";
import { useMuseum } from "../context/MuseumContext";

export default function ObraPage() {

  const { addWork } = useMuseum();

  const artwork = artworks[0];

  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
  className="
    relative
    w-full
    flex
    flex-col
  "
  style={{
    paddingTop: "40px",
  }}
>
        <div
          style={{
            position: "sticky",
            top: "40px",
            zIndex: 20,
          }}
        >
          <BreadcrumbMuseo
            href="/arte/colecciones"
            label="Volver a colecciones"
          />
        </div>

        <section
          style={{
            flex: 1,
            minHeight: "calc(100vh - 170px)",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <ObraLayout
            left={
              <ObraGallery
  images={artwork.images}
/>
            }
            right={
  <ObraRightPanel
    artwork={artwork}
   onAdd={() => {
  console.log("ENTRÓ AL onAdd");

  addWork({
    id: artwork.id,
    title: artwork.title,
    collection: artwork.collection,
    price: `${artwork.price} ${artwork.currency}`,
    image: artwork.images[0],
  });
}}
  />
}
          />
        </section>

        <FooterMuseo />
      </main>
    </>
  );
}