"use client";

import { motion } from "framer-motion";

const services = [
  {
    name: "Odontologia General",
    desc: "Limpieza, diagnostico y tratamiento preventivo para mantener tu salud bucal en optimas condiciones.",
    image:
      "https://plus.unsplash.com/premium_photo-1674179075488-7bbe91dba99a?w=900&auto=format&fit=crop&q=80",
    span: "lg:col-span-2",
  },
  {
    name: "Ortodoncia",
    desc: "Brackets y alineadores para corregir la posicion de tus dientes y obtener una sonrisa perfectamente alineada.",
    image:
      "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?w=700&auto=format&fit=crop&q=80",
    span: "",
  },
  {
    name: "Implantes Dentales",
    desc: "Restauracion permanente y natural de piezas dentales perdidas con implantes de titanio de alta calidad.",
    image:
      "https://images.unsplash.com/photo-1684607632829-1e5bf4f21dab?w=700&auto=format&fit=crop&q=80",
    span: "",
  },
  {
    name: "Estetica Dental",
    desc: "Blanqueamiento, carillas y tratamientos cosmeticos para transformar tu sonrisa.",
    image:
      "https://plus.unsplash.com/premium_photo-1702598988008-b60cf858cb78?w=700&auto=format&fit=crop&q=80",
    span: "",
  },
  {
    name: "Cirugia Maxilofacial",
    desc: "Extraccion de cordales, cirugia de tejidos blandos y procedimientos quirurgicos avanzados con maxima seguridad y recuperacion rapida.",
    image:
      "https://plus.unsplash.com/premium_photo-1674998805052-23ea88091da2?w=900&auto=format&fit=crop&q=80",
    span: "lg:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#2563EB] text-[11px] font-bold tracking-[0.22em] uppercase mb-4"
            >
              Nuestros Servicios
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#0F2044] leading-tight"
            >
              Especialidades<br />
              que ofrecemos
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://wa.me/50252084159"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-[#2563EB] border-b border-[#2563EB] pb-0.5 hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-colors self-start md:self-auto"
          >
            Consultar disponibilidad
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl overflow-hidden ${s.span} min-h-[280px] md:min-h-[320px]`}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${s.image}')` }}
              />
              {/* Solid dark overlay */}
              <div className="absolute inset-0 bg-[#0F2044]/65 group-hover:bg-[#0F2044]/75 transition-colors duration-300" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-7">
                <h3 className="text-white font-bold text-xl mb-2 leading-snug">
                  {s.name}
                </h3>
                <p className="text-white/65 text-[13.5px] leading-relaxed max-w-[340px]">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
