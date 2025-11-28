const evento = {
  name: "evento",
  title: "Portfolio Eventi",
  type: "document",
  fields: [
    {
      name: "macroCategoria",
      title: "Macro Categoria",
      type: "string",
      options: {
        list: [
          { title: "Wedding", value: "wedding" },
          { title: "Corporate", value: "corporate" },
          { title: "Celebrations", value: "celebrations" },
        ],
        layout: "radio",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "titolo",
      title: "Titolo Evento",
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
      title: "Sotto-categoria (opzionale)",
      type: "string",
      description: "Es: Destination Wedding, Matrimonio Classico, etc.",
    },
    {
      name: "descrizioneBreve",
      title: "Descrizione Breve",
      type: "text",
      rows: 2,
      description: "Mostrata nelle liste (max 1-2 righe)",
    },
    {
      name: "descrizioneCompleta",
      title: "Descrizione Completa",
      type: "array",
      of: [{ type: "block" }],
      description: "Testo completo per la pagina singola",
    },
    {
      name: "immagineCopertina",
      title: "Immagine Copertina",
      type: "image",
      description: "Mostrata nelle liste",
      options: {
        hotspot: true,
      },
    },
    {
      name: "immagineHero",
      title: "Immagine Hero",
      type: "image",
      description: "Immagine grande per la pagina singola (se diversa dalla copertina)",
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
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "Link YouTube o Vimeo (opzionale)",
    },
    {
      name: "testimonialTesto",
      title: "Testimonial - Testo",
      type: "text",
      rows: 4,
      description: "Recensione del cliente (opzionale)",
    },
    {
      name: "testimonialAutore",
      title: "Testimonial - Autore",
      type: "string",
      description: "Nome del cliente/coppia",
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
      subtitle: "macroCategoria",
      media: "immagineCopertina",
    },
    prepare({ title, subtitle, media }: any) {
      const categoryLabels: Record<string, string> = {
        wedding: "Wedding",
        corporate: "Corporate",
        celebrations: "Celebrations",
      };
      return {
        title,
        subtitle: categoryLabels[subtitle] || subtitle,
        media,
      };
    },
  },
};

export default evento;
