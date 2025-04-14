import WebPagesService from "@/components/pages/services/web-pages";
import { Metadata } from "next";

const dynamicMetadata = {
  en: {
    title: "Custom Business Websites That Convert | Stjernberg Web​",
    description:
      "Professional, tailored, and SEO-optimized websites designed to generate leads and grow your business.​",
  },
  sv: {
    title: "Moderna företagswebbplatser som konverterar | Stjernberg Web",
    description:
      "Professionella, anpassade och SEO-optimerade webbplatser utformade för att generera leads och växa ditt företag.​​",
  },
  fi: {
    title:
      "Räätälöidyt yrityssivustot, jotka tuottavat tuloksia | Stjernberg Web",
    description:
      "Ammattimaiset, räätälöidyt ja SEO-optimoidut verkkosivut, jotka tuovat asiakkaita ja kasvattavat liiketoimintaasi.​​",
  },
};

interface IProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(
  { params }: IProps,
): Promise<Metadata> {
  // read route params
  const { locale } = (await params) as { locale: keyof typeof dynamicMetadata };

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
