"use client";

import NavigationMuseo from "./NavigationMuseo";
import FooterMuseo from "./FooterMuseo";
import BreadcrumbMuseo from "./BreadcrumbMuseo";
import ObraLayout from "./ObraLayout";
import ObraGallery from "./ObraGallery";
import ObraRightPanel from "./ObraRightPanel";
import { useMuseum } from "../context/MuseumContext";
import { useState } from "react";
import ToastMuseo from "./ToastMuseo";

type Props = {
  artwork: any;
};

export default function ObraDetailClient({
  artwork,
}: Props) {
    const { addWork } = useMuseum();
    const [showToast, setShowToast] = useState(false);
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
  addWork({
    id: artwork.id,
    title: artwork.title,
    collection: artwork.collection,
    price: `${artwork.price} ${artwork.currency}`,
    image: artwork.images[0],
  });

  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);
}}
  />
}
          />
        </section>
        <ToastMuseo
  visible={showToast}
  title={artwork.title}
  subtitle="La obra fue incorporada correctamente a tu selección."
/>
        <FooterMuseo />
      </main>
    </>
  );
}