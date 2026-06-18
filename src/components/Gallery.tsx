"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    src: "/images/clinica/imgclinica1.webp",
    alt: "Consultorio principal Punto Dental",
    cls: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/clinica/dr1.png",
    alt: "Resultado de estética dental",
    cls: "",
  },
  {
    src: "/images/clinica/dr5.jpg",
    alt: "Implante dental de titanio",
    cls: "",
  },
  {
    src: "/images/clinica/clinica1.jpg",
    alt: "Atención dental personalizada",
    cls: "lg:col-span-2",
  },
  // {
  //   src: "https://images.unsplash.com/photo-1606265628745-5def15982dd5?w=700&q=80",
  //   alt: "Ortodoncia moderna",
  //   cls: "",
  // },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".gal-head > *", {
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.75,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gal-head",
          start: "top 87%",
          once: true,
        },
      });

      gsap.set(".gal-item", { opacity: 0, y: 48, scale: 0.97 });

      ScrollTrigger.batch(".gal-item", {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.13,
            duration: 0.95,
            ease: "power4.out",
            overwrite: true,
          });
        },
        start: "top 88%",
        once: true,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="galeria" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="gal-head flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#2563EB] text-[11px] font-bold tracking-[0.22em] uppercase mb-4">
              Galería
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#0F2044] leading-[1.1]">
              Nuestra clínica,<br />
              nuestra pasión
            </h2>
          </div>
          <p className="text-[#6B7280] text-[15px] max-w-[300px] leading-relaxed md:text-right">
            Espacios pensados para tu bienestar, equipados con tecnología de última generación.
          </p>
        </div>

        {/* Bento grid
            Mobile  (1 col): todos apilados, 220 px de alto
            Tablet  (2 col): grid normal sin spans, 250 px de alto
            Desktop (3 col): bento — item 1 ocupa 2×2, item 4 ocupa 2×1
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] sm:auto-rows-[250px] lg:auto-rows-[278px] gap-3 lg:gap-4">
          {items.map((item) => (
            <div
              key={item.alt}
              className={`gal-item group relative rounded-2xl overflow-hidden ${item.cls}`}
            >
              {/* Imagen */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                style={{ backgroundImage: `url('${item.src}')` }}
              />
              {/* Hover darkening */}
              <div className="absolute inset-0 bg-[#0F2044]/0 group-hover:bg-[#0F2044]/30 transition-colors duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
