import type { Metadata } from "next";
import { contact } from "@/data/site";

// Canonical origin for metadata, sitemap and structured data. The bare domain
// redirects here, so it's the address search engines should index.
export const SITE_URL = (process.env.SITE_URL ?? "https://www.purpleworldtours.com").replace(/\/$/, "");
export const SITE_NAME = "Purpleworld Tours";

// Link-preview image for social apps and chat (a 1200×630 crop of the home hero)
export const SHARE_IMAGE = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Purpleworld Tours: wooden boat on a turquoise lake surrounded by mountains",
};

type PageSeo = {
  /** Shown before " | Purpleworld Tours", unless `absoluteTitle` is set */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  /** Path of the page's canonical URL, e.g. "/kerala" */
  path: string;
};

/**
 * Title, description, canonical URL and share tags for a page. Next replaces
 * a layout's `openGraph` instead of merging it, so every page builds its
 * metadata here to keep the shared fields.
 */
export function pageMetadata({ title, absoluteTitle, description, path }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title: fullTitle,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [SHARE_IMAGE] },
  };
}

/** schema.org BreadcrumbList for the same crumbs a page shows in its hero. */
export function breadcrumbSchema(crumbs: { label: string; href?: string }[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href ?? path}`,
    })),
  };
}

/** The business itself, using only details published on the site. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Purple World Tours", "Purpleworldtours"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo-purpleworld.png`,
  image: `${SITE_URL}/images/hero.jpg`,
  description:
    "Kochi-based travel agency crafting customised tour and holiday packages across Kerala, India and Asia since 2013.",
  foundingDate: "2013",
  email: contact.email,
  telephone: `+91${contact.phones[0]}`,
  contactPoint: contact.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: `+91${phone}`,
    contactType: "customer service",
  })),
  address: { "@type": "PostalAddress", ...contact.postalAddress },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Purple World Tours",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};
