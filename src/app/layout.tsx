// app/layout.tsx (Next.js 13+)
import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import "animate.css";
// pages/_app.tsx or app/layout.tsx (Next.js 13+)
import "../styles/globals.scss";

const parisienne = Dancing_Script({
  subsets: ["latin"],
  weight: "500", // only 400 is available for this font
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "The Wedding - Fariz & Rika", // Cập nhật tiêu đề chung cho toàn trang
  description: "We invited you to celebrate our wedding!",
  openGraph: {
    url: "https://rikafariz-wedding.vercel.app",
    images: [
      {
        url: "https://rikafariz-wedding.vercel.app/img/web-thumb.jpg",
      },
    ],
    title: "The Wedding - Fariz & Rika",
    description: "We invited you to celebrate our wedding!",
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
