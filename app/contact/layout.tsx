import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wongsaphat Puangsorn Portfolio | Contact",
  abstract:
    "Contact Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  description:
    "Contact Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  keywords:
    "Wongsaphat Puangsorn, NooobtimeX, Thammasat University, Software Developer, Thailand, Contact Portfolio, Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
