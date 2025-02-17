"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTooth, FaSmile, FaTeeth, FaMagic, FaStethoscope } from "react-icons/fa"; // Íconos de FontAwesome

// Datos de los servicios
const services = [
  {
    id: "odontologia-general",
    title: "Odontología General",
    description:
      "Cuidado dental preventivo y tratamientos para mantener tu boca sana.",
    image:
      "https://plus.unsplash.com/premium_photo-1674179075488-7bbe91dba99a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2RvbnRvbG9naWElMjBnZW5lcmFsfGVufDB8fDB8fHww",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description:
      "Corrección de maloclusiones y alineación de los dientes para una sonrisa perfecta.",
    image:
      "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9ydG9kb25jaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "implantes-dentales",
    title: "Implantes Dentales",
    description:
      "Reemplazo de dientes perdidos con implantes duraderos y de aspecto natural.",
    image:
      "https://images.unsplash.com/photo-1684607632829-1e5bf4f21dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1wbGFudGVzJTIwZGVudGFsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "estetica-dental",
    title: "Estética Dental",
    description:
      "Mejora la apariencia de tu sonrisa con tratamientos estéticos personalizados.",
    image:
      "https://plus.unsplash.com/premium_photo-1702598988008-b60cf858cb78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXN0ZXRpY2ElMjBkZW50YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    description:
      "Tratamientos especializados para las encías y el soporte de los dientes.",
    image:
      "https://plus.unsplash.com/premium_photo-1674998805052-23ea88091da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyaWRvbnRpc3R8ZW58MHx8MHx8fDA%3D",
  },
];

const ServicesGrid = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <section className="bg-[#05192e] py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Servicios
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative cursor-default bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 group"
            >
              <div
                className="w-full h-64 bg-center bg-cover"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="w-full h-full bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-all duration-300 group-hover:bg-opacity-60">
                  <motion.h2
                    className="text-3xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    className="text-lg text-gray-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full w-4 h-4 flex items-center justify-center text-2xl shadow-lg">
                {service.icon} {/* Ícono profesional */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;