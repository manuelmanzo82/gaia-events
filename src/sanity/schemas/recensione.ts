const recensione = {
  name: "recensione",
  title: "Recensioni",
  type: "document",
  fields: [
    {
      name: "autore",
      title: "Nome Coppia",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "evento",
      title: "Tipo Evento",
      type: "string",
      description: "Es: Matrimonio Villa Aurelia, Roma",
    },
    {
      name: "data",
      title: "Data",
      type: "date",
    },
    {
      name: "testo",
      title: "Recensione",
      type: "text",
      rows: 5,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "valutazione",
      title: "Valutazione (1-5)",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: "immagine",
      title: "Foto Coppia",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "eventoCollegato",
      title: "Evento Portfolio Collegato",
      type: "reference",
      to: [{ type: "evento" }],
    },
    {
      name: "inEvidenza",
      title: "Mostra in Homepage",
      type: "boolean",
      initialValue: false,
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
      title: "Data (Recente)",
      name: "dataDesc",
      by: [{ field: "data", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "autore",
      subtitle: "evento",
      media: "immagine",
    },
  },
};

export default recensione;
