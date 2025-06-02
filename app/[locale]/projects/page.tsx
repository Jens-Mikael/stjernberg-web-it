import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import MinimalLayout from "@/components/shared-layouts/MinimalLayout";

import { Metadata } from "next";
import { getLocale } from "next-intl/server";

const dynamicMetadata = {
  en: {
    title: "Our IT Projects | Web & Cloud Solutions | Stjernberg Web and IT Services​",
    description:
      "Explore our portfolio of successful IT projects, including web applications and cloud integrations.​​​",
  },
  sv: {
    title: "Våra IT-projekt | Webb- & molnlösningar | Stjernberg Web and IT Services​",
    description:
      "Utforska vår portfölj av framgångsrika IT-projekt, inklusive webbapplikationer och molnintegrationer.​​",
  },
  fi: {
    title:
      "IT-projektimme | Verkkosovellukset ja pilviratkaisut | Stjernberg Web and IT Services​",
    description:
      "Tutustu onnistuneisiin IT-projekteihimme, mukaan lukien verkkosovellukset ja pilvi-integraatiot.​​​​",
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
  return (
    <MinimalLayout page="projects-page">
      <Projects isProjectsPage={true} />
      <ContactForm />
    </MinimalLayout>
  );
}
