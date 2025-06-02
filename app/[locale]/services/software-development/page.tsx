import SoftwareDevelopmentService from "@/components/pages/services/software-development";
import WebPagesService from "@/components/pages/services/web-pages";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

const dynamicMetadata = {
  en: {
    title: "Custom Software Development | Stjernberg Web and IT Services​",
    description:
      "High quality software development services to ensure high user experience, performance and security.​",
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
