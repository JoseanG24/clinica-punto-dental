"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "¿Cuáles son los servicios que ofrecen?",
    answer: "Ofrecemos servicios de odontología general, ortodoncia, implantes dentales, estética dental y periodoncia.",
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer: "Puedes agendar una cita fácilmente llamando a nuestro número de contacto o utilizando nuestro sistema en línea disponible en la página de contacto.",
  },
  {
    question: "¿Aceptan seguros dentales?",
    answer: "Sí, aceptamos la mayoría de los seguros dentales. Te recomendamos que nos contactes para confirmar la cobertura de tu plan.",
  },
  {
    question: "¿Cuánto dura un tratamiento de ortodoncia?",
    answer: "El tiempo del tratamiento varía según el caso del paciente, pero en promedio puede durar entre 12 y 24 meses.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    // Animación con GSAP cuando las preguntas entran en la vista
    gsap.fromTo(
      ".faq-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".faq-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="faq-section py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Preguntas Frecuentes</h2>

        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="faq-item mb-6 border-b border-gray-300 pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Pregunta */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>

            {/* Respuesta con Framer Motion */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden mt-2"
            >
              <p className="text-gray-600">{item.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
