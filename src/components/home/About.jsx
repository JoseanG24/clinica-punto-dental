"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
// Iconos
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-description",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-info",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-info",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".about-image",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="relative bg-[#05192e] text-[#f3f3f3] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-4 md:px-0">
        {/* Mapa para todas las pantallas */}
        <div className="w-full md:ml-20 md:w-1/2 md:sticky md:top-44 h-96 mb-12">
          <h2 className="font-bold text-lg bg-[#1e3a8a] text-white px-4 py-2 mb-2 rounded-md inline-block">
            Ubicación
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.242577978288!2d-90.46880928808582!3d14.522055803759368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a568a87d0163%3A0x14597b98274de022!2sMinuto%20Carretera%20a%20El%20Salvador!5e1!3m2!1ses-419!2sgt!4v1737937632620!5m2!1ses-419!2sgt"
            className="w-full h-full rounded-lg shadow-lg"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          {/* Dirección textual para SEO */}
          <address className="mt-4 text-base md:text-lg flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-300" />
            <span>
              Km 19.5 Carretera a El Salvador, Tecniscan Plaza Minuto, Clínica 6
            </span>
          </address>
        </div>

        {/* Información de la Clínica */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10 md:pr-7 py-10 rounded-lg shadow-lg">
          <h2 className="about-title text-3xl md:text-4xl font-bold mb-4 bg-[#1e3a8a] text-white px-4 py-2 inline-block rounded-md">
            Conócenos
          </h2>
          <div className="mb-10 mt-1 w-full">
            <Image
              src="/images/imgclinica1.png"
              alt="Clínica Punto Dental"
              width={900}
              height={900}
              className="about-image rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
          <p className="about-description text-base md:text-lg mb-6">
            Con más de 20 años de experiencia, enfocamos nuestra práctica en
            brindar tratamientos odontológicos avanzados y un trato cercano,
            siempre priorizando la comodidad y satisfacción de nuestros
            pacientes. Nuestro equipo se mantiene en constante actualización a
            través de cursos y programas especializados para ofrecer aún más
            servicios con la más alta calidad. Nuestro compromiso es mejorar tu
            salud bucal y brindarte la mejor experiencia posible.{' '}
            <Link href="/#servicios">
              <button className="text-blue-300 hover:underline">
                Conoce nuestros servicios
              </button>
            </Link>
            .
          </p>
          <div className="about-info space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold bg-[#1e3a8a] text-white px-4 py-2 inline-block rounded-md">
              Nuestros Servicios
            </h3>
            <ul className="list-disc list-inside mb-4 text-base md:text-lg">
              <li>Odontología General</li>
              <li>Ortodoncia</li>
              <li>Implantes Dentales</li>
              <li>Estética Dental</li>
              <li>Periodoncia</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-semibold bg-[#1e3a8a] text-white px-4 py-2 inline-block rounded-md items-center gap-2">
              Contacto
            </h3>
            <p className="text-base md:text-lg flex items-center gap-2">
              <FaPhoneAlt />
              <strong>Teléfono:</strong> +502 5208 4159
            </p>
            <p className="text-base md:text-lg flex items-center gap-2">
              <FaEnvelope />
              <strong>Email:</strong> puntodentalgt@gmail.com
            </p>

            <p className="text-base md:text-lg font-semibold flex items-center gap-2">
              <FaClock />{' '}
              <Link href="/#cita">
                <button className="text-blue-300 hover:underline">
                  Lunes a Viernes: 8:30 AM - 6:00 PM
                </button>
              </Link>
            </p>
            <p className="text-base md:text-lg font-semibold flex items-center gap-2">
              <FaClock /> Sábado: 9:00 AM - 12:00 PM
            </p>
            <p className="text-base md:text-lg font-semibold flex items-center gap-2">
              <FaClock /> Domingo: Cerrado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;