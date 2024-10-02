"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image"; // Importamos el componente para usar el logo.

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Animación con GSAP para el footer
    gsap.fromTo(
      ".footer",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <footer className="footer bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sección del Logo */}
        <div className="footer-logo">
          <Image
            src="/logos/logo-removebg-preview.png" // Reemplaza por la ruta correcta a tu logo
            alt="Punt Dental Logo"
            width={150}
            height={150}
            className="mb-4 bg-white rounded-xl"
          />
          <p className="text-xl w-[60%] text-gray-400">Tu clínica dental de confianza.</p>
        </div>

        {/* Sección de Navegación */}
        <div className="footer-nav">
          <h3 className="text-lg font-bold mb-4">Navegación</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400 transition-colors">Nosotros</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400 transition-colors">Servicios</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 transition-colors">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Sección de Servicios */}
        <div className="footer-services">
          <h3 className="text-lg font-bold mb-4">Nuestros Servicios</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/servicios/odontologia-general" className="hover:text-gray-400 transition-colors">Odontología General</Link>
            </li>
            <li>
              <Link href="/servicios/ortodoncia" className="hover:text-gray-400 transition-colors">Ortodoncia</Link>
            </li>
            <li>
              <Link href="/servicios/implantes-dentales" className="hover:text-gray-400 transition-colors">Implantes Dentales</Link>
            </li>
            <li>
              <Link href="/servicios/estetica-dental" className="hover:text-gray-400 transition-colors">Estética Dental</Link>
            </li>
            <li>
              <Link href="/servicios/periodoncia" className="hover:text-gray-400 transition-colors">Periodoncia</Link>
            </li>
          </ul>
        </div>

        {/* Sección de Contacto */}
        <div className="footer-contact">
          <h3 className="text-lg font-bold mb-4">Contacto</h3>
          <p className="mb-2">
            <strong>Teléfono:</strong> +1 123-456-7890
          </p>
          <p className="mb-2">
            <strong>Email:</strong> contacto@puntdental.com
          </p>
          <p className="mb-2">
            <strong>Dirección:</strong> 123 Calle Principal, Ciudad Dental, País.
          </p>
          <p>
            <strong>Horario de Atención:</strong> <br />
            Lunes a Viernes: 9:00 AM - 6:00 PM <br />
            Sábado: 9:00 AM - 2:00 PM <br />
            Domingo: Cerrado
          </p>
        </div>

        {/* Derechos de Autor */}
        <div className="footer-copyright md:col-span-4 text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Punt Dental. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
