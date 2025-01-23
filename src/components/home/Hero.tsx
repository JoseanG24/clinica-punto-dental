"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

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
      <section
        className="md:hidden hero-section pt-44 bg-cover bg-center min-h-screen flex flex-col items-center"
        style={{ backgroundImage: "url('/images/heromobile.jpg')" }}
      >
        <div className="container mx-auto p-5 bg-black bg-opacity-40 text-white text-center max-w-xl shadow-lg">
          <h1 className="text-4xl text-left font-bold mb-4">
            Tu Sonrisa Perfecta Empieza Aquí
          </h1>
          <p className="text-lg mb-6 text-left">
            +20 años cuidando tu sonrisa
          </p>
          <a
            href="https://wa.me/50252084159"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-110 hover:bg-blue-700"
          >
            Agenda tu primera cita
          </a>
        </div>
      </section>

      {/* Sección visible solo en tabletas y escritorios */}
      <section
        className="hidden px-20 md:flex hero-section relative bg-cover bg-center min-h-screen items-center"
        style={{ backgroundImage: "url('/images/fondoprueba1.webp')" }}
      >
        {/* Imagen de fondo con filtro oscuro */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/fondoprueba1.webp')",
              filter: "brightness(0.4)",
            }}
          />
          <div className="absolute inset-0 bg-black opacity-5"></div>
        </div>
        {/* Contenido superpuesto */}
        <div className="container mx-auto p-5 text-gray-800 relative z-10">
          <div className="hero-content max-w-xl">
            <h1 className="text-6xl font-bold mb-4 text-white">
              Tu Sonrisa Perfecta Empieza Aquí
            </h1>
            <p className="text-xl mb-6 text-gray-200">
              Más de 20 años de experiencia +
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
