import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMe() {
  const t = useTranslations("about");
  return (
    <div className="bg-base-dark text-content-light py-20 px-5 sm:px-10 lg:px-20 xl:px-30 flex justify-center">
      <div className="max-w-2xl">
        <div className="relative">
          <div className="sm:float-left mr-6 mb-4">
            <Image
              src="/guitar.png"
              alt="About Me"
              className="rounded-full m-auto"
              width={170}
              height={170}
            />
          </div>
          <h2 className="text-4xl font-bold mb-3">{t("headline")}</h2>

          <p className="whitespace-pre-line">{t("description")}</p>
        </div>
      </div>
    </div>
  );
}
