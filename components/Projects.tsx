import React from "react";
import ButtonOutline from "./buttons/ButtonOutline";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ProjectCard from "./ProjectCard";


const projects = [
  {
    key: "lokota-ai",
    image: "lokota-ai.png",
    link: "https://lokotaai.com/",
    features: [0, 1, 2, 3, 4],
    achievements: [0, 1, 2, 3],
  },
  {
    key: "eskimo-village",
    image: "eskimo-village.png",
    link: "https://eskimovillage.com/",
    features: [0, 1, 2, 3, 4],
    achievements: [0, 1, 2],
  },
  {
    key: "shot-canvas",
    image: "shot-canvas.png",
    link: "https://shotcanvas.com/",
    features: [0, 1, 2],
    achievements: [0, 1, 2],
  },
  {
    key: "hansatorin-apteekki",
    image: "hansatorin-apteekki.png",
    link: "https://hansatorinapteekki.fi/",
    features: [0, 1, 2],
    achievements: [0, 1, 2],
  },
  {
    key: "roof-history",
    image: "roof-history.jpg",
    link: "https://roofhistory.com/",
    features: [0, 1, 2],
    achievements: [0, 1, 2],
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
        <div className="columns-1 lg:columns-2 gap-5 xl:gap-10 w-full">
          {projects.slice(0, isProjectsPage ? projects.length : 2).map(
            (project, i) => (
              <ProjectCard
                key={project.key}
                project={project}
                className="break-inside-avoid mb-5 xl:mb-10"
              />
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

// <Link
//   href={project.link}
//   key={i}
//   target="_blank"
//   className="aspect-video rounded-[20px] overflow-hidden group relative group-hover:shadow-2xl shadow-xl text-content-light duration-500"
// >
//   <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/70 lg:via-black/20 to-black/70 lg:to-black/80 duration-500 lg:group-hover:-translate-y-full transition-all"></div>
//   <div className="absolute inset-0 z-[1] bg-black/80 translate-y-[calc(100%-0.5px)] lg:group-hover:-translate-y-[0.5px] duration-500 transition-all"></div>
//   <Image
//     src={`/projects/${project.image}`}
//     alt={t(`items.${project.key}.title`)}
//     fill
//     className="w-full h-full object-cover z-0 group-hover:scale-105 transition-all duration-500 "
//   />
//   <div className="flex flex-col gap-2 lg:gap-5 z-[2] absolute lg:top-[calc(100%-100px)] lg:group-hover:top-0 bottom-0 transition-all p-5 lg:p-10 duration-500">
//     <h3 className="text-xl lg:text-2xl font-bold flex items-center gap-2">
//       {t(`items.${project.key}.title`)}
//     </h3>
//     <p className="text-gray-200 group-hover:opacity-100 sm:flex hidden text-base lg:text-lg lg:opacity-0 transition-all duration-500">
//       {t(`items.${project.key}.description`)}
//     </p>
//   </div>
// </Link>
