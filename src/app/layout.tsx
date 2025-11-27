import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaia Events | Wedding Planner Roma",
  description:
    "Gaia Events - Wedding Planner a Roma. Organizziamo matrimoni da sogno con eleganza toscana. Consulenza personalizzata, coordinamento e design per il vostro giorno speciale.",
  keywords: [
    "wedding planner roma",
    "matrimonio roma",
    "organizzazione matrimoni",
    "wedding planner",
    "eventi roma",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
