"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { casaColomboData } from "@/data/casa-colombo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "A Casa", href: "#a-casa" },
    { label: "Sabores", href: "#sabores" },
    { label: "Unidades", href: "#unidades" },
    { label: "Eventos", href: "#eventos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="relative z-50">
          <div className={`transition-all duration-300 ${scrolled ? "w-24" : "w-32"}`}>
            <Image 
              src="/casa-colombo.svg" 
              alt="Casa Colombo" 
              width={128} 
              height={64} 
              className="w-full h-auto text-warm-ivory brightness-200" 
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-warm-ivory/80 hover:text-white font-manrope text-sm tracking-wide transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="bg-wine text-paper hover:bg-wine/90 rounded-full px-6 ml-4">
            <a href={casaColomboData.units.ibituruna.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" /> Falar no WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden relative z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-warm-ivory hover:bg-forest-alt">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-forest border-l-forest-alt text-paper p-10 flex flex-col justify-center">
              <nav className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href}
                    className="text-2xl font-heading text-warm-ivory hover:text-soft-blush transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="mt-8 flex flex-col gap-4">
                  <Button asChild className="bg-wine text-paper rounded-full w-full py-6 text-lg">
                    <a href={casaColomboData.units.melo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Fazer Pedido (Melo)
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-warm-ivory/30 bg-transparent text-warm-ivory rounded-full w-full py-6 text-lg">
                    <a href={casaColomboData.units.ibituruna.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Reservas (Ibituruna)
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </motion.header>
  );
}
