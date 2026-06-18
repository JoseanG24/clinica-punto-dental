"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.65, delay, ease },
  };
}

export default function About() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-start">

          {/* Text column */}
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-[#2563EB] text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
            >
              Quienes somos
            </motion.p>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-[#0F2044] leading-[1.1] mb-7"
            >
              Mas de 20 años<br />
              transformando<br />
              sonrisas
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-[440px]"
            >
              Combinamos tecnologia moderna con atencion personalizada para ofrecerte
              el mejor cuidado dental. Cada tratamiento es adaptado a tus necesidades
              especificas y a tu presupuesto.
            </motion.p>

            {/* Info cards */}
            <motion.div {...fadeUp(0.3)} className="space-y-4 mb-10">
              <div className="flex gap-4 items-start p-4 bg-[#F7F8FA] rounded-xl">
                <div className="w-1 shrink-0 self-stretch bg-[#2563EB] rounded-full" />
                <div>
                  <div className="text-lg font-bold text-[#9CA3AF] tracking-[0.18em] uppercase mb-0.5">
                    Ubicacion
                  </div>
                  <div className="text-md text-[#374151] leading-snug">
                    Km 19.5 Carretera a El Salvador, Tecniscan Plaza Minuto, Clinica 6
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-[#F7F8FA] rounded-xl">
                <div className="w-1 shrink-0 self-stretch bg-[#2563EB] rounded-full" />
                <div>
                  <div className="text-lg font-bold text-[#9CA3AF] tracking-[0.18em] uppercase mb-0.5">
                    Horario
                  </div>
                  <div className="text-md text-[#374151] leading-snug">
                    Lunes a Viernes &nbsp;8:30 – 18:00
                    <br />
                    Sabado &nbsp;9:00 – 12:00
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-[#F7F8FA] rounded-xl">
                <div className="w-1 shrink-0 self-stretch bg-[#2563EB] rounded-full" />
                <div>
                  <div className="text-lg font-bold text-[#9CA3AF] tracking-[0.18em] uppercase mb-0.5">
                    Contacto
                  </div>
                  <div className="text-md text-[#374151] leading-snug">
                    +502 5208 4159 &nbsp;&middot;&nbsp; puntodentalgt@gmail.com
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.a
              {...fadeUp(0.4)}
              href="https://wa.me/50252084159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0F2044] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#1a3a6e] transition-colors"
            >
              Escribenos por WhatsApp
            </motion.a>
          </div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-3"
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Tecniscan+Plaza+Minuto+km+19.5+carretera+el+salvador+Guatemala&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion Punto Dental"
              />
            </div>
            <p className="text-[12px] text-[#9CA3AF] text-center">
              Km 19.5 Carretera a El Salvador, Tecniscan Plaza Minuto, Clinica 6
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
