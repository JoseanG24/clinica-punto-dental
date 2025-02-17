"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-16 overflow-y-hidden">
      {/* Título con una palabra destacada */}
      <div className="text-left mb-6">
        <h2 className="text-4xl font-bold text-[#05192e]">
          Nuestros <span className="bg-[#1e3a8a] text-white px-2 py-1 rounded-lg">Casos</span> de Éxito
        </h2>
      </div>

      <p className="text-lg text-gray-600 mb-10 text-left">
        Descubre cómo nuestros tratamientos han mejorado la salud bucal y la calidad de vida de nuestros pacientes.
      </p>

      <div className="relative">
        {/* Botones de navegación */}
        <button
          onClick={() => scrollTo("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1e3a8a] text-white p-3 rounded-full shadow-lg z-10 hover:bg-[#17408a] hidden md:block"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollTo("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1e3a8a] text-white p-3 rounded-full shadow-lg z-10 hover:bg-[#17408a] hidden md:block"
        >
          &#8594;
        </button>

        {/* Contenedor scrollable */}
        <motion.div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide"
          whileHover={{ scale: 1.02 }}
        >
          {cases.map((caso, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg shadow-md p-6"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Image
                src={caso.image}
                alt={caso.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-[#1e3a8a]">{caso.title}</h3>
              <p className="text-gray-600 mt-2">{caso.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Datos de ejemplo para los casos
const cases = [
  {
    image: "/images/caso1.jpg",
    title: "Implante Dental Exitoso",
    description: "El paciente recuperó su sonrisa con un implante dental de alta calidad.",
  },
  {
    image: "/images/caso2.jpg",
    title: "Ortodoncia Invisible",
    description: "Tratamiento con alineadores invisibles, ideal para mejorar la alineación dental.",
  },
  {
    image: "/images/caso3.jpg",
    title: "Blanqueamiento Dental",
    description: "Resultados sorprendentes en solo una sesión de blanqueamiento profesional.",
  },
  {
    image: "/images/caso4.jpg",
    title: "Periodoncia Avanzada",
    description: "Tratamiento exitoso de enfermedades periodontales para encías saludables.",
  },
];

export default BlogSection;
