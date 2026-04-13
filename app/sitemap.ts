import type { MetadataRoute } from "next";

const siteUrl = "https://www.lesclesvibratoires.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/numerologie`,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/soins-energetiques`,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tarologie`,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/accompagnement`,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/a-propos`,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/cgv`,
      lastModified: new Date("2025-04-13"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
