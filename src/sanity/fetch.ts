import { client } from "./client";
import {
  eventiQuery,
  eventiByMacroCategoriaQuery,
  eventiInEvidenzaQuery,
  eventoBySlugQuery,
  eventiCorrelatiQuery,
  recensioniQuery,
  recensioniInEvidenzaQuery,
  serviziQuery,
  servizioBySlugQuery,
  paginaBySlugQuery,
  impostazioniQuery,
} from "./queries";

// Types
export type MacroCategoria = "wedding" | "corporate" | "celebrations";

export interface Evento {
  _id: string;
  macroCategoria: MacroCategoria;
  titolo: string;
  slug: { current: string };
  location: string;
  data?: string;
  categoria?: string;
  descrizioneBreve?: string;
  descrizioneCompleta?: any[];
  immagineCopertina?: string;
  immagineHero?: string;
  galleria?: {
    url: string;
    alt?: string;
    didascalia?: string;
  }[];
  videoUrl?: string;
  testimonialTesto?: string;
  testimonialAutore?: string;
  inEvidenza?: boolean;
}

export interface Recensione {
  _id: string;
  autore: string;
  evento?: string;
  data?: string;
  testo: string;
  valutazione?: number;
  immagine?: string;
  inEvidenza?: boolean;
}

export interface Servizio {
  _id: string;
  titolo: string;
  slug: { current: string };
  sottotitolo?: string;
  descrizione?: string;
  contenuto?: any[];
  caratteristiche?: string[];
  icona?: string;
  immagine?: string;
}

export interface Pagina {
  _id: string;
  titolo: string;
  slug: { current: string };
  sottotitolo?: string;
  descrizione?: string;
  immagineHero?: string;
  contenuto?: any[];
  sezioni?: {
    titolo: string;
    contenuto?: any[];
    immagine?: string;
  }[];
}

export interface PortfolioCategoria {
  titolo?: string;
  sottotitolo?: string;
  descrizione?: string;
  immagineCopertina?: string;
  immagineHero?: string;
}

export interface Impostazioni {
  nomeSito?: string;
  descrizione?: string;
  logo?: string;
  email?: string;
  telefono?: string;
  indirizzo?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    pinterest?: string;
  };
  statistiche?: {
    eventiRealizzati?: string;
    anniEsperienza?: string;
    locationPartner?: string;
    fornitoriSelezionati?: string;
  };
  fotoChiSono?: string;
  chiSono?: {
    titolo?: string;
    testoPrincipale?: string;
    testoSecondario?: string;
    foto?: string;
    testoLink?: string;
  };
  heroHomepage?: {
    titolo?: string;
    sottotitolo?: string;
    immagine?: string;
  };
  paginaChiSono?: {
    heroImmagine?: string;
    heroTitolo?: string;
    heroSottotitolo?: string;
    fotoRitratto?: string;
    biografiaTitolo?: string;
    biografiaTesto1?: string;
    biografiaTesto2?: string;
    biografiaTesto3?: string;
    citazione?: string;
    valori?: {
      titolo?: string;
      descrizione?: string;
      icona?: string;
    }[];
    timeline?: {
      anno?: string;
      titolo?: string;
      descrizione?: string;
    }[];
  };
  paginaServizi?: {
    heroImmagine?: string;
    heroTitolo?: string;
    heroSottotitolo?: string;
    introTesto?: string;
    citazione?: string;
  };
  paginaPortfolio?: {
    heroImmagine?: string;
    heroTitolo?: string;
    heroSottotitolo?: string;
    introTesto?: string;
  };
  portfolioCategorie?: {
    wedding?: PortfolioCategoria;
    corporate?: PortfolioCategoria;
    celebrations?: PortfolioCategoria;
  };
}

// Default fetch options for Next.js 14 caching
const fetchOptions = {
  next: { revalidate: 60 }, // Revalidate every 60 seconds
};

// Fetch functions
export async function getEventi(): Promise<Evento[]> {
  return client.fetch(eventiQuery, {}, fetchOptions);
}

export async function getEventiByMacroCategoria(macroCategoria: MacroCategoria): Promise<Evento[]> {
  return client.fetch(eventiByMacroCategoriaQuery, { macroCategoria }, fetchOptions);
}

export async function getEventiInEvidenza(): Promise<Evento[]> {
  return client.fetch(eventiInEvidenzaQuery, {}, fetchOptions);
}

export async function getEventoBySlug(slug: string): Promise<Evento | null> {
  return client.fetch(eventoBySlugQuery, { slug }, fetchOptions);
}

export async function getEventiCorrelati(macroCategoria: MacroCategoria, currentSlug: string): Promise<Evento[]> {
  return client.fetch(eventiCorrelatiQuery, { macroCategoria, currentSlug }, fetchOptions);
}

export async function getRecensioni(): Promise<Recensione[]> {
  return client.fetch(recensioniQuery, {}, fetchOptions);
}

export async function getRecensioniInEvidenza(): Promise<Recensione[]> {
  return client.fetch(recensioniInEvidenzaQuery, {}, fetchOptions);
}

export async function getServizi(): Promise<Servizio[]> {
  return client.fetch(serviziQuery, {}, fetchOptions);
}

export async function getServizioBySlug(slug: string): Promise<Servizio | null> {
  return client.fetch(servizioBySlugQuery, { slug }, fetchOptions);
}

export async function getPaginaBySlug(slug: string): Promise<Pagina | null> {
  return client.fetch(paginaBySlugQuery, { slug }, fetchOptions);
}

export async function getImpostazioni(): Promise<Impostazioni | null> {
  return client.fetch(impostazioniQuery, {}, fetchOptions);
}
