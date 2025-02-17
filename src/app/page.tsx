import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script"; // Importa el componente Script
import React from "react";

// Cargar inmediatamente
import HeroSection from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import ServicesSection from "@/components/home/Services";
import BenefitsSection from "@/components/home/Benefits";
// import BlogSection from "@/components/home/BlogSection";

// Carga diferida para componentes que no son críticos
const Appointment = dynamic(() => import("@/components/home/Appointment"), {
  ssr: false,
});
// const Gallery = dynamic(() => import("@/components/home/Gallery"), { ssr: false });
const Personal = dynamic(() => import("@/components/home/Gallery"), {
  ssr: false,
});
const FAQSection = dynamic(() => import("@/components/home/FAQ"), {
  ssr: false,
});

const HomePage = () => {
  // Datos estructurados para la clínica dental
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Clínica Punto Dental",
    dateModified: "2025-02-05",
    image: "https://puntodentalguate.com/images/imgclinica1.png",
    description:
      "Clínica dental en Carretera a El Salvador que ofrece servicios de odontología general, ortodoncia, implantes dentales y estética dental en Guatemala.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Km 19.5, Fraijanes, Plaza Minuto Carretera a El Salvador",
      addressLocality: "Ciudad de Guatemala",
      addressRegion: "Guatemala",
      postalCode: "01010",
      addressCountry: "GT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 14.6349,
      longitude: -90.5069,
    },
    telephone: "+502 5208 4159",
    email: "puntodentalgt@gmail.com",
    url: "https://puntodentalguate.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    service: [
      {
        "@type": "Service",
        name: "Odontología General",
      },
      {
        "@type": "Service",
        name: "Ortodoncia",
      },
      {
        "@type": "Service",
        name: "Implantes Dentales",
      },
      {
        "@type": "Service",
        name: "Estética Dental",
      },
      {
        "@type": "Service",
        name: "Periodoncia",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Clínica Punto Dental - Tu Dentista en Carretera a El Salvador,
          Guatemala
        </title>
        <meta
          name="description"
          content="Clínica dental en Carretera a El Salvador que ofrece servicios de odontología general, ortodoncia, implantes dentales y estética dental en Guatemala."
        />
        <meta
          name="keywords"
          content="Dentista Carretera a El Salvador, Clínica dental Guatemala, Odontología, Ortodoncia, Implantes Dentales"
        />
        <meta
          property="og:title"
          content="Clínica Punto Dental - Dentista en Carretera a El Salvador"
        />
        <meta
          property="og:description"
          content="Ofrecemos servicios dentales como odontología general, ortodoncia, estética dental e implantes en Carretera a El Salvador, Guatemala."
        />
        <meta property="og:url" content="https://puntodentalguate.com" />
        <meta
          property="og:image"
          content="https://puntodentalguate/logos/iconlogo.jpg"
        />
      </Head>

      {/* Agrega el Schema aquí */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />

      <div className="p-0 m-0 overflow-x-hidden md:overflow-x-visible">
        {/* Estos componentes se cargan inmediatamente */}
        <HeroSection />
        <div id="nosotros" aria-label="acerca de nosotros"></div>
        <AboutSection />
        <div id="servicios" aria-label="nuestros servicios"></div>
        <ServicesSection />
        {/* <WorksSection /> */}
        <BenefitsSection />

        {/* Estos componentes se cargan diferidos para mejorar el rendimiento */}
        <div id="cita" aria-label="agendar una cita">
          <Appointment />
        </div>
        {/* <Gallery /> */}
        <Personal />
        {/* <BlogSection /> */}
        <div id="preguntas" aria-label="preguntas frecuentes"></div>
        <FAQSection />
        <div id="contacto"></div>
      </div>
    </>
  );
};

export default HomePage;
