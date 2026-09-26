import type { Metadata } from "next";
import { Montserrat, Mukta, Sora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
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

export const metadata: Metadata = {
  title: {
    default: "Purpleworldtours | Journeys Designed Specifically For You",
    template: "%s | Purpleworld Tours",
  },
  description:
    "Since 2013, Purpleworldtours has been crafting seamless, bespoke travel experiences. Customized packages, expert curation and 24/7 global support.",
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
