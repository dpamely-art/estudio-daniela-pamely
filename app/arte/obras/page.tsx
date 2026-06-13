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
        </section>

        <FooterMuseo />
      </main>
    </>
  );
}