import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// The website has no private pages; the admin panel is a separate app with its
// own noindex tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
