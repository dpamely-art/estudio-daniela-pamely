"use client";

import React from "react";

type ObraLayoutProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function ObraLayout({
  left,
  right,
}: ObraLayoutProps) {
  return (
    <section
      className="
        w-full
        px-8
        lg:px-10
        xl:px-14
        pt-4
        pb-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]

          grid
          grid-cols-1
          xl:grid-cols-[60%_40%]

          gap-8
          xl:gap-10

          items-start
        "
      >
        {/* Columna izquierda */}
        <div
          className="
            w-full
            xl:sticky
            xl:top-[170px]

            flex
            items-center
            justify-center
          "
        >
          {left}
        </div>

        {/* Columna derecha */}
        <div
          className="
            w-full
            max-w-[500px]

            flex
            flex-col
            justify-start
          "
        >
          {right}
        </div>
      </div>
    </section>
  );
}