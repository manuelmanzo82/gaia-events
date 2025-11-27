const servizio = {
  name: "servizio",
  title: "Servizi",
  type: "document",
  fields: [
    {
      name: "titolo",
      title: "Titolo",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titolo",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "sottotitolo",
      title: "Sottotitolo",
      type: "string",
    },
    {
      name: "descrizione",
      title: "Descrizione Breve",
      type: "text",
      rows: 3,
    },
    {
      name: "contenuto",
      title: "Contenuto Completo",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "caratteristiche",
      title: "Caratteristiche / Cosa Include",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "immagine",
      title: "Immagine",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "icona",
      title: "Nome Icona",
      type: "string",
      description: "Nome dell'icona (es: planning, calendar, palette, map)",
      options: {
        list: [
          { title: "Planning", value: "planning" },
          { title: "Calendario", value: "calendar" },
          { title: "Palette", value: "palette" },
          { title: "Mappa", value: "map" },
        ],
      },
    },
    {
      name: "ordine",
      title: "Ordine di Visualizzazione",
      type: "number",
      initialValue: 0,
    },
    {
      name: "attivo",
      title: "Attivo",
      type: "boolean",
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: "Ordine",
      name: "ordineAsc",
      by: [{ field: "ordine", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "titolo",
      subtitle: "sottotitolo",
      media: "immagine",
    },
  },
};

export default servizio;
