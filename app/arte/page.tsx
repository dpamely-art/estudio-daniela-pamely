"use client";

import { useState } from "react";

import NavigationMuseo from "./components/NavigationMuseo";
import HeroMuseo from "./components/HeroMuseo";
import CarruselMuseo from "./components/CarruselMuseo";
import FooterMuseo from "./components/FooterMuseo";
import ConversationModal from "./components/ConversationModal";

export default function ArtePage() {
  const [openConversation, setOpenConversation] =
    useState(false);

  return (
    <>
      <NavigationMuseo
        onOpenConversation={() =>
          setOpenConversation(true)
        }
      />

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
          <HeroMuseo
            openConversation={openConversation}
          />
        </section>

        <ConversationModal
          open={openConversation}
          onClose={() =>
            setOpenConversation(false)
          }
        />

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