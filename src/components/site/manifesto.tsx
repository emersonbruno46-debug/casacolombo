"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { casaColomboData } from "@/data/casa-colombo";

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const img1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const lineDraw = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 md:py-40 px-6 lg:px-12 bg-paper text-text-light overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Area */}
          <div className="lg:w-1/2 relative z-10">
            <motion.div style={{ y: textY }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight text-forest mb-8">
                {casaColomboData.copy.manifesto}
              </h2>
              <div className="w-20 h-px bg-wine mb-8" />
              <p className="text-lg text-text-light/80 max-w-md font-manrope">
                A Casa Colombo não é apenas sobre o café. É sobre a pausa, a luz natural que preenche o ambiente, o som suave da louça e o aconchego que lembra casa. Cada detalhe, de Montes Claros para o seu dia.
              </p>
            </motion.div>
          </div>

          {/* Editorial Image Composition */}
          <div className="lg:w-1/2 relative min-h-[600px] w-full mt-12 lg:mt-0">
            
            {/* SVG Floral Line Decorator */}
            <motion.svg
              viewBox="0 0 100 300"
              className="absolute left-1/2 top-1/4 -translate-x-1/2 w-32 h-96 text-soft-blush opacity-60 z-0 pointer-events-none"
              style={{ pathLength: lineDraw }}
            >
              <motion.path
                d="M50 0 C20 50, 80 150, 50 200 C20 250, 80 280, 50 300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Simplistic leaf shapes */}
              <motion.path d="M50 50 Q70 40 60 70 Q40 60 50 50" fill="currentColor" opacity="0.5" />
              <motion.path d="M40 150 Q20 160 30 130 Q50 140 40 150" fill="currentColor" opacity="0.5" />
            </motion.svg>

            {/* Vertical Image */}
            <motion.div 
              style={{ y: img1Y }}
              className="absolute top-0 right-0 lg:right-10 w-[60%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/images/ibituruna/02_Ambientes/google_maps_49.jpg"
                alt="Ambiente interno Casa Colombo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 60vw, 30vw"
              />
            </motion.div>

            {/* Horizontal Image */}
            <motion.div 
              style={{ y: img2Y }}
              className="absolute bottom-10 left-0 lg:left-[-10%] w-[70%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl z-20 border-8 border-paper"
            >
              <Image
                src="/images/ibituruna/03_Cafes_e_Pratos/google_maps_82.jpg"
                alt="Café e pratos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 40vw"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
