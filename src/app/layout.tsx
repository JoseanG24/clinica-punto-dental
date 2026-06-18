import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Punto Dental | Clínica Dental Guatemala",
  description:
    "Clínica dental especializada en Ortodoncia, Implantes y Estética Dental con más de 20 años de experiencia en Guatemala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} scroll-smooth`}>
      <body className="min-h-full bg-white text-[#111827] antialiased">{children}</body>
    </html>
  );
}
