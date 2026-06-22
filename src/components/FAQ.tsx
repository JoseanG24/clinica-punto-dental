"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Ofrecen consulta de evaluación gratuita?",
    a: "Sí. La primera consulta de evaluación es completamente gratuita. En esa visita revisamos tu salud bucal y te presentamos un plan de tratamiento personalizado.",
  },
  {
    q: "¿Cuáles son sus horarios de atención?",
    a: "Atendemos de lunes a viernes de 8:30 a 18:00 y los sábados de 9:00 a 12:00. Los domingos permanecemos cerrados.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Nos encontramos en el Km 19.5 de la Carretera a El Salvador, Tecniscan Plaza Minuto, Clínica 6, Guatemala.",
  },
  {
    q: "¿Qué especialidades manejan?",
    a: "Contamos con Odontología General, Ortodoncia, Implantes Dentales, Estética Dental y Periodoncia. Todo bajo un mismo techo.",
  },
  {
    q: "¿Atienden emergencias dentales?",
    a: "Sí. Si tienes un dolor agudo, fractura o cualquier urgencia dental, escríbenos por WhatsApp al +502 5208 4159 y te atendemos a la brevedad, incluso fuera del horario regular.",
  },
  {
    q: "¿Cómo puedo agendar una cita?",
    a: "Puedes contactarnos directamente por WhatsApp al +502 5208 4159. Te respondemos a la brevedad.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-[#E5E7EB]"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span
          className={`text-2xl font-semibold transition-colors ${
            open ? "text-[#2563EB]" : "text-[#0F2044] group-hover:text-[#2563EB]"
          }`}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className={`shrink-0 w-5 h-5 flex items-center justify-center text-lg leading-none font-light transition-colors ${
            open ? "text-[#2563EB]" : "text-[#9CA3AF]"
          }`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-md text-[#6B7280] leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          <div className="lg:sticky lg:top-28 self-start">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#2563EB] text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
            >
              Preguntas Frecuentes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#0F2044] leading-tight mb-6"
            >
              Respondemos<br />
              tus dudas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#6B7280] text-sm leading-relaxed mb-3"
            >
              Si tienes alguna otra consulta, no dudes en escribirnos directamente.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-[#9CA3AF] text-xs mb-8"
            >
              Actualizado: junio 2026
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="https://wa.me/50252084159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#0F2044] text-[#0F2044] text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#0F2044] hover:text-white transition-colors"
            >
              Escribir por WhatsApp
            </motion.a>
          </div>

          <div>
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
