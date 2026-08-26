"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { casaColomboData } from "@/data/casa-colombo";
import { MapPin, MessageCircle } from "lucide-react";

interface UnitCardProps {
  i: number;
  unit: any;
  imageSrc: string;
  reverse?: boolean;
  bgColor: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const UnitCard = ({ i, unit, imageSrc, reverse, bgColor, progress, range, targetScale }: UnitCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${i * 40}px)`,
        }}
        className={`w-full h-auto lg:h-[80vh] min-h-[600px] ${bgColor} rounded-3xl overflow-hidden shadow-2xl flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} relative origin-top`}
      >
        <div className="lg:w-1/2 relative h-[40vh] lg:h-full">
          <Image
            src={imageSrc}
            alt={unit.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-paper">
          <h3 className={`text-3xl lg:text-4xl font-heading mb-4 ${bgColor === 'bg-forest' ? 'text-warm-ivory' : 'text-paper'}`}>
            {unit.name}
          </h3>
          <p className="text-paper/80 font-manrope text-lg mb-8 max-w-md">
            {unit.address}
          </p>
          
          <div className="space-y-6">
            <div>
              <p className={`${bgColor === 'bg-forest' ? 'text-soft-blush' : 'text-paper/60'} uppercase tracking-widest text-xs font-semibold mb-3`}>
                {unit.whatsappPurpose}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className={`${bgColor === 'bg-forest' ? 'bg-warm-ivory text-forest hover:bg-white' : 'bg-wine text-paper hover:bg-wine/90'} rounded-full`}>
                  <a href={unit.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {bgColor === 'bg-forest' ? 'Falar no WhatsApp' : 'Fazer Pedido'}
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-paper/30 bg-transparent text-paper hover:bg-paper/10 rounded-full">
                  <a href={unit.mapsUrl} target="_blank" rel="noopener noreferrer">
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
  );
};

export function LocationsStack() {
  const { ibituruna, melo } = casaColomboData.units;
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      unit: ibituruna,
      imageSrc: "/images/ibituruna/01_Fachadas_e_Marca/tripadvisor_fachada-principal.jpg",
      reverse: false,
      bgColor: "bg-forest"
    },
    {
      unit: melo,
      imageSrc: "/images/melo/01_Fachadas_e_Marca/google_maps_melo_12.jpg",
      reverse: true,
      bgColor: "bg-espresso"
    }
  ];

  return (
    <section id="unidades" className="w-full bg-paper scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12 pt-24 pb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-forest">
          {casaColomboData.copy.unitsTitle}
        </h2>
      </div>

      <main ref={container} className="relative w-full pb-[10vh]">
        <div className="container mx-auto px-6 lg:px-12">
          {cards.map((card, i) => {
            const targetScale = 1 - (cards.length - i - 1) * 0.05;
            return (
              <UnitCard
                key={i}
                i={i}
                unit={card.unit}
                imageSrc={card.imageSrc}
                reverse={card.reverse}
                bgColor={card.bgColor}
                progress={scrollYProgress}
                range={[i * 0.5, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </main>
    </section>
  );
}
