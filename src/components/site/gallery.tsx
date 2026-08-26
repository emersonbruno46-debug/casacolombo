"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";

const galleryImages = [
  { 
    src: "/images/ibituruna/02_Ambientes/tripadvisor_ambiente-clientes.jpg", 
    alt: "Atmosfera Casa Colombo",
  },
  { 
    src: "/images/melo/02_Ambientes/google_maps_melo_6.jpg", 
    alt: "Detalhes do espaço",
  },
  { 
    src: "/images/ibituruna/03_Cafes_e_Pratos/google_maps_42.jpg", 
    alt: "Momento café",
  },
  { 
    src: "/images/ibituruna/03_Cafes_e_Pratos/google_maps_76.jpg", 
    alt: "Gastronomia",
  },
  { 
    src: "/images/ibituruna/02_Ambientes/google_maps_29.jpg", 
    alt: "Ambiente externo",
  },
  { 
    src: "/images/melo/03_Cafes_e_Pratos/google_maps_melo_8.jpg", 
    alt: "Doces",
  }
];

const Carousel_002 = ({
  images,
  className,
  showPagination = false,
  showNavigation = true,
  loop = true,
  autoplay = true,
  spaceBetween = 40,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
  }
  .swiper-button-next, .swiper-button-prev {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    width: 40px !important;
    height: 40px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white !important;
    transition: background-color 0.3s;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .swiper-button-next::after, .swiper-button-prev::after {
    display: none !important;
  }
  `;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn("relative w-full max-w-sm mx-auto lg:max-w-md", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_002 w-[280px] h-[400px] md:w-[320px] md:h-[450px]"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded-2xl overflow-hidden shadow-2xl border-4 border-paper">
            <img
              className="h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next">
              <ChevronRightIcon className="h-6 w-6" />
            </div>
            <div className="swiper-button-prev">
              <ChevronLeftIcon className="h-6 w-6" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export function Gallery() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-forest-alt text-paper overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left: Carousel */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Carousel_002 images={galleryImages} loop autoplay />
          </div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-warm-ivory mb-6">
              Nossa Atmosfera
            </h2>
            <p className="text-lg md:text-xl text-paper/90 max-w-lg mx-auto lg:mx-0 font-manrope leading-relaxed mb-8">
              Onde cada detalhe, do aroma do grão recém-moído à luz natural que preenche o salão, foi milimetricamente pensado para tornar a sua pausa inesquecível.
            </p>
            <div className="w-16 h-px bg-soft-blush mx-auto lg:mx-0 mb-8" />
            <p className="text-xl md:text-2xl font-heading italic text-paper/70">
              "Um convite irrecusável para sentir, saborear e permanecer."
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
