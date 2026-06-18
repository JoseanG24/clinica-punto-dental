"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.07)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-17 sm:h-18">

          {/* Logo oficial */}
          <a href="#inicio" className="shrink-0">
            <Image
              src="/logos/puntodentallogo.webp"
              alt="Punto Dental"
              width={200}
              height={56}
              className="h-9 sm:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-[#4B5563] hover:text-[#0F2044] transition-colors tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/50252084159"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold border border-[#0F2044] text-[#0F2044] px-5 py-2 rounded-md hover:bg-[#0F2044] hover:text-white transition-colors tracking-wide whitespace-nowrap"
            >
              Agenda tu cita
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.25 w-8 h-8 shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#0F2044] transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-1.75" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0F2044] transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#0F2044] transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-1.75" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-[#4B5563] hover:text-[#0F2044] transition-colors py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/50252084159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold border border-[#0F2044] text-[#0F2044] px-5 py-2.5 rounded-md text-center hover:bg-[#0F2044] hover:text-white transition-colors mt-1"
              >
                Agenda tu cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
