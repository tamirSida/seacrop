import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garet = localFont({
  src: [
    {
      path: "../public/fonts/Garet-Book.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-garet",
});

export const metadata: Metadata = {
  title: "SeaCrop | Small Particles. Global Impact.",
  description: "Creating access to marine microbial plankton as an unlimited resource for life on Earth. Transforming ocean health, feeding communities, and restoring ecological balance.",
  keywords: "SeaCrop, phytoplankton, marine agriculture, sustainable nutrition, ocean restoration, food security, biotechnology, marine microbial plankton, sustainable food production, ocean technology",
  authors: [{ name: "SeaCrop" }],
  creator: "SeaCrop",
  publisher: "SeaCrop",
  robots: "index, follow",
  openGraph: {
    title: "SeaCrop | Small Particles. Global Impact.",
    description: "Creating access to marine microbial plankton as an unlimited resource for life on Earth. Transforming ocean health, feeding communities, and restoring ecological balance.",
    url: "https://seacrop.co",
    siteName: "SeaCrop",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/context.jpg",
        width: 1200,
        height: 630,
        alt: "SeaCrop - Ocean technology for sustainable nutrition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SeaCrop | Small Particles. Global Impact.",
    description: "Creating access to marine microbial plankton as an unlimited resource for life on Earth.",
    images: ["/images/context.jpg"],
  },
  metadataBase: new URL("https://seacrop.co"),
  alternates: {
    canonical: "https://seacrop.co",
  },
  verification: {
    google: "",
  },
  other: {
    "theme-color": "#002E11",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${inter.variable} ${garet.variable} font-garet antialiased bg-seacrop-dark`}
      >
        {children}
      </body>
    </html>
  );
}
