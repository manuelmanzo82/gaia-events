const pagina = {
  name: "pagina",
  title: "Pagine",
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
      title: "Descrizione (per SEO)",
      type: "text",
      rows: 3,
    },
    {
      name: "immagineHero",
      title: "Immagine Hero",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "contenuto",
      title: "Contenuto",
      type: "array",
      of: [
        { type: "block" },
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
      name: "sezioni",
      title: "Sezioni Aggiuntive",
      type: "array",
      of: [
        {
          type: "object",
          name: "sezione",
          title: "Sezione",
          fields: [
            {
              name: "titolo",
              title: "Titolo Sezione",
              type: "string",
            },
            {
              name: "contenuto",
              title: "Contenuto",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "immagine",
              title: "Immagine",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "titolo",
      subtitle: "sottotitolo",
      media: "immagineHero",
    },
  },
};

export default pagina;
