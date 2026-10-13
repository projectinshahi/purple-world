import type { Metadata } from "next";
import { Montserrat, Mukta, Sora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SHARE_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Only used for the large decorative quote marks on testimonials
const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["latin"],
  weight: "400",
});

// Site-wide defaults. Each page sets its own title, description and canonical
// URL through pageMetadata() in lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Journeys Designed Specifically For You`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Since 2013, Purpleworld Tours has been crafting seamless, customised tour and holiday packages, with expert curation and 24/7 support.",
  applicationName: SITE_NAME,
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_IN", images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", images: [SHARE_IMAGE] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${montserrat.variable} ${mukta.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
