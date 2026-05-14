import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const BASE = "https://www.integratedimpactmodeling.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/methodology", "/in-practice", "/resources"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dateIso),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
