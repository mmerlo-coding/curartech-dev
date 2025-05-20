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
      "Chatbot personalizado con IA entrenada para tu negocio, integrable con WhatsApp y Email (500 mensajes por mes)",
      "Calendario automatizado para manejo de consultas y citas, se puede integrar con Google Calendar",
      "Website profesional de hasta 3 paginas, con SEO incluido, usando una de nuestras plantillas probadas",
      "Inbox universal - Emails, Whatsapp y Live chat en un solo lugar",
      "Automatizaciones de Email Marketing para hacer seguimiento a tus clientes una vez se registren",
      "App movil con inbox universal, manejo de citas y lista de clientes",
    ],
  },
  {
    id: 2,
    name: "PLAN AVANZADO",
    price: 1200000,
    unit_amount: 1200000,
    nickname: "Premium",
    offers: [
      "Todo lo incluido en el plan basico",
      "Optimizacion y automatizacion de reseñas de Google my business para mejor posicionamiento en buscadores",
      "Automatizaciones personalizadas para campañas de email y Whatsapp",
      "Campañas de Whatsapp masivo para contactar a todos tus clientes al mismo tiempo",
      "Activacion del Ads manager dentro de nuestro sistema",
      "Manejo de campañas de publicidad en Google Adwords (Se recomienda presupuesto de 1 millon de pesos mensuales minimo)",
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
