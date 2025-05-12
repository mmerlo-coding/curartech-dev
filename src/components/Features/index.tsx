import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <SectionTitle
              subtitle="Características"
              title="¿Por qué elegir CurarTech?"
              paragraph=""
            />
            <ul className="mt-8 list-none space-y-2 text-left">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                <span>Automatización Inteligente: Chatbots que responden consultas y agendan citas 24/7.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                <span>Gestión Eficiente: CRM y calendario integrados para un control total de tu consultorio.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                <span>Mayor Visibilidad: Optimización de Google My Business para atraer más pacientes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                <span>Sitio Web Profesional: Diseñado para convertir visitantes en pacientes.</span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/about/chatbot-demo.png"
                alt="CurarTech Chatbot Demo"
                fill
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full width features section */}
      <div className="relative mt-16 w-full overflow-hidden">
        {/* Diagonal background */}
        <div className="absolute inset-0 -skew-y-6 bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-[url('/images/patterns/diagonal-lines.svg')] opacity-10"></div>
        </div>
        
        {/* Content */}
        <div className="container relative mx-auto">
          <div className="grid grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 lg:grid-cols-5">
            {featuresData.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center text-white">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
