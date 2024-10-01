import HeroSection from "@/components/home/Hero";
import AboutSection from "@/components/home/About";
import Head from "next/head";

const HomePage = () => {
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
        <meta property="og:url" content="https://tudominio.com" />
        <meta
          property="og:image"
          content="https://tudominio.com/imagen-clinica.jpg"
        />
      </Head>

      <div>
        <HeroSection />
        <div id="nosotros">
          <AboutSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
