"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: "/images/ibituruna/02_Ambientes/google_maps_29.jpg", alt: "Ambiente 1" },
  { src: "/images/ibituruna/02_Ambientes/tripadvisor_ambiente-clientes.jpg", alt: "Ambiente 2" },
  { src: "/images/melo/02_Ambientes/google_maps_melo_6.jpg", alt: "Ambiente Melo" },
  { src: "/images/ibituruna/03_Cafes_e_Pratos/google_maps_42.jpg", alt: "Detalhe café" },
  { src: "/images/ibituruna/03_Cafes_e_Pratos/google_maps_76.jpg", alt: "Detalhe gastronomia" },
  { src: "/images/melo/03_Cafes_e_Pratos/google_maps_melo_8.jpg", alt: "Doces Melo" }
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 lg:px-12 bg-forest-alt text-paper">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-ivory"
          >
            Nossa Atmosfera
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative rounded-xl overflow-hidden group cursor-zoom-in break-inside-avoid"
              onClick={() => setSelectedImg(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-paper text-forest p-3 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Expand className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-espresso/95 flex items-center justify-center p-4 lg:p-10 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <Button 
            className="absolute top-6 right-6 bg-paper/10 text-paper hover:bg-paper/20 rounded-full"
            variant="ghost"
            size="icon"
            onClick={() => setSelectedImg(null)}
          >
            <X className="w-6 h-6" />
          </Button>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImg}
              alt="Ampliada"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
