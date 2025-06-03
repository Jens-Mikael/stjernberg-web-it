import { Link } from "@/i18n/navigation";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

const nav = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "services",
    href: "/#services",
  },
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "contact",
    href: "/contact",
  },
];

export default function Footer() {
  const footerT = useTranslations("footer");
  const navbarT = useTranslations("navbar");
  return (
    <div className="w-full bg-base-dark text-content-gray gap-5 px-5 sm:px-10 pb-5 pt-10 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row gap-5 max-w-[1800px] w-full">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-content-light">
            Stjernberg Web and IT Services
          </h2>
          <div className="text-lg">
            <p>{footerT("VAT-ID")}</p>
            <p>{footerT("address")}</p>
            <Link
              href="mailto:stjernberg.web.it@gmail.com"
              className="flex items-center gap-2  hover:underline transition-all text-blue-400"
            >
              <Mail strokeWidth={2.5} className="h-5 w-5 text-main" />
              stjernberg.web.it@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <h5 className="text-lg sm:text-xl font-bold text-content-light uppercase">
            {footerT("navigation")}
          </h5>
          <ul className="flex flex-col gap-1">
            {nav.map((nav) => (
              <li key={nav.key}>
                <Link href={nav.href} className="hover:underline">
                  {navbarT(nav.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 space-y-2">
          <h5 className="text-lg sm:text-xl font-bold text-content-light uppercase">
            {navbarT("services")}
          </h5>
          <ul className="flex flex-col gap-1">
            {[
              "web-pages",
              "software-development",
              // "cloud-integration",
              // "ai-solutions",
            ].map((service) => (
              <li key={service}>
                <Link href={`/services/${service}`} className="hover:underline">
                  {navbarT(`services-nav.${service}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full border-b border-gray-400 max-w-[1800px]" />
      <p className="text-center">
        © {new Date().getFullYear()} Stjernberg Web and IT Services. All rights
        reserved.
      </p>
    </div>
  );
}
