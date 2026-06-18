"use client";

import { motion } from "framer-motion";

const info = [
  {
    label: "Telefono",
    value: "+502 5208 4159",
    sub: "Llama o escribe por WhatsApp",
    href: "tel:+50252084159",
  },
  {
    label: "Correo",
    value: "puntodentalgt@gmail.com",
    sub: "Respondemos en menos de 24h",
    href: "mailto:puntodentalgt@gmail.com",
  },
  {
    label: "Direccion",
    value: "Tecniscan Plaza Minuto, Clinica 6",
    sub: "Km 19.5 Carretera a El Salvador",
    href: "https://maps.google.com/?q=Tecniscan+Plaza+Minuto+Guatemala",
  },
  {
    label: "Horario",
    value: "Lun – Vie 8:30 – 18:00",
    sub: "Sab 9:00 – 12:00 · Dom cerrado",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#0F2044] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#93B4F0] text-[11px] font-bold tracking-[0.22em] uppercase mb-5"
            >
              Contacto
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight mb-6"
            >
              Estamos aqui<br />
              para ayudarte
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm leading-relaxed mb-10 max-w-sm"
            >
              Agenda tu consulta de evaluacion gratuita. Nuestro equipo te orientara
              sobre el mejor plan de tratamiento para ti.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="https://wa.me/50252084159?text=Hola%2C%20quisiera%20informacion%20sobre%20sus%20servicios%20dentales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-7 py-4 rounded-md hover:bg-[#1ebe5d] transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </motion.a>
          </div>

          {/* Right - info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors group h-full"
                  >
                    <p className="text-[11px] font-bold text-[#93B4F0] tracking-[0.18em] uppercase mb-2">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-[15px] mb-1 group-hover:text-[#93B4F0] transition-colors">
                      {item.value}
                    </p>
                    <p className="text-white/40 text-[12px]">{item.sub}</p>
                  </a>
                ) : (
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10 h-full">
                    <p className="text-[11px] font-bold text-[#93B4F0] tracking-[0.18em] uppercase mb-2">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-[15px] mb-1">
                      {item.value}
                    </p>
                    <p className="text-white/40 text-[12px]">{item.sub}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
