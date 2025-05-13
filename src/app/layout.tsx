// app/layout.tsx (Next.js 13+)
import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import "animate.css";
// pages/_app.tsx or app/layout.tsx (Next.js 13+)
import "../styles/globals.scss";
import { Metadata as myMetadata } from "@/data/websiteDataInfo";

const parisienne = Dancing_Script({
  subsets: ["latin"],
  weight: "500", // only 400 is available for this font
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: myMetadata.title,
  description: myMetadata.description,
  keywords: myMetadata.keywords,
  authors: [{ name: "Hieu&Phuong" }],
  icons: {
    icon: {
      url: myMetadata.icon.src,
      type: myMetadata.icon.type,
    },
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    title: myMetadata.title,
    description: myMetadata.description,
    url: myMetadata.url,
    type: "website",
    images: [
      {
        url: myMetadata.url + myMetadata.image.src,
        type: myMetadata.image.type,
        width: 100,
        height: 100,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${parisienne.variable} antialiased`}>{children}</body>
    </html>
  );
}
