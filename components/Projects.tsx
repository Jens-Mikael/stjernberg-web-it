import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonOutline from "./buttons/ButtonOutline";


export default function Projects() {
  return (
    <div className="px-5 sm:px-10 lg:px-20 xl:px-30 py-20 flex justify-center">
      <div className="flex flex-col gap-10 max-w-[1800px] w-full">
        <h2 className="text-4xl font-bold">Projektit:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 xl:gap-20 w-full">
          {[
            {
              title: "Eskimovillage",
              description:
                "Rakennamme yrityksellesi taloudelliseen hintaan käyttäjäystävälliset ja visuaalisesti näyttävät kotisivut, joiden avulla erotut kilpailijoistasi ja kasvatat liiketoimintaa.",
              icon: Globe,
              image: "/hero-v3.jpg",
            },
            {
              title: "Kotisivut yritykselle",
              description: "Palvelut",
              icon: Globe,
              image: "/hero-v3.jpg",
            },
            {
              title: "Kotisivut yritykselle",
              description: "Palvelut",
              icon: Globe,
              image: "/hero-v3.jpg",
            },
            {
              title: "Kotisivut yritykselle",
              description: "Palvelut",
              icon: Globe,
              image: "/hero-v3.jpg",
            },
          ].map((service, i) => (
            <Link
              href={`/`}
              key={i}
              className="aspect-3/4 sm:aspect-video rounded-[20px] overflow-hidden group relative group-hover:shadow-2xl shadow-xl text-content-light duration-500"
            >
              <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/70 lg:via-black/50 to-black/90 lg:to-black/80 duration-500 lg:group-hover:-translate-y-full transition-all"></div>
              <div className="absolute inset-0 z-[1] bg-black/80 translate-y-[calc(100%-0.5px)] lg:group-hover:-translate-y-[0.5px] duration-500 transition-all"></div>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="w-full h-full object-cover z-0 group-hover:scale-105 transition-all duration-500 "
              />
              <div className="flex flex-col gap-2 lg:gap-5 z-[2] absolute lg:top-[calc(100%-100px)] lg:group-hover:top-0 bottom-0 transition-all p-5 lg:p-10 duration-500">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 group-hover:opacity-100 text-lg lg:opacity-0 transition-all duration-500">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <ButtonOutline className="border-gray-400 text-gray-400 hover:bg-gray-400/10 w-fit">Katso lisää</ButtonOutline>
      </div>

    </div>
  );
}
