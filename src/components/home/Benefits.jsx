"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Shield, Heart, Smile } from "lucide-react";
import Wave1 from "@/components/helper/Wave1";

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".benefit-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".benefit-item",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.utils.toArray(".benefit-item").forEach((item) => {
      const icon = item.querySelector(".benefit-icon");

      item.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          rotate: 360,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          rotate: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
      });

      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          backgroundColor: "#dddddd",
          duration: 0.5,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          backgroundColor: "#f7fafc",
          duration: 0.5,
        });
      });
    });
  }, []);

  const benefits = [
    {
      title: "Tecnología Avanzada",
      description:
        "Nos mantenemos al día con los últimos avances en equipos y técnicas dentales para ofrecer resultados confiables en cada tratamiento.",
      icon: <CheckCircle className="benefit-icon w-8 h-8 text-blue-600" />,
    },
    {
      title: "Más de 20 Años de Experiencia",
      description:
        "Nuestra amplia experiencia y constante formación respaldan la excelencia y seguridad que brindamos a cada paciente.",
      icon: <Shield className="benefit-icon w-8 h-8 text-blue-600" />,
    },
    {
      title: "Cuidado Cercano y Personalizado",
      description:
        "Diseñamos planes de tratamiento adaptados a tus necesidades, garantizando una atención especializada y humana.",
      icon: <Heart className="benefit-icon w-8 h-8 text-blue-600" />,
    },
    {
      title: "Entorno Cómodo",
      description:
        "Nuestras instalaciones están pensadas para ofrecer un ambiente relajante y acogedor, cuidando tu bienestar en cada visita.",
      icon: <Smile className="benefit-icon w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="relative bg-white text-gray-900 py-0 pb-20">
      <Wave1 /> {/* Mantiene el wave en la parte superior */}
      <div className="relative container mx-auto px-4 sm:px-6 md:px-10 pt-12">
        <h2 className="text-4xl pr-10 md:pr-0 sm:text-5xl md:text-6xl font-bold text-center text-white mb-12 absolute w-full top-[-290px]">
          También te ofrecemos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-none">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl benefit-item bg-gray-100 border border-gray-300 shadow-lg p-6 flex flex-col text-left transition-transform hover:scale-105 relative"
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="text-xl sm:text-2xl font-semibold ml-3 text-gray-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                {benefit.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-900 rounded-b-xl shadow-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
