"use client";

import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const serviceLinks = [
  "Odontología General",
  "Ortodoncia",
  "Implantes Dentales",
  "Estética Dental",
  "Periodoncia",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#inicio" className="inline-block">
              <div className="bg-white rounded-xl px-5 py-2.5 inline-block">
                <Image
                  src="/logos/puntodentallogo.webp"
                  alt="Punto Dental — Clínica Dental Guatemala"
                  width={160}
                  height={44}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mt-5 max-w-[320px]">
              Más de 20 años transformando sonrisas en Guatemala. Especialistas en
              Ortodoncia, Implantes y Estética Dental.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://wa.me/50252084159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#1ebe5d] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="tel:+50252084159"
                className="text-[13px] font-medium text-white/50 hover:text-white transition-colors"
              >
                +502 5208 4159
              </a>
              <a
                href="https://www.instagram.com/puntodentalguate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-white/50 hover:text-white transition-colors"
              >
                @puntodentalguate
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-5">
              Navegación
            </h4>
            <ul className="space-y-3 mb-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3">
                Correo
              </h4>
              <p className="text-sm text-white/50">puntodentalgt@gmail.com</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>
            &copy; {new Date().getFullYear()} Punto Dental. Todos los derechos reservados.
          </span>
          <span className="flex items-center gap-4">
            <a
              href="/privacidad"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              Política de Privacidad
            </a>
            <span>·</span>
            <a
              href="/terminos"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              Términos y Condiciones
            </a>
            <span className="hidden sm:inline">·</span>
            <span className="text-center sm:text-right">
              Km 19.5 Carretera a El Salvador, Tecniscan Plaza Minuto, Clínica 6 · Guatemala
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
