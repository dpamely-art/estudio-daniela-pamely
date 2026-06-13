import ObraInfoPanel from "./ObraInfoPanel";
import CuratorialText from "./CuratorialText";
import MuseumDivider from "./MuseumDivider";
import ObraTechnicalSheet from "./ObraTechnicalSheet";
import ObraInvestment from "./ObraInvestment";
import ObraActions from "./ObraActions";

type Props = {
  artwork: (typeof import("../data/artworks").artworks)[number];
  onAdd: () => void;
};

export default function ObraRightPanel({
  artwork,
  onAdd,
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
  text={artwork.description}
/>

        <MuseumDivider />

        <ObraTechnicalSheet
          items={[
  {
    label: "Técnica",
    value: artwork.technique,
  },
  {
    label: "Soporte",
    value: artwork.support,
  },
  {
    label: "Medidas",
    value: artwork.measures,
  },
  {
    label: "Edición",
    value: artwork.editionDescription,
  },
  {
  label: "Año",
  value: `${artwork.year}`,
},
  {
    label: "Certificado",
    value: artwork.certificate
      ? "Incluido"
      : "No incluido",
  },
  {
    label: "Firma",
    value: artwork.signed
      ? "A mano por la artista"
      : "Sin firma",
  },
]}
        />
      </div>

      <div>
        <MuseumDivider />

        <ObraInvestment
  price={`$${artwork.price.toLocaleString()} ${artwork.currency}`}
  subtitle="Edición limitada · Certificado incluido"
/>

        <ObraActions
  onAdd={onAdd}
/>
      </div>
    </div>
  );
}