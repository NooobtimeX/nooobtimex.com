import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout"; // Import the client layout
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Wongsaphat Puangsorn",
  abstract:
    "Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  description:
    "Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  keywords:
    "Wongsaphat Puangsorn, NooobtimeX, Thammasat University, Software Developer, Thailand, Portfolio, Resume",
  icons: "/favicon.ico",
  robots: "index, follow",
  verification: {
    google: "KiAn5R5UAuZgmwSS_KpMOO2FIRmt-39QIKrHKXrAOL8",
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
        <link rel="canonical" href="https://nooobtimex.me/" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
