import { groq } from "next-sanity";

// Eventi (Portfolio)
export const eventiQuery = groq`
  *[_type == "evento"] | order(ordine asc, data desc) {
    _id,
    titolo,
    slug,
    location,
    data,
    categoria,
    descrizione,
    "immagineCopertina": immagineCopertina.asset->url,
    inEvidenza
  }
`;

export const eventiInEvidenzaQuery = groq`
  *[_type == "evento" && inEvidenza == true] | order(ordine asc) [0...3] {
    _id,
    titolo,
    slug,
    location,
    categoria,
    descrizione,
    "immagineCopertina": immagineCopertina.asset->url
  }
`;

export const eventoBySlugQuery = groq`
  *[_type == "evento" && slug.current == $slug][0] {
    _id,
    titolo,
    slug,
    location,
    data,
    categoria,
    descrizione,
    contenuto,
    "immagineCopertina": immagineCopertina.asset->url,
    galleria[] {
      "url": asset->url,
      alt,
      didascalia
    }
  }
`;

// Recensioni
export const recensioniQuery = groq`
  *[_type == "recensione" && attivo == true] | order(data desc) {
    _id,
    autore,
    evento,
    data,
    testo,
    valutazione,
    "immagine": immagine.asset->url,
    inEvidenza
  }
`;

export const recensioniInEvidenzaQuery = groq`
  *[_type == "recensione" && attivo == true && inEvidenza == true] | order(data desc) [0...3] {
    _id,
    autore,
    evento,
    testo,
    "immagine": immagine.asset->url
  }
`;

// Servizi
export const serviziQuery = groq`
  *[_type == "servizio" && attivo == true] | order(ordine asc) {
    _id,
    titolo,
    slug,
    sottotitolo,
    descrizione,
    caratteristiche,
    icona,
    "immagine": immagine.asset->url
  }
`;

export const servizioBySlugQuery = groq`
  *[_type == "servizio" && slug.current == $slug][0] {
    _id,
    titolo,
    slug,
    sottotitolo,
    descrizione,
    contenuto,
    caratteristiche,
    "immagine": immagine.asset->url
  }
`;

// Pagine
export const paginaBySlugQuery = groq`
  *[_type == "pagina" && slug.current == $slug][0] {
    _id,
    titolo,
    slug,
    sottotitolo,
    descrizione,
    "immagineHero": immagineHero.asset->url,
    contenuto,
    sezioni[] {
      titolo,
      contenuto,
      "immagine": immagine.asset->url
    }
  }
`;

// Impostazioni
export const impostazioniQuery = groq`
  *[_type == "impostazioni"][0] {
    nomeSito,
    descrizione,
    "logo": logo.asset->url,
    email,
    telefono,
    indirizzo,
    social,
    statistiche,
    heroHomepage {
      titolo,
      sottotitolo,
      "immagine": immagine.asset->url
    }
  }
`;
