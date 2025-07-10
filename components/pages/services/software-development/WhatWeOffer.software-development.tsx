import { Check, Cloud, CodeXml, Server } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ServerImage from "@/public/server.jpg";
import FrontendImage from "@/public/frontend.webp";
import DevOpsImage from "@/public/devops.png";

import ButtonCTA from "@/components/buttons/ButtonCTA";

const items = [
  {
    image: FrontendImage,
    icon: <CodeXml />,
    tools: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "ShadCN",
      "HTML5",
      "CSS3",
      "Javascript",
    ],
  },
  {
    image: ServerImage,
    icon: <Server />,
    tools: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Drizzle ORM",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Pinecone",
      "Cloudflare",
      "REST APIs",
      "GraphQL",
      "Redis",
      "Matrix-sdk-js",
    ],
  },
  {
    image: DevOpsImage,
    icon: <Cloud />,
    tools: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Vercel",
      "Docker",
      "CI/CD",
      "Git"
    ],
  },
];

export default function WhatWeOfferSoftwareDevelopment() {
  const t = useTranslations("services.software-development.what-we-offer");
  return (
    <div className="px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center flex-col items-center gap-20 bg-base-light">
      <div className="flex flex-col gap-10 md:gap-20 max-w-[1800px] w-full">
        <h2 className="text-4xl font-bold">{t("headline")}</h2>
        <div className="lg:gap-30 gap-20 flex flex-col">
          {items.map((item, i) => (
            <div
              key={i}
              className={`w-full flex gap-10 xl:gap-30 md:flex-row flex-col ${i === 1 ? "md:flex-row-reverse": "md:flex-row"}`}
            >
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-2.5 bg-main text-content-light">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {t(`items.${i}.headline`)}
                  </h3>
                </div>
                <p className="text-lg">{t(`items.${i}.description`)}</p>
                <div className="flex gap-5 lg:flex-row flex-col">
                  <div className="space-y-2 flex-1">
                    <h5 className="text-xl font-bold">
                      {t(`items.${i}.features`)}
                    </h5>
                    <ul className="space-y-1">
                      {[0, 1, 2, 3, 4, 5].map((j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Check className="text-main h-5 w-5 min-w-5" />
                          <p className="">
                            {t(`items.${i}.feature-items.${j}`)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h5 className="text-xl font-bold">{t("tools")}</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tools.map((tool) => (
                        <div key={tool} className="rounded-md px-1.5 py-0.5 border-main bg-main/10 text-main border">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <ButtonOutline className="border-gray-400 text-gray-400 hover:bg-gray-400/10 w-fit">View Tech</ButtonOutline> */}
              </div>
              <div className="flex-1">
                <div className="aspect-[3/2] w-full rounded-[20px] relative overflow-hidden">
                  <Image
                    fill
                    src={item.image}
                    alt="backend-development"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ButtonCTA />
    </div>
  );
}
