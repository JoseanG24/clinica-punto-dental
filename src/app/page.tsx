import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

// Cargar inmediatamente
import HeroSection from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import ServicesSection from "@/components/home/Services";
import BenefitsSection from "@/components/home/Benefits";

// Carga diferida para componentes que no son críticos
const Appointment = dynamic(() => import("@/components/home/Appointment"), { ssr: false });
// const Gallery = dynamic(() => import("@/components/home/Gallery"), { ssr: false });
const Personal = dynamic(() => import("@/components/home/Personal"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/home/FAQ"), { ssr: false });

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Clínica Punto Dental - Tu Dentista en Carretera a El Salvador, Guatemala</title>
        <meta
          name="description"
          content="Clínica dental en Carretera a El Salvador que ofrece servicios de odontología general, ortodoncia, implantes dentales y estética dental en Guatemala."
        />
        <meta
          name="keywords"
          content="Dentista Carretera a El Salvador, Clínica dental Guatemala, Odontología, Ortodoncia, Implantes Dentales"
        />
        <meta property="og:title" content="Clínica Punto Dental - Dentista en Carretera a El Salvador" />
        <meta
          property="og:description"
          content="Ofrecemos servicios dentales como odontología general, ortodoncia, estética dental e implantes en Carretera a El Salvador, Guatemala."
        />
        <meta property="og:url" content="https://tudominio.com" />
        <meta property="og:image" content="https://tudominio.com/imagen-clinica.jpg" />
      </Head>

      <div className="p-0 m-0 overflow-x-hidden md:overflow-x-visible">
        {/* Estos componentes se cargan inmediatamente */}
        <HeroSection />
        <div id="nosotros"></div>
        <AboutSection />
        <div id="servicios"></div>
        <ServicesSection />
        <BenefitsSection />

        {/* Estos componentes se cargan diferidos para mejorar el rendimiento */}
        <div id="cita">
          <Appointment />
        </div>
        {/* <Gallery /> */}
        <Personal />
        <div id="preguntas"></div>
        <FAQSection />
        <div id="contacto"></div>
      </div>
    </>
  );
};

export default HomePage;
