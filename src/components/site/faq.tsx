import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { casaColomboData } from "@/data/casa-colombo";
import { Clock, MapPin, Coffee, Utensils } from "lucide-react";

export function FAQ() {
  const { ibituruna, melo } = casaColomboData.units;

  return (
    <section className="py-24 px-6 lg:px-12 bg-paper text-forest">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4">Informações Úteis</h2>
          <p className="text-forest/80 font-manrope">
            Tire suas principais dúvidas sobre o funcionamento de cada unidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Info Ibituruna */}
          <div className="bg-forest-alt text-paper p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-heading text-warm-ivory mb-6 flex items-center gap-3">
              <Coffee className="w-6 h-6 text-soft-blush" />
              {ibituruna.name}
            </h3>
            <ul className="space-y-4 font-manrope text-paper/90">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-soft-blush" />
                <span>{ibituruna.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-1 text-soft-blush" />
                <span>Horários: A confirmar nos canais oficiais.</span>
              </li>
              <li>
                <span className="font-semibold text-warm-ivory block mt-4 mb-1">Finalidade principal:</span>
                Reservas, eventos corporativos, celebrações e atendimento presencial com ambiente amplo.
              </li>
            </ul>
          </div>

          {/* Info Melo */}
          <div className="bg-espresso text-paper p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-heading text-paper mb-6 flex items-center gap-3">
              <Utensils className="w-6 h-6 text-wine" />
              {melo.name}
            </h3>
            <ul className="space-y-4 font-manrope text-paper/90">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-wine" />
                <span>{melo.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-1 text-wine" />
                <span>Horários: A confirmar nos canais oficiais.</span>
              </li>
              <li>
                <span className="font-semibold text-paper block mt-4 mb-1">Finalidade principal:</span>
                Foco em pedidos, retiradas e atendimento rápido para a região central.
              </li>
            </ul>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-forest/20">
            <AccordionTrigger className="text-xl font-heading text-forest hover:text-forest-alt">
              Posso fazer pedido para entrega ou retirada?
            </AccordionTrigger>
            <AccordionContent className="text-base text-forest/80 font-manrope">
              Sim! Para pedidos focados em delivery ou retirada, recomendamos fortemente utilizar o WhatsApp da unidade Melo, que é especializado neste serviço.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-forest/20">
            <AccordionTrigger className="text-xl font-heading text-forest hover:text-forest-alt">
              Como funciona para fazer uma reserva de mesa?
            </AccordionTrigger>
            <AccordionContent className="text-base text-forest/80 font-manrope">
              Reservas de mesas e pequenos eventos são tratados diretamente pela equipe da unidade Ibituruna. Entre em contato com o WhatsApp correspondente para checar a disponibilidade e as opções do cardápio para o seu momento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-forest/20">
            <AccordionTrigger className="text-xl font-heading text-forest hover:text-forest-alt">
              Vocês têm cardápio com preços disponíveis online?
            </AccordionTrigger>
            <AccordionContent className="text-base text-forest/80 font-manrope">
              Nossos itens e preços podem variar. O cardápio digital mais atualizado sempre será enviado a você mediante solicitação através dos nossos canais de atendimento no WhatsApp.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
