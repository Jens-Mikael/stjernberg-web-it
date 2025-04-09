import Image from "next/image";
import ButtonFilled from "../buttons/ButtonFilled";
import ButtonOutline from "../buttons/ButtonOutline";
import QuoteIcon from "../svg/QuoteIcon";
import { getTranslations } from "next-intl/server";
export default async function Hero({ page }: { page: string }) {
  const t = await getTranslations(`${page}.hero`);

  return (
    <div className="flex px-5 sm:px-10 lg:px-20 xl:px-30 relative flex-col items-center overflow-hidden text-content-light pt-40 pb-5 sm:pb-10">
      <div className="max-w-[1800px] w-full space-y-20 lg:space-y-30 relative">
        <div className="flex flex-col gap-10 w-full">
          {/* QUOTE */}
          <div className="flex gap-3 items-center text-gray-200">
            <QuoteIcon className="w-10 h-10" />
            <div className="flex flex-col">
              <p className="italic lg:text-lg">
                “Täydellinen sivusto. Julkaisuun!”
              </p>
              <p className="lg:text-base text-sm">
                -Harri Vaelilae, OnePointCode
              </p>
            </div>
          </div>

          {/* MAIN */}
          <div className="flex flex-col gap-5 max-w-[700px]">
            <h1>{t("headline")}</h1>
            <h4>{t("subheadline")}</h4>
            <div className="flex gap-5">
              <ButtonFilled>Ota Yhteyttä</ButtonFilled>
              <ButtonOutline>Tutustu töihin</ButtonOutline>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:text-start text-center w-full gap-3 sm:gap-5 lg:gap-10 relative">
          <p className="text-gray-300 lg:text-xl">Meihin luottaa:</p>
          {[
            "one-point-code",
            "eskimo-village",
            "roof-history",
            "hansatorin-apteekki",
            "hexer-network",
          ].map((brand) => (
            <div key={brand} className="relative h-8 lg:h-10 flex-1">
              <Image
                key={brand}
                src={`/brands/${brand}.png`}
                alt={brand}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute sm:fixed inset-0 -z-20 overflow-hidden">
        <Image
          src="/hero-v3.jpg"
          alt="Background"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>
      <div className="absolute sm:fixed inset-0 -z-10  bg-black/70" />
    </div>
  );
}
