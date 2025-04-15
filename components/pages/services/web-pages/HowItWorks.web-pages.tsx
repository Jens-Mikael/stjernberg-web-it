import ButtonCTA from "@/components/buttons/ButtonCTA";
import { useTranslations } from "next-intl";

export default function WebPagesHowItWorks() {
  const t = useTranslations("services.web-pages.how-it-works");
  return (
    <div className="bg-base-light px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="max-w-[1800px] items-center flex flex-col gap-14">
        <h2 className="text-4xl font-bold text-content-dark text-center">
          {t("headline")}
        </h2>
        <div className="flex w-full justify-between gap-5 lg:flex-row flex-col items-center lg:items-start">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="flex flex-col gap-3 items-center text-center max-w-sm w-full"
            >
              <div className="rounded-full bg-main text-content-light w-10 h-10 flex items-center justify-center">
                <p className="text-xl font-bold text-content-light">{step}</p>
              </div>
              <h3 className="text-2xl font-bold text-content-dark">
                {t(`steps.${step}.headline`)}
              </h3>
              <p className="text-gray-700">{t(`steps.${step}.description`)}</p>
            </div>
          ))}
        </div>
        <ButtonCTA />
      </div>
    </div>
  );
}
