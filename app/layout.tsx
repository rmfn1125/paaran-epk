import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Pretendard 로컬 폰트 (.woff 버전)
const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Paaran — EPK",
  description: "Official EPK for the Korean indie band PAARAN.",
  openGraph: {
    title: "Paaran — EPK",
    description: "Official EPK for the Korean indie band PAARAN.",
    url: "https://paaran-epk.vercel.app",
    siteName: "Paaran EPK",
    images: [
      {
        url: "/epk-preview.jpg", // 너가 넣을 이미지 이름!
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
    description: "Official EPK for the Korean indie band PAARAN.",
    images: ["/epk-preview.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
