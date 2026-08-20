import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "One Stop Analytics for Shopify | SMJ Data & AI Solutions",
  description:
    "Understand Shopify sales, orders, inventory and product performance in one place. Join the One Stop Analytics beta from SMJ Data & AI Solutions.",
  openGraph: {
    title: "One Stop Analytics for Shopify | SMJ Data & AI Solutions",
    description:
      "Understand Shopify sales, orders, inventory and product performance in one place.",
    url: siteUrl,
    siteName: "SMJ Data & AI Solutions",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "One Stop Analytics by SMJ Data & AI Solutions" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
