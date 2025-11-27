import {
  Hero,
  AboutPreview,
  Services,
  PortfolioPreview,
  Testimonials,
  CTA,
  Stats,
} from "@/components/sections";
import { getImpostazioni } from "@/sanity/fetch";

// Revalidate this page every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const impostazioni = await getImpostazioni();

  return (
    <>
      <Hero
        heroImage={impostazioni?.heroHomepage?.immagine}
        title={impostazioni?.heroHomepage?.titolo}
        subtitle={impostazioni?.heroHomepage?.sottotitolo}
      />
      <AboutPreview />
      <Services />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
      <Stats />
    </>
  );
}
