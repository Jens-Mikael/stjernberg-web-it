import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "fi", "sv"];
  const pages = [
    {
      url: "/",
      priority: 1,
    },
    {
      url: "/services/web-pages",
      priority: 0.9,
    },
    {
      url: "/projects",
      priority: 0.8,
    },
    {
      url: "/contact",
      priority: 0.8,
    },
  ];

  const sitemap = locales.map((locale) =>
    pages.map((page) => ({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/${locale}${page.url}`,
      lastModified: new Date(),
      priority: page.priority,
      changeFrequency: "weekly" as const,
    }))
  ).flat();

  return sitemap;
}
