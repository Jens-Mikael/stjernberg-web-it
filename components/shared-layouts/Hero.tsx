"use client";

import Image from "next/image";
import ButtonOutline from "../buttons/ButtonOutline";
import QuoteIcon from "../svg/QuoteIcon";
import { useEffect, useRef, useState } from "react";
import ButtonCTA from "../buttons/ButtonCTA";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import TrustedBy from "./TrustedBy";

export default function Hero({ page }: { page: string }) {
  const [showHeroBackground, setShowHeroBackground] = useState(true);
  const t = useTranslations(`${page}.hero`);
  const heroOther = useTranslations("hero");
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroScrollHeight = heroRef.current.offsetHeight;
      const currentScroll = window.scrollY;
      setShowHeroBackground(heroScrollHeight > currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex px-5 sm:px-10 lg:px-20 xl:px-30 relative flex-col items-center overflow-hidden text-content-light pt-30 sm:pt-40 pb-10 sm:pb-10"
    >
      <div className="max-w-[1800px] w-full space-y-20 lg:space-y-30 relative">
        <div className="flex flex-col gap-10 w-full">
          {/* QUOTE */}
          <div className="flex gap-2 sm:gap-3 sm:items-center text-gray-200 sm:flex-row flex-col ">
            <QuoteIcon className="md:size-10 size-6 sm:size-8" />
            <div className="space-y-1">
              <p className="italic sm:text-base text-sm lg:text-lg">
                {heroOther("quote")}
              </p>
              <p className="sm:text-sm text-[10px]">
                {heroOther("quote-author")}
              </p>
            </div>
          </div>

          {/* MAIN */}
          <div className="flex flex-col gap-3 sm:gap-5 max-w-[700px]">
            <h1>{t("headline")}</h1>
            <h4>{t("subheadline")}</h4>
            <div className="flex gap-5 sm:mt-0 mt-3">
              <ButtonCTA />{" "}
              <Link href="#projects">
                <ButtonOutline>{heroOther("projects")}</ButtonOutline>
              </Link>
            </div>
          </div>
        </div>
        <TrustedBy />
      </div>

      {showHeroBackground && (
        <>
          <div className="absolute sm:fixed inset-0 -z-20 overflow-hidden transition-opacity duration-300">
            <Image
              src="/hero.jpg"
              alt="Background"
              fill
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
          <div className="absolute sm:fixed inset-0 -z-10 bg-black/70 transition-opacity duration-300" />
        </>
      )}
    </div>
  );
}
