import { Link } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Services() {
  const t = useTranslations("services");
  return (
    <div
      id="services"
      className="px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center bg-base-light"
    >
      <div className="flex flex-col gap-10 max-w-[1800px] w-full">
        <h2 className="text-4xl font-bold">{t("headline")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 xl:gap-20 w-full">
          {[
            {
              key: "web-pages",
              icon: Globe,
              image: "/services/web-pages.jpg",
              href: "/services/web-pages",
            },
            // {
            //   key: "frontend-backend",
            //   icon: Code,
            //   image: "/services/frontend-backend.jpeg",
            //   href: "/services/frontend-backend",
            // },
            // {
            //   title: "Kotisivut yritykselle",
            //   description: "Palvelut",
            //   icon: Globe,
            //   image: "/hero-v3.jpg",
            // },
            // {
            //   title: "Kotisivut yritykselle",
            //   description: "Palvelut",
            //   icon: Globe,
            //   image: "/hero-v3.jpg",
            // },
          ].map((service, i) => (
            <Link
              href={`${service.href}`}
              key={i}
              className="aspect-3/4 sm:aspect-video rounded-[20px] overflow-hidden group relative group-hover:shadow-2xl shadow-xl text-content-light duration-500"
            >
              <div className="absolute z-[1] inset-0 bg-gradient-to-b from-transparent via-black/70 lg:via-black/50 to-black/90 lg:to-black/80 duration-500 lg:group-hover:-translate-y-full transition-all"></div>
              <div className="absolute z-[1] inset-0 bg-black/80 translate-y-[calc(100%-0.5px)] lg:group-hover:-translate-y-[0.5px] duration-500 transition-all"></div>
              <Image
                src={service.image}
                alt={t(`${service.key}.title`)}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="flex flex-col gap-2 lg:gap-5 absolute z-[2] lg:top-[calc(100%-100px)] lg:group-hover:top-0 bottom-0 transition-all p-5 lg:p-10 duration-500">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <service.icon className="w-6 h-6 text-main" />
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-gray-200 group-hover:opacity-100 lg:text-lg lg:opacity-0 transition-all duration-500">
                  {t(`${service.key}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
