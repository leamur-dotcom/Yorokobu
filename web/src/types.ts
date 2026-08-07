export type GlazeColor = 'cobalt' | 'ochre' | 'terracotta' | 'oxide' | 'paper';

export interface GlazePaletteOption {
  id: GlazeColor;
  name: string;
  hex: string;
  description: string;
}

export type CategoryId = 'all' | 'azulejos' | 'utilitaria' | 'mascotas' | 'marcas';

export interface CollectionItem {
  id: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  description: string;
  longDescription: string;
  tag: string;
  priceFrom: string;
  dimensions: string;
  firingTemp: string;
  image: string;
  badge?: string;
  features: string[];
}

export interface Workshop {
  id: string;
  title: string;
  duration: string;
  price: number;
  description: string;
  details: string[];
  includes: string[];
  upcomingDates: { date: string; seatsLeft: number }[];
}

export interface Article {
  id: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  quote?: string;
}

export interface CommissionOrder {
  name: string;
  email: string;
  projectType: string;
  quantity: number;
  dimensions: string;
  details: string;
  estimatedPrice: number;
  estimatedWeeks: number;
}
