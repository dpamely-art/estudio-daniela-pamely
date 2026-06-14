import { ObraStatus } from "./obraStatus";

export interface Obra {

    // =====================
// IDENTIDAD
// =====================

  id: string;

  title: string;

  subtitle: string;

  collection: string;

  category: string;

  series: string;

  status: ObraStatus;

// =====================
// CURADURÍA
// =====================

curatorialText: string;

concept: string;

keywords: string[];

inspiration: string;

// =====================
// PRODUCCIÓN
// =====================

technique: string;

support: string;

dimensions: string;

year: number;

// =====================
// COMERCIAL
// =====================

price: number;

currency: string;

available: boolean;

featured: boolean;

// =====================
// CERTIFICACIÓN
// =====================

certificate: boolean;

signed: boolean;

edition: string;

editionNumber: number;

// =====================
// MULTIMEDIA
// =====================

images: string[];

thumbnail: string;

video?: string;

// =====================
// INVENTARIO
// =====================

location: string;

inventoryCode: string;

reserved: boolean;

acquired: boolean;

// =====================
// HISTORIAL
// =====================

createdAt: Date;

updatedAt: Date;

publishedAt?: Date;

archivedAt?: Date;
}