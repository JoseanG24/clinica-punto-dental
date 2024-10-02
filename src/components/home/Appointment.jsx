"use client";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs"; // Icono de WhatsApp
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Appointment = () => {
  useEffect(() => {
    gsap.fromTo(
      ".appointment-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".appointment-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".appointment-description",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".appointment-description",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".appointment-buttons",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".appointment-buttons",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-gray-100 py-36">
      <div className="container mx-auto px-4 text-center">
        <h2 className="appointment-title text-5xl font-bold mb-8 text-blue-950">
          Agenda tu Cita
        </h2>
        <p className="appointment-description font-bold text-center text-xl text-gray-700 mb-4">
          Puedes agendar una cita llamándonos al teléfono o escribiendo por
          WhatsApp.
        </p>

        {/* Botones */}
        <div className="appointment-buttons">
          {/* Botón para WhatsApp */}
          <DotExpandButton />
          {/* Botón de llamada */}
          <button className="appointment-description mt-6 pointer-events-none inline-block text-lg text-white bg-blue-700 rounded-full py-4 px-6 mb-12 transition-transform duration-300 ease-in-out hover:bg-blue-800 hover:scale-105 shadow-lg">
            <strong>Teléfono:</strong> +502 5208-4159
          </button>
        </div>
      </div>
    </section>
  );
};

const DotExpandButton = () => {
  return (
    <div className="grid place-content-center mt-10">
      <a
        href="https://wa.me/50252084159" // Coloca aquí el número de teléfono de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 items-center gap-2 rounded-full bg-green-500 py-8 md:py-auto pl-4 pr-5 text-white transition-all duration-300 ease-in-out hover:bg-green-700"
      >
        <span className="text-lg">
          <BsWhatsapp />
        </span>
        <span>Escríbenos por WhatsApp</span>
        <span className="rounded-full bg-green-500 p-1 text-sm transition-colors duration-300 group-hover:bg-green-500">
          <FiArrowRight className="transition-all duration-300 group-hover:text-lg group-hover:text-white group-active:-rotate-45" />
        </span>
      </a>
    </div>
  );
};

export default Appointment;
