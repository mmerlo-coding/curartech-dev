"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const pricingData = [
  {
    id: 1,
    name: "Chatbot con IA - BASIC",
    price: 97,
    unit_amount: 9700,
    nickname: "Standard",
    offers: [
      "Chatbot disponible 24/7",
      "Integracion con WhatsApp, SMS e Email",
      "Agendamiento de citas y manejo de calendario",
      "Cierre de ventas o filtrar clientes potenciales",
      "Manejo de preguntas frecuentes",
      "Creacion de contactos nuevos",
      "Inbox unificado para todas tus conversaciones",
    ],
  },
  {
    id: 2,
    name: "Chatbot con IA - PREMIUM",
    price: 297,
    unit_amount: 29700,
    nickname: "Premium",
    offers: [
      "Todo lo incluido en el plan Standard",
      "Manejo y optimizacion de Google my business para mejor visibilidad y posicionamiento en buscadores",
      "1 website/Funnel de ventas para tu negocio",
      "Creacion de automatizaciones customizadas para tu negocio",
      "CRM para gestionar tus clientes y manejar pipelines",
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
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Precios"
            title="Nuestros precios"
            paragraph="Nuestros precios son muy competitivos y se ajustan a las necesidades de tu negocio."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
