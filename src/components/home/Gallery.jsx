"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Constante para el padding de las imágenes
const IMG_PADDING = 12;

const ImageParallaxGallery = () => {
  return (
    <div className="md:px-20 sm:px-0 py-20 bg-gray-900">
      <ImageParallaxItem imgUrl="/images/img2.png" />
      <ImageParallaxItem imgUrl="/images/img1.png" />
      <ImageParallaxItem imgUrl="/images/img5.jpg" />
      <ImageParallaxItem imgUrl="/images/img3.png" />
      <ImageParallaxItem imgUrl="/images/img6.jpg" />
       </div>
  );
};

// Componente que contiene cada imagen en la galería
const ImageParallaxItem = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 0.2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl md:rounded-lg my-12"
    >
      {/* Capa para oscurecer la imagen y hacer el efecto visual más profundo */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

export default ImageParallaxGallery;
