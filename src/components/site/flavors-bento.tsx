"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { casaColomboData } from "@/data/casa-colombo";

export function FlavorsBento() {
  return (
    <section id="sabores" className="py-24 px-6 lg:px-12 bg-forest text-paper scroll-mt-24">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-ivory"
          >
            {casaColomboData.copy.flavorsTitle}
          </motion.h2>
        </div>

        {/* Desktop Bento Grid / Mobile Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[300px] md:auto-rows-[250px] lg:auto-rows-[300px]">
          
          {/* Main Large Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src="/images/ibituruna/03_Cafes_e_Pratos/google_maps_84.jpg"
              alt="Café especial"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-80 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500">
              <span className="text-soft-blush text-sm uppercase tracking-widest font-semibold block mb-2">Cafés Especiais</span>
              <p className="text-warm-ivory text-xl font-heading">Grãos selecionados com precisão.</p>
            </div>
          </motion.div>

          {/* Medium Item 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src="/images/ibituruna/03_Cafes_e_Pratos/google_maps_113.jpg"
              alt="Doces Finos"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-6">
              <span className="text-paper text-lg font-heading">Doces Finos</span>
            </div>
          </motion.div>

          {/* Medium Item 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src="/images/ibituruna/03_Cafes_e_Pratos/google_maps_54.jpg"
              alt="Gastronomia"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-6">
              <span className="text-paper text-lg font-heading">Gastronomia</span>
            </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center">
          <a 
            href={casaColomboData.social.menu}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-warm-ivory hover:text-white border-b border-warm-ivory/30 hover:border-white pb-1 font-manrope uppercase tracking-widest text-sm transition-colors"
          >
            Abrir cardápio completo
          </a>
        </div>
      </div>
    </section>
  );
}
