import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Doctor from "@/components/Doctor";
import InstagramFeed from "@/components/InstagramFeed";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Doctor />
        <InstagramFeed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
