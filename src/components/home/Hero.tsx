"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      {/* Sección visible solo en móviles */}
      <section className="md:hidden hero-section pt-44 bg-white flex flex-col items-center min-h-screen">
        <div className="container mx-auto p-5">
         
          <div className="text-gray-800 hero-content text-center max-w-xl">
            <h1 className="text-4xl text-left font-bold mb-4">
              Tu Sonrisa Perfecta Empieza Aquí
            </h1>
            <Image
            src="/images/fondoprueba1.webp" // Asegúrate de que la ruta a la imagen es correcta
            alt="Imagen Hero"
            width={600} // Aumentado el tamaño de la imagen
            height={400}
            className="rounded-xl shadow-lg mb-4"
          />
            <p className="text-lg mb-6">
              Expertos en salud bucal utilizando tecnología de vanguardia para crear sonrisas que duran toda la vida.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-110 hover:bg-blue-700"
            >
              Agenda tu primera consulta gratis hoy
            </a>
          </div>
        </div>
      </section>

      {/* Sección visible solo en tabletas y escritorios */}
      <section className="hidden md:flex hero-section bg-[url('/images/fondoprueba1.webp')] bg-cover bg-center min-h-screen items-center">
        <div className="container mx-auto p-5 text-gray-800">
          <div className="hero-content max-w-xl">
            <h1 className="text-6xl font-bold mb-4">
              Tu Sonrisa Perfecta Empieza Aquí
            </h1>
            <p className="text-xl mb-6">
              Expertos en salud bucal utilizando tecnología de vanguardia para crear sonrisas que duran toda la vida.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-xl bg-blue-500 text-white font-bold shadow-lg transition-transform hover:scale-110 hover:bg-blue-700"
            >
              Agenda tu primera consulta gratis hoy
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
