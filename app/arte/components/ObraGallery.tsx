"use client";

import { useState } from "react";

type ObraGalleryProps = {
  images: string[];
};

export default function ObraGallery({
  images,
}: ObraGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState(0);

  return (
    <div
      className="
        w-full
        flex
        gap-6
        items-start
      "
    >
      {/* Miniaturas */}

      <div
        className="
          flex
          flex-col
          gap-4
          shrink-0
        "
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            style={{
              width: "82px",
              height: "82px",

              borderRadius: "18px",

              overflow: "hidden",

              border:
                selectedImage === index
                  ? "1px solid #D8AE88"
                  : "1px solid rgba(255,255,255,.05)",

              background: "rgba(255,255,255,.015)",

              cursor: "pointer",

              padding: 0,

              transform:
                selectedImage === index
                  ? "scale(1.05)"
                  : "scale(1)",

              boxShadow:
                selectedImage === index
                  ? "0 10px 25px rgba(216,174,136,.22)"
                  : "none",

              transition: "all .35s ease",
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",

                objectFit: "cover",

                display: "block",

                transition: ".45s",
              }}
            />
          </button>
        ))}
      </div>

      {/* Imagen principal */}

      <div
        style={{
          flex: 1,

          width: "100%",

          height: "calc(100vh - 190px)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          background: "transparent",

          border:
            "1px solid rgba(255,255,255,.05)",

          borderRadius: "22px",

          boxShadow:
            "0 20px 60px rgba(0,0,0,.18)",
        }}
      >
        <img
          key={selectedImage}
          src={images[selectedImage]}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "100%",

            width: "auto",
            height: "auto",

            objectFit: "contain",

            display: "block",

            background: "transparent",

            transition: ".45s ease",
          }}
        />
      </div>
    </div>
  );
}