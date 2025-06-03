import ContactForm from "@/components/ContactForm";
import MinimalLayout from "@/components/shared-layouts/MinimalLayout";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

const dynamicMetadata = {
  en: {
    title: "Contact Us | Get a Quote for Your IT Project | Stjernberg Web and IT Services​",
    description:
      "Reach out today to discuss your IT project and receive a tailored quote. Let's bring your vision to life.​​",
  },
  sv: {
    title: "Kontakta oss | Få en offert för ditt IT-projekt | Stjernberg Web and IT Services​",
    description:
      "Hör av dig idag för att diskutera ditt IT-projekt och få en skräddarsydd offert. Låt oss förverkliga din vision.​",
  },
  fi: {
    title: "Ota yhteyttä | Pyydä tarjous IT-projektillesi | Stjernberg Web and IT Services​",
    description:
      "Ota yhteyttä tänään keskustellaksesi IT-projektistasi ja saadaksesi räätälöidyn tarjouksen. Toteutetaan visiosi yhdessä.​​​",
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

export default function Contact() {
  return (
    <MinimalLayout page="contact-info-page">
      <ContactForm />
    </MinimalLayout>
  );
}
