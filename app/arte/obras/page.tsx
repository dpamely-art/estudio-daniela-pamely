"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import FooterMuseo from "../components/FooterMuseo";
import BreadcrumbMuseo from "../components/BreadcrumbMuseo";
import ObraLayout from "../components/ObraLayout";
import ObraGallery from "../components/ObraGallery";
import ObraRightPanel from "../components/ObraRightPanel";

export default function ObraPage() {
  return (
    <>
      <NavigationMuseo
        onOpenConversation={() => {}}
      />

      <main
  className="
    relative
    w-full
    min-h-screen
    flex
    flex-col
  "
>
        <BreadcrumbMuseo
          href="/arte/colecciones"
          label="Volver a colecciones"
        />

        <ObraLayout
          left={
            <ObraGallery
              images={[
  "/obras/magia/01.fixed.png",
  "/obras/magia/02.fixed.png",
  "/obras/magia/03.fixed.png",
  "/obras/magia/04.fixed.png",
  "/obras/magia/05.fixed.png",
]}
            />
          }
          right={<ObraRightPanel />}
        />

        <FooterMuseo />
      </main>
    </>
  );
}