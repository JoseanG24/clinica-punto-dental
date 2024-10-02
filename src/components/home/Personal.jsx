"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DoctorSection = () => {
  useEffect(() => {
    // Animación de la información del doctor con ScrollTrigger
    gsap.fromTo(
      ".doctor-info",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".doctor-info",
          start: "top 80%", // Animación comienza cuando el elemento está al 80% en la vista
        },
      }
    );

    // Animación de la imagen del doctor
    gsap.fromTo(
      ".doctor-image",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ".doctor-image",
          start: "top 80%", // Animación comienza cuando el elemento está al 80% en la vista
        },
      }
    );

    // Animación escalonada para los logros del doctor
    gsap.fromTo(
      ".doctor-achievements li",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".doctor-achievements",
          start: "top 80%", // Comienza la animación cuando los logros están al 80%
        },
      }
    );
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Imagen del Doctor */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <Image
            src="/images/doctor.jpg"
            alt="Dr. Juan Pérez"
            width={500}
            height={500}
            className="doctor-image shadow-xl w-full object-cover"
          />
        </div>

        {/* Información del Doctor */}
        <div className="md:w-1/2 md:pl-10 doctor-info">
          <h2 className="text-5xl font-bold mb-4 text-[#d7d7d7]">
            Dr. Ervin Guzmán
          </h2>
          <p className="text-lg font-semibold mb-2 text-gray-400">
            Especialista en Odontología Estética y Rehabilitación Oral
          </p>

          <p className="text-gray-400 mb-6">
            Con más de 20 años de experiencia, el Dr. Ervin Guzmán se
            especializa en técnicas avanzadas para mejorar la salud y estética
            dental. Su trato cercano y enfoque en los detalles han ayudado a
            mejorar la sonrisa de muchos pacientes.
          </p>

          {/* Logros del Doctor */}
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Logros y Premios:
          </h3>
          <ul className="doctor-achievements space-y-2 mb-6">
            <li className="text-gray-300">
              🏆 Mejor Odontólogo Estético 2020 (Premios Nacionales de Salud)
            </li>
            <li className="text-gray-300">
              🥇 Certificación en Rehabilitación Oral Avanzada (Universidad de
              Barcelona)
            </li>
            <li className="text-gray-300">
              🌟 Más de 1000 casos exitosos de ortodoncia estética
            </li>
            <li className="text-gray-300">
              🎖 Miembro de la Sociedad Internacional de Estética Dental
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
