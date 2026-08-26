"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { casaColomboData } from "@/data/casa-colombo";

export function ActionHub() {
  const actions = [
    {
      label: "Ver cardápio",
      href: casaColomboData.social.menu,
      target: "_blank",
    },
    {
      label: "Fazer pedido na Melo",
      href: casaColomboData.units.melo.whatsappUrl,
      target: "_blank",
    },
    {
      label: "Reservas e eventos",
      href: casaColomboData.units.ibituruna.whatsappUrl,
      target: "_blank",
    },
    {
      label: "Como chegar",
      href: "#unidades",
      target: "_self",
    },
  ];

  return (
    <section className="bg-forest-alt text-paper border-b border-forest py-8 px-6 lg:px-12">
      <div className="container mx-auto">
        <ul className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-paper/20">
          {actions.map((action, idx) => (
            <motion.li 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
              className="w-full md:w-1/4 pt-4 md:pt-0 md:px-6 first:pt-0 first:md:px-0 first:md:pr-6 last:md:px-0 last:md:pl-6"
            >
              <a 
                href={action.href} 
                target={action.target} 
                rel={action.target === "_blank" ? "noopener noreferrer" : ""}
                className="group flex items-center justify-between md:justify-start gap-4 text-warm-ivory hover:text-white transition-colors w-full"
              >
                <span className="font-heading text-xl md:text-2xl tracking-wide">{action.label}</span>
                <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
