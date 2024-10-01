import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "@/components/home/Footer";
import Navbar from "@/components/helper/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clínica Punto Dental - Dentista en Carretera a El Salvador",
  description: "Clínica dental en Carretera a El Salvador. Ofrecemos servicios de odontología general, ortodoncia, implantes dentales, estética dental y periodoncia en Guatemala.",
  keywords: "Dentista Carretera a El Salvador, Dentista Guatemala, Clínica dental Carretera a El Salvador, Clínica dental Guatemala",
  openGraph: {
    title: "Clínica Punto Dental - Dentista en Carretera a El Salvador",
    description: "Clínica dental en Carretera a El Salvador que ofrece servicios de odontología general, ortodoncia, implantes dentales, estética dental y periodoncia.",
    url: "https://tudominio.com", // Reemplaza con tu dominio real
    siteName: "Clínica Punto Dental",
    images: [
      {
        url: "https://tudominio.com/imagen-clinica.jpg", // Imagen destacada para compartir en redes
        width: 800,
        height: 600,
        alt: "Clínica Punto Dental en Carretera a El Salvador",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Clínica Punto Dental - Dentista en Carretera a El Salvador",
  //   description: "Clínica dental en Carretera a El Salvador que ofrece odontología general, ortodoncia, implantes dentales, y estética dental.",
  //   image: "https://tudominio.com/imagen-clinica.jpg", // Imagen para Twitter Cards
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
