"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-start">
          <Image
            src="/logos/logo-removebg-preview2.png"
            alt="Logo"
            className="w-64 mb-4"
            width={300}
            height={300}
            loading="lazy"
          />
          <p className="text-sm text-gray-400">
            Con más de 20 años de experiencia, ofrecemos servicios dentales de
            calidad para garantizar tu bienestar oral. Tu sonrisa es nuestra
            prioridad.
          </p>
        </div>

        {/* Enlaces (los mismos del Navbar) */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:underline">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href="#preguntas" className="hover:underline">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="#cita" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto y redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <span className="font-bold">Teléfono:</span> +502 5208 4159
            </li>
            <li>
              <span className="font-bold">Email:</span> puntodentalgt@gmail.com
            </li>
            <li>
              <span className="font-bold">Dirección:</span> Km 19.5 Carretera a
              El Salvador, Tecniscan Plaza Minuto, Clínica 6
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.facebook.com/puntodentalgt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com/puntodentalguate/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-400 rounded-full hover:opacity-80 transition"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Clínica Punto Dental. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
