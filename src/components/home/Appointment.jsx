"use client";
import React, { useEffect } from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="appointment-title py-4 text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 tracking-wide drop-shadow-md sm:text-5xl md:text-6xl">
          Agenda tu Cita
        </h2>
        <p className="appointment-description text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Estamos listos para atenderte. Agenda tu cita fácilmente por
          teléfono o WhatsApp y comienza el camino hacia una sonrisa perfecta.
        </p>

        {/* Botones */}
        <div className="appointment-buttons flex flex-col sm:flex-row justify-center gap-6 items-center">
          {/* Botón para WhatsApp */}
          <DotExpandButton />
          {/* Botón de llamada */}
          <a
            href="tel:+50252084159"
            className="group flex h-18 items-center gap-3 rounded-full bg-blue-600 py-4 px-6 text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
          >
            <FiPhone className="mr-2 text-xl" />
            Llamar al +502 5208-4159
          </a>
        </div>
      </div>
    </section>
  );
};

const DotExpandButton = () => {
  return (
    <a
      href="https://wa.me/50252084159"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-18 items-center gap-3 rounded-full bg-green-500 py-4 px-6 text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105"
    >
      <BsWhatsapp className="text-2xl" />
      Escríbenos por WhatsApp
      <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-2" />
    </a>
  );
};

export default Appointment;
