"use client";
import { ArrowDown, Check, CheckCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type TProject = {
  key: string;
  image: string;
  link: string;
  features: number[];
  achievements: number[];
};

export default function ProjectCard({
  project,
  className,
}: {
  project: TProject;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("projects");
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-5 bg-gradient-to-br from-white via-white to-gray-50/50 border border-gray-200/60 p-4 xs:p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-fit overflow-hidden",
        className
      )}
    >
      {/* Subtle background pattern */}
      <div className=" flex justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {t(`items.${project.key}.title`)}
          </h3>
          <p className="italic text-content-dark/80 text-sm font-medium">
            {t(`items.${project.key}.role`)}
          </p>
        </div>
        <Link
          href={project.link}
          target="_blank"
          className="flex items-center gap-2 h-fit group/link font-semibold px-4 py-2 rounded-xl bg-gradient-to-r  from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <span className="hidden xs:inline">Visit site</span>{" "}
          <span className="xs:hidden">Visit</span>
          <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-xl group-hover:shadow-lg transition-all">
        <Image
          className="aspect-video rounded-xl border-4 border-gray-200/60 group-hover:scale-105 transition-transform duration-500"
          src={`/projects/${project.image}`}
          alt={project.key}
          width={1000}
          height={1000}
        />
        {/* Overlay on hover */}
        {/* <div className="absolute size-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" /> */}
      </div>

      <p className="text-content-dark/80 text-lg leading-relaxed">
        {t(`items.${project.key}.description`)}
      </p>

      <div>
        <div
          ref={detailsRef}
          style={{
            height: isExpanded ? detailsRef.current?.scrollHeight : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          className="overflow-hidden transition-all flex flex-col gap-5 duration-500"
        >
          <div className="space-y-3">
            <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              {t(`items.${project.key}.core-features.title`)}
            </p>
            <ul className="space-y-2">
              {project.features?.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg bg-green-50/50 border border-green-100/50 group/item hover:bg-green-100/50 transition-colors duration-200"
                >
                  <Check className="size-5 text-green-600 min-w-5 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700">
                    {t(`items.${project.key}.core-features.items.${feature}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
              {t(`items.${project.key}.achievements.title`)}
            </p>
            <ul className="space-y-2">
              {project.achievements?.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg bg-purple-50/50 border border-purple-100/50 group/item hover:bg-purple-100/50 transition-colors duration-200"
                >
                  <CheckCircle className="size-5 min-w-5 text-purple-600 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700">
                    {t(`items.${project.key}.achievements.items.${feature}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5 space-y-3">
            <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-600 rounded-full" />
              Tools used:
            </p>
            <div className="flex flex-wrap gap-2 p-1">
              {[
                "Github",
                "Linkedin",
                "X",
                "Figma",
                "Notion",
                "Slack",
                "Google Sheets",
                "Google Docs",
              ].map((tool) => (
                <div
                  key={tool}
                  className="rounded-xl px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-200/50 hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-300/70 transition-all duration-200 cursor-default transform hover:scale-105 shadow-sm"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-semibold flex items-center gap-2 group/button p-3 rounded-xl hover:bg-gray-100/50 transition-all duration-200 w-full justify-center border border-gray-200/50 hover:border-gray-300/50"
        >
          {isExpanded ? "View less" : "View details"}
          <ArrowDown
            className={`size-5 transition-all duration-300 text-main ${
              isExpanded
                ? "rotate-180 group-hover/button:-translate-y-1"
                : "group-hover/button:translate-y-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
