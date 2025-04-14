import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import MinimalLayout from "@/components/shared-layouts/MinimalLayout";

import { Metadata } from "next";

const dynamicMetadata = {
  en: {
    title: "Our IT Projects | Web & Cloud Solutions | Stjernberg Web​",
    description:
      "Explore our portfolio of successful IT projects, including web applications and cloud integrations.​​​",
  },
  sv: {
    title: "Våra IT-projekt | Webb- & molnlösningar | Stjernberg Web​",
    description:
      "Utforska vår portfölj av framgångsrika IT-projekt, inklusive webbapplikationer och molnintegrationer.​​",
  },
  fi: {
    title:
      "IT-projektimme | Verkkosovellukset ja pilviratkaisut | Stjernberg Web​",
    description:
      "Tutustu onnistuneisiin IT-projekteihimme, mukaan lukien verkkosovellukset ja pilvi-integraatiot.​​​​",
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
  return (
    <MinimalLayout page="projects-page">
      <Projects showAll={true} />
      <ContactForm />
    </MinimalLayout>
  );
}
