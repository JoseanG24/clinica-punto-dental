import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/helper/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// Metadata para SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://puntodentalguate.com"),
  keywords: [
    "Clínica dental",
    "Clínica dental Carretera a El Salvador",
    "Dentista Carretera a El Salvador",
    "Clínica dental Guatemala",
    "Odontología en Guatemala",
    "Ortodoncia Guatemala",
    "Implantes dentales Guatemala",
    "Estética dental Guatemala",
    "Periodoncia Guatemala",
  ],
  title: {
    default: "Clínica Punto Dental - Dentista en Carretera a El Salvador",
    template: `%s | Clínica Punto Dental`,
  },
  description:
    "Clínica dental en Carretera a El Salvador. Ofrecemos servicios de odontología general, ortodoncia, implantes dentales, estética dental y periodoncia.",
  openGraph: {
    title: "Clínica Punto Dental - Dentista en Carretera a El Salvador",
    description:
      "Clínica dental en Carretera a El Salvador que ofrece servicios de odontología general, ortodoncia, implantes dentales, estética dental y periodoncia.",
    url: "https://puntodentalguate.com",
    siteName: "Clínica Punto Dental",
    images: [
      {
        url: "https://puntodentalguate.com/iconlogo.jpg",
        width: 800,
        height: 600,
        alt: "Clínica Punto Dental en Carretera a El Salvador",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Punto Dental - Dentista en Carretera a El Salvador",
    description:
      "Clínica dental en Carretera a El Salvador que ofrece odontología general, ortodoncia, implantes dentales, y estética dental.",
    images: ["https://puntodentalguate.com/iconlogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
