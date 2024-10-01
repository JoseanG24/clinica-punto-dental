"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-[50%] top-6 w-[80%] -translate-x-[50%] flex items-center justify-between gap-6 rounded-xl border-[1px] border-gray-300 bg-gray-100 p-3 text-sm text-gray-700 md:px-8 md:py-4 shadow-md z-50">
      <Logo />

      {/* Hamburguesa para mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-gray-700"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Enlaces en Desktop */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="#nosotros">Nosotros</NavLink>
        <NavLink href="#servicios">Servicios</NavLink>
        <NavLink href="#preguntas">Preguntas Frecuentes</NavLink>
        <NavLink href="#contacto">Contacto</NavLink>
        <JoinButton /> {/* Botón en desktop */}
      </div>

      {/* Menú desplegable en Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[90px] left-0 right-0 bg-gray-100 shadow-md rounded-lg p-5 md:hidden"
        >
          <NavLink href="/" onClick={toggleMenu}>
            Inicio
          </NavLink>
          <NavLink href="/about" onClick={toggleMenu}>
            Nosotros
          </NavLink>
          <NavLink href="/services" onClick={toggleMenu}>
            Servicios
          </NavLink>
          <NavLink href="/contact" onClick={toggleMenu}>
            Contacto
          </NavLink>
          <JoinButton /> {/* Botón en menú desplegable en mobile */}
        </motion.div>
      )}
    </nav>
  );
};

const Logo = () => {
  return (
    <Image
      src="/logos/logo-removebg-preview2.png"
      alt="Clínica Punto Dental"
      width={160}
      height={160}
    />
  );
};

const NavLink = ({ children, href, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-gray-900">
          {children}
        </span>
      </motion.div>
    </Link>
  );
};

const JoinButton = () => {
  return (
    <a href="#cita">
      <button
        className={`relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
        border-gray-400 px-4 py-1.5 font-medium text-gray-700 transition-all duration-300
        before:absolute before:inset-0 before:-z-10 before:translate-y-[200%]
        before:scale-[2.5] before:rounded-[100%] before:bg-gray-300
        before:transition-transform before:duration-1000 before:content-[""]
        hover:scale-105 hover:border-gray-900 hover:text-gray-900 hover:before:translate-y-[0%]
        active:scale-100 md:px-6 md:py-2`}
      >
        Agenda tu cita
      </button>
    </a>
  );
};

export default Navbar;
