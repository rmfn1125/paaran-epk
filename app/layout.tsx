import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    { path: "./fonts/Pretendard-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Pretendard-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Pretendard-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paaran — EPK",
  description: "Official EPK for the Korean indie band Paaran.",
  openGraph: {
    title: "Paaran — EPK",
    description: "Official EPK for the Korean indie band Paaran.",
    url: "https://paaran-epk.vercel.app",
    siteName: "Paaran EPK",
    images: [
      {
        url: "/epk-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Paaran EPK Preview",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paaran — EPK",
    description: "Official EPK for the Korean indie band Paaran.",
    images: ["/epk-preview.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>
        {children}
      </body>
    </html>
  );
}
