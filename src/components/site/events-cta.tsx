"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { casaColomboData } from "@/data/casa-colombo";
import { CalendarHeart } from "lucide-react";

export function EventsCTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-espresso overflow-hidden flex items-center justify-center">
      
      {/* Background with parallax and overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ibituruna/02_Ambientes/google_maps_12.jpg"
          alt="Eventos na Casa Colombo"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-transparent to-espresso" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-wine/30 bg-espresso/60 backdrop-blur-sm p-8 md:p-16 rounded-[2rem] max-w-3xl w-full shadow-2xl relative"
        >
          {/* Subtle floral accents in the corners using SVG would go here */}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-soft-blush mb-6">
            {casaColomboData.copy.eventsTitle}
          </h2>
          
          <p className="text-paper/80 font-manrope text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Nossa unidade Ibituruna é o cenário perfeito para encontros, celebrações e pequenos eventos corporativos. 
            Detalhes, capacidade e cardápios são combinados diretamente com a nossa equipe.
          </p>

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
          
          <p className="mt-6 text-paper/50 text-sm font-manrope">
            * Sujeito à disponibilidade e análise do formato do evento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
