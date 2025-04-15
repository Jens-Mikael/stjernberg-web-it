import Image from "next/image";
import React from "react";
import ButtonOutline from "./buttons/ButtonOutline";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const projectsPreview = [
  {
    key: "eskimo-village",
    image: "eskimo-village.png",
    link: "https://eskimovillage.com/",
  },
  {
    key: "hansatorin-apteekki",
    image: "hansatorin-apteekki.png",
    link: "https://hansatorinapteekki.fi/",
  },
];

const projectsAll = [
  {
    key: "eskimo-village",
    image: "eskimo-village.png",
    link: "https://eskimovillage.com/",
  },
  {
    key: "hansatorin-apteekki",
    image: "hansatorin-apteekki.png",
    link: "https://hansatorinapteekki.fi/",
  },
  {
    key: "roof-history",
    image: "roof-history.jpg",
    link: "https://roofhistory.com/",
  },
];
export default function Projects({
  isProjectsPage,
}: {
  isProjectsPage?: boolean;
}) {
  const t = useTranslations("projects");

  return (
    <div
      id="projects"
      className="px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center"
    >
      <div className="flex flex-col gap-10 max-w-[1800px] w-full">
        {!isProjectsPage && (
          <h2 className="text-4xl font-bold">{t("headline")}</h2>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 xl:gap-20 w-full">
          {(isProjectsPage ? projectsAll : projectsPreview).map(
            (project, i) => (
              <Link
                href={project.link}
                key={i}
                target="_blank"
                className="aspect-video rounded-[20px] overflow-hidden group relative group-hover:shadow-2xl shadow-xl text-content-light duration-500"
              >
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/70 lg:via-black/20 to-black/70 lg:to-black/80 duration-500 lg:group-hover:-translate-y-full transition-all"></div>
                <div className="absolute inset-0 z-[1] bg-black/80 translate-y-[calc(100%-0.5px)] lg:group-hover:-translate-y-[0.5px] duration-500 transition-all"></div>
                <Image
                  src={`/projects/${project.image}`}
                  alt={t(`items.${project.key}.title`)}
                  fill
                  className="w-full h-full object-cover z-0 group-hover:scale-105 transition-all duration-500 "
                />
                <div className="flex flex-col gap-2 lg:gap-5 z-[2] absolute lg:top-[calc(100%-100px)] lg:group-hover:top-0 bottom-0 transition-all p-5 lg:p-10 duration-500">
                  <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-2">
                    {t(`items.${project.key}.title`)}
                  </h3>
                  <p className="text-gray-200 group-hover:opacity-100 sm:flex hidden text-base lg:text-lg lg:opacity-0 transition-all duration-500">
                    {t(`items.${project.key}.description`)}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
        {!isProjectsPage && (
          <Link href="/projects">
            <ButtonOutline className="border-gray-400 text-gray-400 hover:bg-gray-400/10 w-fit">
              {t("more")}
            </ButtonOutline>
          </Link>
        )}
      </div>
    </div>
  );
}

// {
//   title: "Roof History",
//   description:
//     "Suunnittelimme ja rakensimme skaalautuvan verkkopalvelun tausta-arkkitehtuurin, huolehdimme tietoturvallisesta kirjautumisesta ja paransimme käyttöliittymää. Lisäksi tehostimme hakukonenäkyvyyttä ja integroimme osoitehaun Google Cloudin avulla, jotta palvelu olisi nopea, selkeä ja luotettava.",
//   icon: Globe,
//   image: "/hero-v3.jpg",
// },
