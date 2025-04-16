import WebPagesService from "@/components/pages/services/web-pages";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

const dynamicMetadata = {
  en: {
    title: "Custom Company Websites | Stjernberg Web​",
    description:
      "Professional, tailored, and SEO-optimized websites designed to generate leads and grow your business.​",
  },
  sv: {
    title: "Snygga hemsidor för företag | Stjernberg Web",
    description:
      "Professionella, anpassade och SEO-optimerade webbplatser utformade för att generera leads och växa ditt företag.​​",
  },
  fi: {
    title: "Modernit verkkosivut yrityksille | Stjernberg Web",
    description:
      "Ammattimaiset, modernit ja SEO-optimoidut verkkosivut, jotka tuovat asiakkaita ja kasvattavat liiketoimintaasi.​​",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as keyof typeof dynamicMetadata;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL as string),
    title: dynamicMetadata[locale].title,
    description: dynamicMetadata[locale].description,
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        fi: "/fi",
        sv: "/sv",
      },
    },
  };
}

export default function Page() {
  return <WebPagesService />;
}
