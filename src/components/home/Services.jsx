"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Datos de los servicios
const services = [
  {
    id: "odontologia-general",
    title: "Odontología General",
    description: "Cuidado dental preventivo y tratamientos para mantener tu boca sana.",
    image: "https://plus.unsplash.com/premium_photo-1674179075488-7bbe91dba99a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2RvbnRvbG9naWElMjBnZW5lcmFsfGVufDB8fDB8fHww",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description: "Corrección de maloclusiones y alineación de los dientes para una sonrisa perfecta.",
    image: "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9ydG9kb25jaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "implantes-dentales",
    title: "Implantes Dentales",
    description: "Reemplazo de dientes perdidos con implantes duraderos y de aspecto natural.",
    image: "https://images.unsplash.com/photo-1684607632829-1e5bf4f21dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1wbGFudGVzJTIwZGVudGFsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "estetica-dental",
    title: "Estética Dental",
    description: "Mejora la apariencia de tu sonrisa con tratamientos estéticos personalizados.",
    image: "https://plus.unsplash.com/premium_photo-1702598988008-b60cf858cb78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXN0ZXRpY2ElMjBkZW50YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    description: "Tratamientos especializados para las encías y el soporte de los dientes.",
    image: "https://plus.unsplash.com/premium_photo-1674998805052-23ea88091da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyaWRvbnRpc3R8ZW58MHx8MHx8fDA%3D",
  }
];

const ServicesGrid = () => {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 100 },
        {
          duration: 0.9,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=200",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#05192e] pt-32 pb-80 md:pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-white mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <Link href={`/servicios/${service.id}`} key={service.id} passHref>
              <button
                ref={addToRefs}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-48 bg-center bg-cover" style={{ backgroundImage: `url(${service.image})` }}>
                  {/* Optional overlay for text readability */}
                  <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
