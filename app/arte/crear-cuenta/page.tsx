"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import HeroCrearCuenta from "../components/HeroCrearCuenta";
import BenefitsPanel from "../components/BenefitsPanel";
import RegisterCard from "../components/RegisterCard";
import FooterMuseo from "../components/FooterMuseo";

export default function CrearCuentaPage() {
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

{/* Background */}

<div
  className="
    absolute
    inset-0
    -z-10
  "
  style={{
    backgroundImage: "url('/fondoingresar.png')",

    backgroundSize: "cover",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",
  }}
/>
<div
  className="
    absolute
    inset-0
    -z-10
  "
  style={{
    background:
      "rgba(5,8,14,.28)",
  }}
/>

        <HeroCrearCuenta />

        <section
          className="
            w-full

            flex
            justify-center
            items-start

            px-8
            mt-28
          "
        >
          <div
            className="
              w-full
              max-w-[1500px]

              grid

              lg:grid-cols-2

              gap-28

              items-center
            "
          >
            <BenefitsPanel />

            <RegisterCard />
          </div>
        </section>

        <FooterMuseo />
      </main>
    </>
  );
}   