export type ObraModel = {
  id: string;

  titulo: string;

  slug: string;

  coleccion: string;

  categoria: string;

  tecnica: string;

  año: number;

  disponible: boolean;

  precio: number;

  portada: string;

  estado:
    | "borrador"
    | "publicada"
    | "archivada";
};