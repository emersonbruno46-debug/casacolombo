"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { casaColomboData } from "@/data/casa-colombo";
import { MapPin, MessageCircle } from "lucide-react";

export function LocationsStack() {
  const { ibituruna, melo } = casaColomboData.units;

  return (
    <section id="unidades" className="relative w-full bg-paper pb-24 lg:pb-32 scroll-mt-24">
      
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-forest">
          {casaColomboData.copy.unitsTitle}
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-0 relative">
        
        {/* Ibituruna Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto lg:h-[80vh] min-h-[600px] bg-forest rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row z-10"
        >
          <div className="lg:w-1/2 relative h-[40vh] lg:h-full">
            <Image
              src="/images/ibituruna/01_Fachadas_e_Marca/tripadvisor_fachada-principal.jpg"
              alt={ibituruna.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-paper">
            <h3 className="text-3xl lg:text-4xl font-heading mb-4 text-warm-ivory">{ibituruna.name}</h3>
            <p className="text-paper/80 font-manrope text-lg mb-8 max-w-md">
              {ibituruna.address}
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-soft-blush uppercase tracking-widest text-xs font-semibold mb-3">
                  {ibituruna.whatsappPurpose}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-warm-ivory text-forest hover:bg-white rounded-full">
                    <a href={ibituruna.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 rounded-full">
                    <a href={ibituruna.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" />
                      Como chegar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Melo Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto lg:h-[80vh] min-h-[600px] bg-espresso rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row-reverse z-20 mt-0 lg:mt-8"
        >
          <div className="lg:w-1/2 relative h-[40vh] lg:h-full">
            <Image
              src="/images/melo/01_Fachadas_e_Marca/google_maps_melo_12.jpg"
              alt={melo.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-paper">
            <h3 className="text-3xl lg:text-4xl font-heading mb-4 text-paper">{melo.name}</h3>
            <p className="text-paper/80 font-manrope text-lg mb-8 max-w-md">
              {melo.address}
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-paper/60 uppercase tracking-widest text-xs font-semibold mb-3">
                  {melo.whatsappPurpose}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-wine text-paper hover:bg-wine/90 rounded-full">
                    <a href={melo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Fazer Pedido
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 rounded-full">
                    <a href={melo.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" />
                      Como chegar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
