import { Link } from "@/i18n/navigation";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import GithubIcon from "../svg/github-icon";
import LinkedinIcon from "../svg/linkedin-icon";
import TwitterIcon from "../svg/twitter-icon";
import InstagramIcon from "../svg/icons8-instagram";

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

const socials = [
  {
    icon: <GithubIcon className="size-6" />,
    href: "https://github.com/Jens-Mikael",
  },
  {
    icon: <LinkedinIcon className="size-6 " />,
    href: "https://www.linkedin.com/in/jens-mikael-stjernberg-072938278/",
  },
  {
    icon: <TwitterIcon className="size-6" />,
    href: "https://x.com/jens_stjernberg",
  },
  {
    icon: <InstagramIcon className="size-6" />,
    href: "https://www.instagram.com/jensmikael.stjernberg/",
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
          <div className="flex gap-5">
            {socials.map((social) => (
              <Link
                href={social.href}
                key={social.href}
                target="_blank"
                className="hover:fill-white fill-content-gray transition-all"
              >
                {social.icon}
              </Link>
            ))}
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
