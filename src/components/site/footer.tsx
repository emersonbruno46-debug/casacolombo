"use client";

import Image from "next/image";
import { casaColomboData } from "@/data/casa-colombo";
import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { ibituruna, melo } = casaColomboData.units;
  const { instagram, linktree } = casaColomboData.social;

  return (
    <footer className="bg-forest pt-24 pb-12 px-6 lg:px-12 text-warm-ivory">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20 border-b border-warm-ivory/20 pb-16">
          
          {/* Brand Col */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-48 h-auto mb-8">
              <Image 
                src="/casa-colombo.svg" 
                alt="Casa Colombo Logo" 
                width={200} 
                height={100} 
                className="w-full text-warm-ivory drop-shadow-sm brightness-200"
              />
            </div>
            <p className="text-warm-ivory/80 font-manrope max-w-xs mb-8">
              {casaColomboData.copy.manifesto}
            </p>
            <div className="flex gap-4">
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-forest-alt hover:bg-forest-alt/80 rounded-full transition-colors flex items-center justify-center h-11 w-11" aria-label="Instagram">
                <svg className="w-5 h-5 text-soft-blush" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.46 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href={linktree} target="_blank" rel="noopener noreferrer" className="p-3 bg-forest-alt hover:bg-forest-alt/80 rounded-full transition-colors flex items-center justify-center font-bold text-soft-blush font-manrope text-sm h-11 w-11" aria-label="Linktree">
                Lt
              </a>
            </div>
          </div>

          {/* Locations Col */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            
            {/* Ibituruna */}
            <div>
              <h4 className="text-xl font-heading text-soft-blush mb-4">{ibituruna.name}</h4>
              <p className="font-manrope text-warm-ivory/80 mb-6 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {ibituruna.address}
              </p>
              <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent border-warm-ivory/30 text-warm-ivory hover:bg-warm-ivory/10 rounded-full text-sm">
                <a href={ibituruna.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> Reservas e Eventos
                </a>
              </Button>
            </div>

            {/* Melo */}
            <div>
              <h4 className="text-xl font-heading text-soft-blush mb-4">{melo.name}</h4>
              <p className="font-manrope text-warm-ivory/80 mb-6 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {melo.address}
              </p>
              <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent border-warm-ivory/30 text-warm-ivory hover:bg-warm-ivory/10 rounded-full text-sm">
                <a href={melo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> Somente Pedidos
                </a>
              </Button>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-warm-ivory/50 text-sm font-manrope">
          <p>© {new Date().getFullYear()} Casa Colombo. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <span className="opacity-70">Design e Desenvolvimento por </span>
            <strong className="opacity-100">Antigravity / Ideal Solutions</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
