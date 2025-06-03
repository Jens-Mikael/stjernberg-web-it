import SoftwareDevelopmentService from "@/components/pages/services/software-development";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

const dynamicMetadata = {
  en: {
    title: "Software Development | Stjernberg Web and IT Services​",
    description:
      "High quality software development services to ensure high user experience, performance and security.​",
  },
  fi: {
    title: "Ohjelmistokehitys | Stjernberg Web and IT Services​",
    description:
      "Korkealaatuiset ohjelmistokehityspalvelut, jotka takaavat erinomaisen käyttökokemuksen, suorituskyvyn ja turvallisuuden​",
  },
  sv: {
    title: "Programvaruutveckling | Stjernberg Web and IT Services​",
    description:
      "Högkvalitativa programvaruutvecklingstjänster för att säkerställa hög användarupplevelse, prestanda och säkerhet",
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
  return <SoftwareDevelopmentService />;
}
