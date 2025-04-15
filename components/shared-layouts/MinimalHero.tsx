"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function MinimalHero({ page }: { page: string }) {
  const [showHeroBackground, setShowHeroBackground] = useState(true);
  const t = useTranslations(`${page}`);

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
      className="flex px-5 sm:px-10 lg:px-20 xl:px-30 relative flex-col items-center overflow-hidden text-content-light pt-30 pb-20"
    >
      <div className="max-w-[1800px] w-full space-y-20 lg:space-y-30 relative">
        <div className="flex flex-col gap-10 w-full">
          {/* MAIN */}
          <div className="flex flex-col gap-5 max-w-[700px]">
            <h1>{t("headline")}</h1>
            <h4>{t("subheadline")}</h4>
            {page === "contact-info-page" && (
              <Link
                href="mailto:stjernberg.web.it@gmail.com"
                className="flex items-center gap-2 text-xl hover:underline transition-all text-blue-400"
              >
                <Mail strokeWidth={2.5} className="h-7 w-7 text-main" />
                stjernberg.web.it@gmail.com
              </Link>
            )}
          </div>
        </div>
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
