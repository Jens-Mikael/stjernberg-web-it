import ButtonCTA from "@/components/buttons/ButtonCTA";
import { useTranslations } from "next-intl";

export default function SuccessStoriesSoftwareDevelopment() {
  const t = useTranslations("success-stories");
  return (
    <div className="px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center flex-col items-center gap-20 bg-base-light">
      <div className="flex flex-col gap-10 max-w-[1800px] w-full">
        <h2 className="text-4xl font-bold">{t("headline")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="border border-gray-100 bg-white p-5 md:p-10 rounded-[20px] flex flex-col gap-3"
            >
              <h3 className="text-2xl font-semibold">
                {t(`items.${i}.title`)}
              </h3>
              <p className="text-gray-700 flex-1 mb-2">
                {t(`items.${i}.description`)}
              </p>
              <div className="border p-5 border-green-500 bg-green-50 rounded-2xl">
                <p className="text-green-500 text-lg">
                  <span className="font-bold">{t("result")}</span>{" "}
                  {t(`items.${i}.result`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ButtonCTA />
    </div>
  );
}
