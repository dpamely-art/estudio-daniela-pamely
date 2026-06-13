import ObraInfoPanel from "./ObraInfoPanel";
import CuratorialText from "./CuratorialText";
import MuseumDivider from "./MuseumDivider";
import ObraTechnicalSheet from "./ObraTechnicalSheet";
import ObraInvestment from "./ObraInvestment";
import ObraActions from "./ObraActions";

type Props = {
  artwork: (typeof import("../data/artworks").artworks)[number];
};

export default function ObraRightPanel({
  artwork,
}: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "520px",
        margin: "0 auto",

        height: "calc(100vh - 260px)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <ObraInfoPanel
  coleccion={artwork.category}
  titulo={artwork.title}
  edicion={`${artwork.edition} · EDICIÓN LIMITADA`}
/>
        

        <CuratorialText
          text={`La serie Magia explora la relación entre los símbolos cotidianos y los rituales íntimos. Cada pieza propone una lectura donde el objeto doméstico adquiere un carácter ceremonial, invitando a contemplar la memoria, el habitar y la sensibilidad desde una perspectiva profundamente humana.`}
        />

        <MuseumDivider />

        <ObraTechnicalSheet
          items={[
            {
              label: "Técnica",
              value: "Linograbado",
            },
            {
              label: "Soporte",
              value: "Papel algodón 300 g",
            },
            {
              label: "Medidas",
              value: "21 × 29.7 cm",
            },
            {
              label: "Edición",
              value: "Limitada a 50 piezas",
            },
            {
              label: "Año",
              value: "2026",
            },
            {
              label: "Certificado",
              value: "Incluido",
            },
            {
              label: "Firma",
              value: "A mano por la artista",
            },
          ]}
        />
      </div>

      <div>
        <MuseumDivider />

        <ObraInvestment
          price="$2,850 MXN"
          subtitle="Edición limitada · Certificado incluido"
        />

        <ObraActions />
      </div>
    </div>
  );
}