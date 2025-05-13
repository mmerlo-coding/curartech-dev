"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import AnimatedBackground from "../Common/AnimatedBackground";

const pricingData = [
  {
    id: 1,
    name: "PLAN BASICO",
    price: 429000,
    unit_amount: 429000,
    nickname: "basic",
    offers: [
      "Chatbot personalizado con IA entrenada para tu negocio, integrable con WhatsApp y Email",
      "Calendario automatizado para manejo de consultas y citas",
      "Website profesional de hasta 3 paginas, con SEO incluido, usando una de nuestras plantillas probadas",
      "Formulario de contacto para generar clientes potenciales",
      "Automatizaciones de Email Marketing",
    ],
  },
  {
    id: 2,
    name: "PLAN PRO AVANZADO",
    price: 1200000,
    unit_amount: 1200000,
    nickname: "Premium",
    offers: [
      "Todo lo incluido en el plan basico",
      "App movil con inbox universal, manejo de citas y lista de clientes",
      "Optimizacion y automatizacion de reseñas de Google my business para mejor posicionamiento en buscadores",
      "Manejo de campañas de publicidad en Google o Facebook e Instagram (Se recomienda presupuesto de 1 millon de pesos mensuales minimo)",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <AnimatedBackground />
      <div className="container relative">
        <div className="flex min-h-[600px] flex-col items-center justify-center gap-8">
          <div className="flex w-full items-center lg:w-1/2">
            <SectionTitle
              subtitle="Precios"
              title="Nuestros precios"
              paragraph="Nuestros precios son muy competitivos y se ajustan a las necesidades de tu negocio."
            />
          </div>
          <div className="flex w-full  flex-col items-center justify-end md:flex-row">
            {pricingData.map((product, i) => (
              <PricingBox key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
