"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/fondohero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-[#0c1a35]/72" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-[72px]">
        <div className="max-w-[600px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#93B4F0] text-xs font-semibold tracking-[0.2em] uppercase mb-8"
          >
            Clinica Dental — Guatemala
          </motion.p>

          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.02] tracking-tight"
            >
              Tu Sonrisa
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.02] tracking-tight"
            >
              Perfecta
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.02] tracking-tight"
            >
              Empieza Aqui
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/60 text-base md:text-lg mb-10 max-w-[420px] leading-relaxed"
          >
            Expertos en Ortodoncia, Implantes y Estetica Dental con mas de 20 anos de
            experiencia en Guatemala.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://wa.me/50252084159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#2563EB] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#1D4ED8] transition-colors text-sm tracking-wide"
            >
              Agenda tu consulta gratuita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-md hover:border-white/60 transition-colors text-sm tracking-wide"
            >
              Ver servicios
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-[22px] h-[34px] rounded-full border border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-[3px] h-[6px] bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
