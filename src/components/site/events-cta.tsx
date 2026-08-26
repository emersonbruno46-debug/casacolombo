"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { casaColomboData } from "@/data/casa-colombo";
import { CalendarHeart } from "lucide-react";

export function EventsCTA() {
  return (
    <section id="eventos" className="relative w-full py-24 md:py-32 bg-espresso overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image with Arch Mask */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-t-[300px] rounded-b-2xl overflow-hidden shadow-2xl border border-wine/20">
              <Image
                src="/images/ibituruna/02_Ambientes/google_maps_12.jpg"
                alt="Eventos na Casa Colombo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-forest/10 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Asymmetric Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-soft-blush mb-6">
              {casaColomboData.copy.eventsTitle}
            </h2>
            
            <p className="text-paper/80 font-manrope text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Nossa unidade Ibituruna é o cenário perfeito para encontros, celebrações e pequenos eventos corporativos. 
              Detalhes, capacidade e cardápios são combinados diretamente com a nossa equipe.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-wine text-paper hover:bg-wine/90 rounded-full px-8 py-6 text-lg transition-transform hover:scale-105 shadow-xl"
              >
                <a href={casaColomboData.units.ibituruna.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <CalendarHeart className="mr-2 h-5 w-5" />
                  Reservar ou falar sobre eventos
                </a>
              </Button>
            </div>
            
            <p className="mt-6 text-paper/50 text-sm font-manrope">
              * Sujeito à disponibilidade e análise do formato do evento.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
