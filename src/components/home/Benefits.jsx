"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Shield, Heart, Smile } from "lucide-react";
import Wave1 from "@/components/helper/Wave1";

// Registra el plugin ScrollTrigger
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
      title: "Tecnología de vanguardia",
      description:
        "Utilizamos los últimos avances en tecnología dental para garantizar tratamientos de la más alta calidad.",
      icon: <CheckCircle className="benefit-icon w-8 h-8 text-blue-600" />,
    },
    {
      title: "Profesionales experimentados",
      description:
        "Nuestro equipo está compuesto por dentistas altamente calificados con años de experiencia en el campo.",
      icon: <Shield className="benefit-icon w-8 h-8 text-blue-600" />,
    },
    {
      title: "Atención personalizada",
      description:
        "Cada paciente es único, por lo que ofrecemos un enfoque personalizado para cada tratamiento.",
      icon: <Heart className="benefit-icon w-8 h-8 text-blue-600" />,
    },
    {
      title: "Ambiente cómodo",
      description:
        "Nuestras instalaciones están diseñadas para ofrecer un ambiente relajante y cómodo.",
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
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-900 rounded-b-xl shadow-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
