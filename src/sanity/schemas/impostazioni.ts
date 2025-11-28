const impostazioni = {
  name: "impostazioni",
  title: "Impostazioni Sito",
  type: "document",
  groups: [
    { name: "generale", title: "Generale" },
    { name: "contatti", title: "Contatti" },
    { name: "homepage", title: "Homepage" },
    { name: "portfolio", title: "Portfolio" },
  ],
  fields: [
    {
      name: "nomeSito",
      title: "Nome Sito",
      type: "string",
      initialValue: "Gaia Events",
      group: "generale",
    },
    {
      name: "descrizione",
      title: "Descrizione Sito",
      type: "text",
      rows: 3,
      group: "generale",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      group: "generale",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      group: "contatti",
    },
    {
      name: "telefono",
      title: "Telefono",
      type: "string",
      group: "contatti",
    },
    {
      name: "indirizzo",
      title: "Indirizzo",
      type: "string",
      group: "contatti",
    },
    {
      name: "social",
      title: "Social Media",
      type: "object",
      group: "contatti",
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
      group: "homepage",
      fields: [
        {
          name: "eventiRealizzati",
          title: "Eventi Realizzati",
          type: "string",
          initialValue: "150+",
        },
        {
          name: "anniEsperienza",
          title: "Anni Esperienza",
          type: "string",
          initialValue: "10+",
        },
        {
          name: "locationPartner",
          title: "Location Partner",
          type: "string",
          initialValue: "50+",
        },
        {
          name: "fornitoriSelezionati",
          title: "Fornitori Selezionati",
          type: "string",
          initialValue: "80+",
        },
      ],
    },
    {
      name: "fotoChiSono",
      title: "Foto Chi Sono",
      type: "image",
      description: "Foto per la sezione Chi Sono in homepage",
      group: "homepage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "heroHomepage",
      title: "Hero Homepage",
      type: "object",
      group: "homepage",
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
    // PORTFOLIO SECTION
    {
      name: "paginaPortfolio",
      title: "Pagina Portfolio Principale",
      type: "object",
      group: "portfolio",
      fields: [
        {
          name: "heroImmagine",
          title: "Immagine Hero",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "heroTitolo",
          title: "Titolo Hero",
          type: "string",
          initialValue: "Portfolio",
        },
        {
          name: "heroSottotitolo",
          title: "Sottotitolo Hero",
          type: "string",
          initialValue: "Storie ed Emozioni",
        },
        {
          name: "introTesto",
          title: "Testo Introduttivo",
          type: "text",
          rows: 3,
        },
      ],
    },
    {
      name: "portfolioCategorie",
      title: "Categorie Portfolio",
      type: "object",
      group: "portfolio",
      fields: [
        {
          name: "wedding",
          title: "Wedding",
          type: "object",
          fields: [
            {
              name: "titolo",
              title: "Titolo",
              type: "string",
              initialValue: "Wedding",
            },
            {
              name: "descrizione",
              title: "Descrizione",
              type: "text",
              rows: 2,
            },
            {
              name: "immagineCopertina",
              title: "Immagine Copertina (per /portfolio)",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "immagineHero",
              title: "Immagine Hero (per /portfolio/wedding)",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
        {
          name: "corporate",
          title: "Corporate",
          type: "object",
          fields: [
            {
              name: "titolo",
              title: "Titolo",
              type: "string",
              initialValue: "Corporate",
            },
            {
              name: "descrizione",
              title: "Descrizione",
              type: "text",
              rows: 2,
            },
            {
              name: "immagineCopertina",
              title: "Immagine Copertina (per /portfolio)",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "immagineHero",
              title: "Immagine Hero (per /portfolio/corporate)",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
        {
          name: "celebrations",
          title: "Celebrations",
          type: "object",
          fields: [
            {
              name: "titolo",
              title: "Titolo",
              type: "string",
              initialValue: "Celebrations",
            },
            {
              name: "sottotitolo",
              title: "Sottotitolo",
              type: "string",
              initialValue: "Party, compleanni, battesimi, anniversari",
            },
            {
              name: "descrizione",
              title: "Descrizione",
              type: "text",
              rows: 2,
            },
            {
              name: "immagineCopertina",
              title: "Immagine Copertina (per /portfolio)",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "immagineHero",
              title: "Immagine Hero (per /portfolio/celebrations)",
              type: "image",
              options: { hotspot: true },
            },
          ],
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
