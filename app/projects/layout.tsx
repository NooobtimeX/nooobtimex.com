import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Portfolio | Wongsaphat Puangsorn",
  abstract:
    "Projects Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  description:
    "Projects Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  keywords:
    "Wongsaphat Puangsorn, NooobtimeX, Thammasat University, Software Developer, Thailand, Projects Portfolio, Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
