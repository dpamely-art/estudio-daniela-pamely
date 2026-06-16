import { notFound } from "next/navigation";
import { artworks } from "../../data/artworks";
import ObraDetailClient from "../../components/ObraDetailClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ObraPage({
  params,
}: Props) {
  const { slug } = await params;

console.log("SLUG:", slug);
console.log(
  "IDS:",
  artworks.map((a) => a.id)
);

  const artwork = artworks.find(
    (artwork) => artwork.id === slug
  );

  if (!artwork) {
    notFound();
  }


  return <ObraDetailClient artwork={artwork} />;
  <div
    style={{
      background: "black",
      color: "lime",
      fontSize: "40px",
      padding: "40px",
      minHeight: "100vh",
    }}
  >
    <div>slug: {slug}</div>
    <div>
      ids:
      {artworks.map((a) => (
        <div key={a.id}>{a.id}</div>
      ))}
    </div>
  </div>

}