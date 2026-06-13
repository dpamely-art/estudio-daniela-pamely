import { notFound } from "next/navigation";
import { artworks } from "../../data/artworks";
import ObraDetailClient from "../../components/ObraDetailClient";

type Props = {
  params: {
    slug: string;
  };
};

export default function ObraPage({
  params,
}: Props) {
  const artwork = artworks.find(
    (artwork) => artwork.id === params.slug
  );

  if (!artwork) {
    notFound();
  }

  return (
  <div
    style={{
      background: "black",
      color: "lime",
      fontSize: "40px",
      padding: "40px",
      minHeight: "100vh",
    }}
  >
    <div>slug: {params.slug}</div>

    <div>
      ids:
      {artworks.map((a) => (
        <div key={a.id}>{a.id}</div>
      ))}
    </div>
  </div>
);
}