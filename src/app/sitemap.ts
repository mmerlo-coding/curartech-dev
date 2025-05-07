// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.curartech.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
