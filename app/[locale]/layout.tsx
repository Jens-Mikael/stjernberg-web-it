import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared-layouts/Navbar";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Providers from "../Providers";
import { PostHogProvider } from "@/components/PostHogProvider";
import Script from "next/script";

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

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
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
      <Script id="posthog-script" strategy="beforeInteractive">
        {`
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_on8Pz6V5VUJKPyi1zDEGXpW6V6Aj3KTxkv2ndUs1H7p', {api_host: 'https://eu.i.posthog.com'})
    `}
      </Script>

      <body className={`${gabarito.variable} antialiased `}>
        <Providers>
          <NextIntlClientProvider>
            <Navbar />
            {children}{" "}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
