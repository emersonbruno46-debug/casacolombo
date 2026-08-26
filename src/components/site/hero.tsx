"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { casaColomboData } from "@/data/casa-colombo";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { heroHeadline, heroSupport, heroPrimaryCta, heroSecondaryCta } = casaColomboData.copy;

  return (
    <section className="relative w-full h-[90dvh] md:h-[100dvh] overflow-hidden bg-forest flex items-center justify-center">
      {/* Background Image with Parallax & Arch Reveal */}
      <motion.div
        initial={{ clipPath: "ellipse(30% 30% at 50% 50%)", scale: 1.1 }}
        animate={{ clipPath: "ellipse(150% 150% at 50% 50%)", scale: 1 }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/hero.png"
          alt="Hero Casa Colombo"
          fill
          priority
          className="object-cover object-center opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-warm-ivory uppercase tracking-widest text-sm mb-6 font-semibold opacity-90">
            {casaColomboData.copy.eyebrow}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-paper leading-[1.1] mb-6 drop-shadow-md">
            {heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-paper/90 max-w-2xl mx-auto mb-10 font-manrope">
            {heroSupport}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-warm-ivory text-forest hover:bg-white rounded-full px-8 py-6 text-lg transition-transform hover:scale-105"
            >
              {heroPrimaryCta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-paper border-paper/40 hover:bg-paper/10 hover:border-paper rounded-full px-8 py-6 text-lg transition-colors"
            >
              {heroSecondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-paper/70 gap-2"
      >
        <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-paper/70 to-transparent" />
      </motion.div>
    </section>
  );
}
