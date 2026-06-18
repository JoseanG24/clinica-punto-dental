"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const specialties = [
  "Odontología General",
  "Estética Dental",
  "Prótesis y Rehabilitación",
];

// Replace these with actual photos of the doctor's work
const workPhotos = ["/images/clinica/dr2.png", "/images/clinica/dr4.png"];

export default function Doctor() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % workPhotos.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Info column */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#2563EB] text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
            >
              Nuestro Especialista
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, ease }}
              className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#0F2044] leading-[1.1] mb-4"
            >
              Dr. Ervin
              <br />
              Guzmán Morales
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {specialties.map((s) => (
                <span
                  key={s}
                  className="bg-white border border-[#E5E7EB] text-[#374151] text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.26 }}
              className="text-[#6B7280] text-base leading-relaxed max-w-105 mb-10"
            >
              Con más de 20 años de trayectoria, el Dr. Guzmán Morales combina
              técnica de alto nivel con un trato cercano y personalizado,
              ofreciendo soluciones integrales para recuperar y transformar tu
              sonrisa.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32 }}
              href="https://wa.me/50252084159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0F2044] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#1a3a6e] transition-colors"
            >
              Agendar con el Dr. Guzmán
            </motion.a>
          </div>

          {/* Work photos slider column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-3"
          >
            <div className="relative aspect-4/3 lg:aspect-auto lg:h-120 rounded-2xl overflow-hidden bg-[#E5E7EB]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={workPhotos[current]}
                  alt={`Trabajo del Dr. Guzmán Morales ${current + 1}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                <motion.div
                  key={current}
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                />
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {workPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Foto ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-[12px] text-[#9CA3AF] text-center">
              Galeria de trabajos — Dr. Ervin Guzmán Morales
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
