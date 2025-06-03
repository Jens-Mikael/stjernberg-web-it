import ButtonCTA from "@/components/buttons/ButtonCTA";
import { BookCopy, CalendarClock, Factory, Smile } from "lucide-react";
import { useTranslations } from "next-intl";

const items = [
  { icon: <CalendarClock /> },
  { icon: <Smile /> },
  { icon: <BookCopy /> },
  { icon: <Factory /> },
];

export default function WhyWorkSoftwareDevelopment() {
  const t = useTranslations("why-work");
  return (
    <div className="bg-base-dark px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="max-w-[1800px] items-center  flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-content-gray text-center">
          {t("headline")}{" "}
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10  lg:gap-15 max-w-4xl">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-4 text-content-light md:text-start text-center"
            >
              <div className="flex items-center gap-3 md:flex-row flex-col">
                <div className="rounded-full p-2.5 bg-main ">
                  {items[i].icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {t(`reasons.${i}.headline`)}
                </h3>
              </div>
              <p className="text-content-gray text-lg">
                {" "}
                {t(`reasons.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
        <ButtonCTA />
      </div>
    </div>
  );
}
