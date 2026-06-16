import { NuevaObraDraft } from "../data/models/NuevaObraDraft";

export function validateIdentity(
  draft: NuevaObraDraft
) {
  return (
    draft.title.trim().length > 0 &&
    draft.slug.trim().length > 0
  );
}