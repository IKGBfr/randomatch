import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/legal/mentions",
          "/legal/terms",
          "/legal/privacy",
          "/legal/cookies",
        ],
      },
    ],
    sitemap: "https://www.randomatch.fr/sitemap.xml",
  };
}
