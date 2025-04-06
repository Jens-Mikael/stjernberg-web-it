import { Mail } from "lucide-react";
import Link from "next/link";

const navs = [
  {
    label: "Koti",
    href: "/",
  },
  {
    label: "Palvelut",
    href: "/",
  },
  {
    label: "Projektit",
    href: "/",
  },
  {
    label: "Yhteistiedot",
    href: "/",
  },
];

const services = [
  {
    label: "Kotisivut yrityksille",
    href: "/",
  },
  {
    label: "Frontend- ja backend-kehitys",
    href: "/",
  },
  {
    label: "Pilvi-integraatiot",
    href: "/",
  },
  {
    label: "Tekoälyratkaisut",
    href: "/",
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-base-dark text-content-gray gap-5 px-10 pb-5 pt-10 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row gap-5 max-w-[1800px] w-full">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-content-light">
            Stjernberg Web and IT Services
          </h2>
          <div className="text-lg">
            <p>3469579-5</p>
            <p>Käpylänkatu 3 as 1, 28120 Pori, Finland</p>
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
            Navigointi
          </h5>
          <ul className="flex flex-col gap-1">
            {navs.map((nav) => (
              <li key={nav.label}>
                <Link href={nav.href} className="hover:underline">{nav.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 space-y-2">
          <h5 className="text-lg sm:text-xl font-bold text-content-light uppercase">
            Palvelut
          </h5>
          <ul className="flex flex-col gap-1">
            {services.map((service) => (
              <li key={service.label}>
                <Link href={service.href} className="hover:underline">{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full border-b border-gray-400 max-w-[1800px]" />
      <p className="text-center">
      © {new Date().getFullYear()} Stjernberg Web and IT Services. All
        rights reserved.
      </p>
    </div>
  );
}
