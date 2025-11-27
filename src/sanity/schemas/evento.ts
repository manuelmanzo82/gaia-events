const evento = {
  name: "evento",
  title: "Eventi (Portfolio)",
  type: "document",
  fields: [
    {
      name: "titolo",
      title: "Titolo (Nome Coppia)",
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
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "data",
      title: "Data Evento",
      type: "date",
    },
    {
      name: "categoria",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Matrimonio Classico", value: "matrimonio-classico" },
          { title: "Destination Wedding", value: "destination-wedding" },
          { title: "Matrimonio Intimo", value: "matrimonio-intimo" },
          { title: "Design & Styling", value: "design-styling" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
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
      name: "immagineCopertina",
      title: "Immagine Copertina",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "galleria",
      title: "Galleria Immagini",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Testo Alternativo",
              type: "string",
            },
            {
              name: "didascalia",
              title: "Didascalia",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "inEvidenza",
      title: "Mostra in Homepage",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "ordine",
      title: "Ordine di Visualizzazione",
      type: "number",
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: "Data Evento (Recente)",
      name: "dataDesc",
      by: [{ field: "data", direction: "desc" }],
    },
    {
      title: "Ordine Personalizzato",
      name: "ordineAsc",
      by: [{ field: "ordine", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "titolo",
      subtitle: "location",
      media: "immagineCopertina",
    },
  },
};

export default evento;
