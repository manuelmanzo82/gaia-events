import { client } from "./client";
import {
  eventiQuery,
  eventiInEvidenzaQuery,
  eventoBySlugQuery,
  recensioniQuery,
  recensioniInEvidenzaQuery,
  serviziQuery,
  servizioBySlugQuery,
  paginaBySlugQuery,
  impostazioniQuery,
} from "./queries";

// Types
export interface Evento {
  _id: string;
  titolo: string;
  slug: { current: string };
  location: string;
  data?: string;
  categoria: string;
  descrizione?: string;
  immagineCopertina?: string;
  contenuto?: any[];
  galleria?: {
    url: string;
    alt?: string;
    didascalia?: string;
  }[];
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
    matrimoni?: string;
    anni?: string;
    soddisfazione?: string;
    location?: string;
  };
  heroHomepage?: {
    titolo?: string;
    sottotitolo?: string;
    immagine?: string;
  };
}

// Fetch functions
export async function getEventi(): Promise<Evento[]> {
  return client.fetch(eventiQuery);
}

export async function getEventiInEvidenza(): Promise<Evento[]> {
  return client.fetch(eventiInEvidenzaQuery);
}

export async function getEventoBySlug(slug: string): Promise<Evento | null> {
  return client.fetch(eventoBySlugQuery, { slug });
}

export async function getRecensioni(): Promise<Recensione[]> {
  return client.fetch(recensioniQuery);
}

export async function getRecensioniInEvidenza(): Promise<Recensione[]> {
  return client.fetch(recensioniInEvidenzaQuery);
}

export async function getServizi(): Promise<Servizio[]> {
  return client.fetch(serviziQuery);
}

export async function getServizioBySlug(slug: string): Promise<Servizio | null> {
  return client.fetch(servizioBySlugQuery, { slug });
}

export async function getPaginaBySlug(slug: string): Promise<Pagina | null> {
  return client.fetch(paginaBySlugQuery, { slug });
}

export async function getImpostazioni(): Promise<Impostazioni | null> {
  return client.fetch(impostazioniQuery);
}
