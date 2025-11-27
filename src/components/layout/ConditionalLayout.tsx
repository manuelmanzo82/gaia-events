"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { publicClient } from "@/sanity/client";
import { impostazioniQuery } from "@/sanity/queries";

interface Impostazioni {
  logo?: string;
  nomeSito?: string;
}

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");
  const [settings, setSettings] = useState<Impostazioni | null>(null);

  useEffect(() => {
    if (!isStudio) {
      publicClient.fetch(impostazioniQuery).then(setSettings);
    }
  }, [isStudio]);

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar logo={settings?.logo} siteName={settings?.nomeSito} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
