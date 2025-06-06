import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "fi", "sv"];
  const pages = [
    {
      url: "/",
      priority: 0.9,
    },
    {
      url: "/services/web-pages",
      priority: 1,
    },
    {
      url: "/services/software-development",
      priority: 1,
    },
    {
      url: "/projects",
      priority: 0.6,
    },
    {
      url: "/contact",
      priority: 0.6,
    },
  ];

  const sitemap = locales
    .map((locale) =>
      pages.map((page) => ({
        url: `${process.env.NEXT_PUBLIC_APP_URL}/${locale}${page.url}`,
        lastModified: new Date(),
        priority: page.priority,
        changeFrequency: "weekly" as const,
      }))
    )
    .flat();

  return sitemap;
}
