"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-start">
          <Image src="/logos/logo-removebg-preview2.png" alt="Logo" className="w-64 mb-4" width={300} height={300} />
          <p className="text-sm text-gray-400">
            Creando soluciones digitales innovadoras para impulsar tu negocio en
            el mundo online. Tu éxito es nuestro objetivo.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#about" className="hover:underline">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:underline">
                Portafolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
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
              <span className="font-bold">Teléfono:</span> +1 123-456-7890
            </li>
            <li>
              <span className="font-bold">Email:</span> contacto@ejemplo.com
            </li>
            <li>
              <span className="font-bold">Dirección:</span> 123 Calle Principal,
              Ciudad Digital.
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://instagram.com"
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
        © 2025 Tu Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
