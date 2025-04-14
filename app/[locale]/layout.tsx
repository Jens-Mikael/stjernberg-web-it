import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared-layouts/Navbar";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Providers from "../Providers";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const dynamicMetadata = {
  en: {
    title: "Innovative Software & IT Solutions | Stjernberg Web​",
    description:
      "We develop efficient, scalable IT solutions to help businesses stay competitive in a changing world.",
  },
  sv: {
    title: "Innovativa programvaru- & IT-lösningar | Stjernberg Web",
    description:
      "Vi utvecklar effektiva, skalbara IT-lösningar som hjälper företag att förbli konkurrenskraftiga i en föränderlig värld.​",
  },
  fi: {
    title: "Innovatiiviset ohjelmisto- ja IT-ratkaisut | Stjernberg Web​",
    description:
      "Kehitämme tehokkaita, skaalautuvia IT-ratkaisuja, jotka auttavat yrityksiä pysymään kilpailukykyisinä muuttuvassa maailmassa.​",
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
    openGraph: {
      images: `/hero.jpg`,
    },
  };
}

export default async function RootLayout({ children, params }: IProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${gabarito.variable} antialiased `}>
        <Providers>
          <NextIntlClientProvider>
            <Navbar />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
