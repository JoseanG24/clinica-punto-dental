"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

// Definición de tipos para las imágenes de trabajos
interface WorkImage {
  src: string;
  title: string;
  id: number;
}

const WorksCarousel: React.FC = () => {
  const [idx, setIdx] = useState<number>(0);
  const [prevIdx, setPrevIdx] = useState<number>(0);

  const trend = idx > prevIdx ? 1 : -1;
  const imageIndex = Math.abs(idx % works.length);

  const handlePrevClick = () => {
    setPrevIdx(idx);
    setIdx((pv) => pv - 1);
  };

  const handleNextClick = () => {
    setPrevIdx(idx);
    setIdx((pv) => pv + 1);
  };

  return (
    <section className="bg-[#05192e] pt-20 pb-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold text-white mb-8">Nuestros Trabajos</h2>
        <div className="h-[50vw] min-h-[400px] max-h-[460px]  bg-black relative overflow-hidden mx-auto">
          <button
            onClick={handlePrevClick}
            className="bg-white/20 hover:bg-white/30 transition-colors text-white p-4 rounded-full absolute z-10 left-4 top-1/2 transform -translate-y-1/2 border-2 border-white shadow-lg"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="absolute inset-0 z-[5] backdrop-blur-xl">
            <AnimatePresence initial={false} custom={trend}>
              <motion.img
                variants={imgVariants}
                custom={trend}
                initial="initial"
                animate="animate"
                exit="exit"
                key={works[imageIndex].id}
                src={works[imageIndex].src}
                alt={works[imageIndex].title}
                className="aspect-square max-h-[90%] max-w-[calc(100%_-_80px)] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
                style={{ y: "-50%", x: "-50%" }}
              />
            </AnimatePresence>
          </div>

          <button
            onClick={handleNextClick}
            className="bg-white/20 hover:bg-white/30 transition-colors text-white p-4 rounded-full absolute z-10 right-4 top-1/2 transform -translate-y-1/2 border-2 border-white shadow-lg"
          >
            <FiChevronRight size={24} />
          </button>

          <AnimatePresence initial={false} custom={trend}>
            <motion.span
              custom={trend}
              variants={titleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={works[imageIndex].id}
              className="text-white text-xl md:text-2xl p-2 rounded-lg bg-white/10 backdrop-blur-lg font-semibold shadow-lg absolute z-20 left-10 bottom-4"
            >
              {works[imageIndex].title}
            </motion.span>
          </AnimatePresence>

          <AnimatePresence initial={false}>
            <motion.div
              key={works[imageIndex].id + works.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 object-fill z-0"
              style={{
                backgroundImage: `url(${works[imageIndex].src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const imgVariants = {
  initial: (trend: number) => ({
    x: trend === 1 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: "-50%",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (trend: number) => ({
    x: trend === 1 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  }),
};

const titleVariants = {
  initial: (trend: number) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (trend: number) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  }),
};

const works: WorkImage[] = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    title: "Proyecto 1",
    id: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    title: "Proyecto 2",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    title: "Proyecto 3",
    id: 3,
  },
];

export default WorksCarousel;
