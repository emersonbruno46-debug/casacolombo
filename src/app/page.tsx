import { casaColomboData } from "@/data/casa-colombo";
import { Hero } from "@/components/site/hero";
import { ActionHub } from "@/components/site/action-hub";
import { Manifesto } from "@/components/site/manifesto";
import { FlavorsBento } from "@/components/site/flavors-bento";
import { LocationsStack } from "@/components/site/locations-stack";
import { Gallery } from "@/components/site/gallery";
import { EventsCTA } from "@/components/site/events-cta";
import { FAQ } from "@/components/site/faq";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-paper text-text-light">
      <Hero />
      <ActionHub />
      <Manifesto />
      <FlavorsBento />
      <LocationsStack />
      <Gallery />
      <EventsCTA />
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-forest-alt text-center text-paper">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-12 text-warm-ivory">
            {casaColomboData.copy.finalCtaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="bg-warm-ivory text-forest hover:bg-white rounded-full px-8 py-6 w-full sm:w-auto text-lg shadow-xl">
              <a href={casaColomboData.units.ibituruna.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Ibituruna — Reservas e Eventos
              </a>
            </Button>
            <Button asChild size="lg" className="bg-wine text-paper hover:bg-wine/90 rounded-full px-8 py-6 w-full sm:w-auto text-lg shadow-xl">
              <a href={casaColomboData.units.melo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Melo — Fazer Pedido
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

