import {
  Hero,
  AboutPreview,
  Services,
  PortfolioPreview,
  Testimonials,
  CTA,
  Stats,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
      <Stats />
    </>
  );
}
