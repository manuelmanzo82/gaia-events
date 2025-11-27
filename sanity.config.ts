import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "gaia-events-studio",
  title: "Gaia Events CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yfcp9735",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenuti")
          .items([
            // Impostazioni singolo documento
            S.listItem()
              .title("Impostazioni Sito")
              .child(
                S.document()
                  .schemaType("impostazioni")
                  .documentId("impostazioni")
              ),
            S.divider(),
            // Eventi
            S.listItem()
              .title("Portfolio Eventi")
              .schemaType("evento")
              .child(S.documentTypeList("evento").title("Eventi")),
            // Recensioni
            S.listItem()
              .title("Recensioni")
              .schemaType("recensione")
              .child(S.documentTypeList("recensione").title("Recensioni")),
            // Servizi
            S.listItem()
              .title("Servizi")
              .schemaType("servizio")
              .child(S.documentTypeList("servizio").title("Servizi")),
            // Pagine
            S.listItem()
              .title("Pagine")
              .schemaType("pagina")
              .child(S.documentTypeList("pagina").title("Pagine")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
