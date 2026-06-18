"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "María González",
    role: "Paciente — Ortodoncia",
    avatar: "MG",
    color: "#3B7BF6",
    text: "Llevaba años con inseguridad por mi sonrisa. En Punto Dental me trataron con tanta paciencia y profesionalismo que el proceso de ortodoncia fue mejor de lo que esperaba. ¡Mi sonrisa cambió totalmente!",
    rating: 5,
  },
  {
    name: "Carlos Méndez",
    role: "Paciente — Implantes",
    avatar: "CM",
    color: "#059669",
    text: "Me puse dos implantes y quedé encantado con los resultados. El Dr. me explicó todo el proceso paso a paso, sin sorpresas. La recuperación fue rápida y los implantes se ven completamente naturales.",
    rating: 5,
  },
  {
    name: "Ana Sofía Ruiz",
    role: "Paciente — Estética Dental",
    avatar: "AR",
    color: "#8B5CF6",
    text: "El blanqueamiento y las carillas que me hicieron superaron mis expectativas. El personal es muy amable, el consultorio limpio y moderno. Definitivamente la mejor clínica dental de Guatemala.",
    rating: 5,
  },
  {
    name: "Roberto Fuentes",
    role: "Paciente — Familia completa",
    avatar: "RF",
    color: "#F59E0B",
    text: "Llevo a toda mi familia a Punto Dental. Los niños que normalmente tienen miedo al dentista se sienten muy cómodos. Excelente atención, precios justos y resultados increíbles.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        cardsRef.current?.querySelectorAll(".testimonial-card") ?? [],
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <span className="inline-block text-[#3B7BF6] text-sm font-bold tracking-widest uppercase mb-4">
            — Lo que dicen nuestros pacientes —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a2744] mb-5 leading-tight">
            Historias de
            <span className="block text-gradient">Sonrisas Transformadas</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Miles de pacientes confían en nosotros. Estas son sus experiencias.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card group bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-[#F59E0B]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <svg
                className="w-8 h-8 mb-3 flex-shrink-0"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10 8C6.686 8 4 10.686 4 14s2.686 6 6 6v6l6-8c0-3.314-2.686-6-6-6zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6v6l6-8c0-3.314-2.686-6-6-6z"
                  fill={t.color}
                  opacity="0.25"
                />
              </svg>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#1a2744] text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 py-8 bg-[#F8FAFC] rounded-2xl border border-slate-100">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#1a2744]">4.9</div>
            <div className="flex justify-center gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-[#F59E0B]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm text-slate-500 mt-1">Calificación promedio</div>
          </div>
          <div className="w-px h-16 bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#1a2744]">500+</div>
            <div className="text-sm text-slate-500 mt-2">Reseñas verificadas</div>
          </div>
          <div className="w-px h-16 bg-slate-200 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#1a2744]">98%</div>
            <div className="text-sm text-slate-500 mt-2">Pacientes satisfechos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
