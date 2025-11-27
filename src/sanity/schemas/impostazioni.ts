const impostazioni = {
  name: "impostazioni",
  title: "Impostazioni Sito",
  type: "document",
  fields: [
    {
      name: "nomeSito",
      title: "Nome Sito",
      type: "string",
      initialValue: "Gaia Events",
    },
    {
      name: "descrizione",
      title: "Descrizione Sito",
      type: "text",
      rows: 3,
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "telefono",
      title: "Telefono",
      type: "string",
    },
    {
      name: "indirizzo",
      title: "Indirizzo",
      type: "string",
    },
    {
      name: "social",
      title: "Social Media",
      type: "object",
      fields: [
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        },
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
        },
        {
          name: "pinterest",
          title: "Pinterest URL",
          type: "url",
        },
      ],
    },
    {
      name: "statistiche",
      title: "Statistiche Homepage",
      type: "object",
      fields: [
        {
          name: "matrimoni",
          title: "Numero Matrimoni",
          type: "string",
          initialValue: "150+",
        },
        {
          name: "anni",
          title: "Anni Esperienza",
          type: "string",
          initialValue: "10+",
        },
        {
          name: "soddisfazione",
          title: "Soddisfazione Clienti",
          type: "string",
          initialValue: "100%",
        },
        {
          name: "location",
          title: "Location Partner",
          type: "string",
          initialValue: "50+",
        },
      ],
    },
    {
      name: "fotoChiSono",
      title: "Foto Chi Sono",
      type: "image",
      description: "Foto per la sezione Chi Sono in homepage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heroHomepage",
      title: "Hero Homepage",
      type: "object",
      fields: [
        {
          name: "titolo",
          title: "Titolo",
          type: "string",
        },
        {
          name: "sottotitolo",
          title: "Sottotitolo",
          type: "text",
          rows: 2,
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
  preview: {
    prepare() {
      return {
        title: "Impostazioni Sito",
      };
    },
  },
};

export default impostazioni;
