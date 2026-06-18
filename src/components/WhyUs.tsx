"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "20+",
    label: "anos",
    title: "Experiencia comprobada",
    desc: "Dos decadas atendiendo a miles de pacientes en Guatemala con los mas altos estandares de calidad.",
  },
  {
    number: "5,000+",
    label: "pacientes",
    title: "Comunidad de confianza",
    desc: "Miles de familias guatemaltecas nos han elegido para cuidar su salud dental a lo largo de los años.",
  },
  {
    number: "100%",
    label: "personalizado",
    title: "Atencion a tu medida",
    desc: "Cada plan de tratamiento se disena segun tus necesidades, tiempo y presupuesto. Sin genericos.",
  },
  {
    number: "5",
    label: "especialidades",
    title: "Equipo especializado",
    desc: "Contamos con profesionales en ortodoncia, implantologia, periodoncia y estetica dental.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#0F2044] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#93B4F0] text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
          >
            Por que elegirnos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight max-w-lg"
          >
            Punto Dental, donde cada detalle importa
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0F2044] p-8 flex flex-col gap-4 group hover:bg-[#1a3a6e] transition-colors duration-300"
            >
              <div>
                <span className="text-[3.5rem] font-bold text-white leading-none block">
                  {r.number}
                </span>
                <span className="text-[#93B4F0] text-xs font-semibold tracking-[0.15em] uppercase">
                  {r.label}
                </span>
              </div>
              <div className="w-8 h-[2px] bg-[#2563EB]" />
              <div>
                <h3 className="text-white font-semibold text-base mb-2">{r.title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10"
        >
          <p className="text-white/50 text-sm max-w-md">
            Tecnologia de vanguardia, planes de pago flexibles y horarios que se
            adaptan a tu vida. Todo en un solo lugar.
          </p>
          <a
            href="https://wa.me/50252084159"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#2563EB] text-white text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#1D4ED8] transition-colors"
          >
            Agendar consulta gratuita
          </a>
        </motion.div>

      </div>
    </section>
  );
}
