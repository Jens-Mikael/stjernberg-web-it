"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import ButtonOutline from "../buttons/ButtonOutline";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
//import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import ButtonCTA from "../buttons/ButtonCTA";

const languages = [
  {
    label: "Suomeksi",
    href: "fi",
    image: "fi.png",
  },
  {
    label: "På Svenska",
    href: "sv",
    image: "sv.png",
  },
  {
    label: "In English",
    href: "en",
    image: "en.png",
  },
];

const services = [
  {
    key: "web-pages",
    href: "/web-pages",
  },
  {
    key: "software-development",
    href: "/software-development",
  },
  // {
  //   key: "cloud-integration",
  //   href: "/cloud-integration",
  // },
  // {
  //   key: "ai-solutions",
  //   href: "/ai-solutions",
  // },
];

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("navbar");
  const heroOther = useTranslations("hero");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed inset-x top-0 z-10 w-full">
      <nav
        className={`flex justify-center items-center w-full text-content-light px-5 sm:px-10 lg:px-20 xl:px-30 py-3 transition-all duration-300 border-b  ${
          isAtTop
            ? "bg-transparent border-transparent"
            : " border-content-dark bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1800px] w-full flex justify-between items-center">
          <Link
            href="/"
            className="font-bold text-lg leading-[1.2] max-w-[150px]"
          >
            Stjernberg Web and IT Services
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`hover:underline cursor-pointer font-medium ${
                pathname === "/" ? "underline" : ""
              }`}
            >
              {t("home")}
            </Link>
            <ServicesNav />
            <Link
              href="/projects"
              className={`hover:underline cursor-pointer font-medium ${
                pathname === "/projects" ? "underline" : ""
              }`}
            >
              {t("projects")}
            </Link>
            <Link
              href="/contact"
              className={`hover:underline cursor-pointer font-medium ${
                pathname === "/contact" ? "underline" : ""
              }`}
            >
              {t("contact")}
            </Link>

            <LanguageNav />
            <ButtonCTA />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`md:hidden hamburger-button text-white p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-base-light backdrop-blur-md transform transition-transform duration-300 ease-in-out z-20 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-5 pr-7 h-full">
          <button
            className=" self-end"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} className="text-content-dark" />
          </button>
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className=" hover:text-main transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <ServicesNav />
            <Link
              href="/projects"
              className=" hover:text-main transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("projects")}
            </Link>
            <Link
              href="/contact"
              className=" hover:text-main transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <div className="flex flex-col gap-2">
              <ButtonCTA
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              />{" "}
              <Link
                href="/projects"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ButtonOutline className="border-gray-400 text-gray-400 hover:bg-gray-400/10 w-full">
                  {heroOther("projects")}
                </ButtonOutline>
              </Link>
            </div>
            <LanguageNav />
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

const LanguageNav = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="cursor-pointer flex items-center gap-2">
        <div className="aspect-video relative h-5 rounded-md">
          <Image
            src={`/flags/${locale}.png`}
            alt={locale}
            fill
            className="object-cover"
          />
        </div>
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 p-1 w-fit">
        {languages.map((language) => (
          <Link
            key={language.label}
            href={pathname}
            locale={language.href}
            className="flex items-center gap-2 hover:bg-gray-100/50 rounded-md py-2 px-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="aspect-video relative h-5">
              <Image
                src={`/flags/${language.image}`}
                alt={language.label}
                fill
                className="object-cover"
              />
            </div>
            {language.label}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

const ServicesNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const pathname = usePathname();
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="cursor-pointer flex items-center gap-2">
        <p
          className={`text-lg lg:text-base font-medium hover:text-main md:hover:text-white  transition-colors ${
            pathname.includes("/services") ? "underline" : ""
          }`}
        >
          {t("services")}
        </p>
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 p-1 w-fit">
        {services.map((service) => (
          <Link
            key={service.key}
            href={`/services/${service.href}`}
            className={`flex items-center gap-2 hover:bg-gray-100/50 rounded-md py-2 px-3 ${
              pathname.includes(service.href) ? "underline" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {t(`services-nav.${service.key}`)}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};
