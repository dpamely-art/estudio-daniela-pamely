"use client";

import NavigationMuseo from "../components/NavigationMuseo";
import HeroIngresar from "../components/HeroIngresar";
import LoginCard from "../components/LoginCard";
import FooterMuseo from "../components/FooterMuseo";

export default function Page() {
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
    items-center

    overflow-hidden
  "
>

{/* Background */}

<div
  className="absolute inset-0 -z-10"
  style={{
    backgroundImage: "url('/fondoingresar.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>

{/* Overlay */}

<div
  className="absolute inset-0 -z-10"
  style={{
    background:
      "linear-gradient(rgba(5,9,16,.18), rgba(5,9,16,.18))",
  }}
/>

       <div
  className="
    relative

    w-full
    min-h-screen

    flex
    flex-col
    items-center
    justify-center
  "
>
  <HeroIngresar />

  <div
  className="
    absolute

    left-1/2
    -translate-x-1/2

    top-[52%]
    -translate-y-1/2

    w-full

    flex
    justify-center

    px-6
  "
>
  <LoginCard />
</div>
</div>
<FooterMuseo />
      </main>
    </>
  );
}