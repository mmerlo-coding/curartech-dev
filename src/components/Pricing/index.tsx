"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const pricingData = [
  {
    id: 1,
    name: "CURARTECH - Basico",
    price: 97,
    unit_amount: 9700,
    nickname: "Standard",
    offers: [
      "Chatbot personalizado para tu negocio, con IA y automatizaciones",
      "Integracion con WhatsApp y Email",
      "Calendario de citas y manejo de consultas y agendamientos",
      "CRM con inbox unificado para todas tus conversaciones y manejo de leads",
      "App movil para atender a tus clientes y gestionar tus consultas desde cualquier lugar",
    ],
  },
  {
    id: 2,
    name: "CURARTECH - Premium personalizado",
    price: 297,
    unit_amount: 29700,
    nickname: "Premium",
    offers: [
      "Todo lo incluido en el plan Standard",
      "Desarrollo de un website personalizado para tu negocio",
      "Creacion de automatizaciones customizadas para tu negocio",
      "Integracion con Google, Facebook e Instagram ads, para manejar tus campañas dentro de nuestro sistema",
      "Optimizacion de Google my business para mejor visibilidad y posicionamiento en buscadores",
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
