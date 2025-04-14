import ContactForm from "@/components/ContactForm";
import MinimalLayout from "@/components/shared-layouts/MinimalLayout";
import { Metadata } from "next";

const dynamicMetadata = {
  en: {
    title: "Contact Us | Get a Quote for Your IT Project | Stjernberg Web​",
    description:
      "Reach out today to discuss your IT project and receive a tailored quote. Let's bring your vision to life.​​",
  },
  sv: {
    title: "Kontakta oss | Få en offert för ditt IT-projekt | Stjernberg Web​",
    description:
      "Hör av dig idag för att diskutera ditt IT-projekt och få en skräddarsydd offert. Låt oss förverkliga din vision.​",
  },
  fi: {
    title:
      "Ota yhteyttä | Pyydä tarjous IT-projektillesi | Stjernberg Web​",
    description:
      "Ota yhteyttä tänään keskustellaksesi IT-projektistasi ja saadaksesi räätälöidyn tarjouksen. Toteutetaan visiosi yhdessä.​​​",
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

export default function Contact() {
  return (
    <MinimalLayout page="contact-info-page">
      <ContactForm />
    </MinimalLayout>
  );
}
