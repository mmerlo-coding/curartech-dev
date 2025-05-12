"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const pricingData = [
  {
    id: 1,
    name: "PLAN COMPLETO",
    price: 97,
    unit_amount: 9700,
    nickname: "Premium",
    offers: [
      "Chatbot personalizado para tu negocio, con IA y automatizaciones, integrable con WhatsApp y Email",
      "Calendario de citas y manejo de consultas y agendamientos",
      "CRM para gestionar tus leads y clientes",
      "App movil con inbox universal",
      "Optimizacion de Google my business para mejor visibilidad y posicionamiento en buscadores",
      "Desarrollo de un website personalizado para tu negocio",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="flex min-h-[600px] flex-col items-center justify-center gap-8 lg:flex-row">
          <div className="flex w-full items-center lg:w-1/2">
            <SectionTitle
              subtitle="Precios"
              title="Nuestros precios"
              paragraph="Nuestros precios son muy competitivos y se ajustan a las necesidades de tu negocio."
            />
          </div>
          <div className="flex w-full items-center justify-end lg:w-1/2">
            <div className="w-full">
              {pricingData.map((product, i) => (
                <PricingBox key={i} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
