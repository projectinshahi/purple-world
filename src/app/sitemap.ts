import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Packages are listed on /packages and /kerala rather than their own pages,
// and the ?destination= filters canonicalise to /packages, so these are all
// the public pages.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/packages`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/kerala`, changeFrequency: "monthly", priority: 0.9 },
  ];
}
