import { useTranslations } from "next-intl";

export default function WebPagesFormula() {
  const t = useTranslations("services.web-pages.formula");
  return (
    <div className="bg-base-dark px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="max-w-[1800px] items-center flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold text-content-gray text-center ">
            {t("headline")}
          </h2>
          <p className="text-gray-100 text-xl max-w-3xl text-center">
            {t("subheadline")}
          </p>
        </div>
        <div className="flex md:gap-5 gap-2 items-center md:flex-row flex-col">
          <Card text={t("service-price")} />
          <p className="text-content-light text-3xl font-bold">x</p>
          <Card text={t("contact-price")} />
          <p className="text-content-light text-3xl font-bold">=</p>

          <Card text={t("value-price")} />
        </div>
       
      </div>
    </div>
  );
}

const Card = ({ text }: { text: string }) => (
  <div className="rounded-lg border border-gray-400 bg-base-light px-5 py-3">
    <p>{text}</p>
  </div>
);
