import type { Metadata } from "next";
import { SiteShell } from "@/components/providers/site-shell";
import { siteConfig } from "@/constants/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "SHABEEHA | Software Engineer",
  description:
    "Premium futuristic portfolio for Shabeeha, a Software Engineer building AI-powered full stack products.",
  keywords: [
    "Shabeeha",
    "Fathima Shabeeha",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "Next.js",
  ],
  authors: [{ name: "Shabeeha" }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  category: "portfolio",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    title: "SHABEEHA | Software Engineer",
    description:
      "Futuristic AI startup-style portfolio with full stack, machine learning, and product engineering focus.",
    type: "website",
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteUrl}/images/profile/profile.svg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHABEEHA | Software Engineer",
    description:
      "Software Engineer specializing in Full Stack Development, AI, Machine Learning, React.js, Node.js, and Modern Web Technologies.",
    images: [`${siteUrl}/images/profile/profile.svg`],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function AppLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
