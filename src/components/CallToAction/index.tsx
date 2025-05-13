import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

const benefits = [
  {
    title: "87% de los clientes potenciales",
    description:
      "Prefieren agendar en línea, sin necesidad de levantar el telefono o esperar que un agente este disponible, con nuestro sistema de agendamientos automaticos esto no sera un problema.",
  },
  {
    title: "80% más de reseñas con nuestra optimización de Google My Business.",
    description:
      "Los negocios que optimizar su Google My Business tienen un 126% mas de trafico a su website, y un 35% mas de conversiones",
  },
  {
    title: "3x mas rapido",
    description:
      "Los chatbots en promedio tienen tiempos de respuesta 3x veces mas rapidos que los agentes de soporte o ventas humanos. Asegurate que los visitantes de tu website tengan respuestas rapidas y eficientes.",
  },
  {
    title: "30% en promedio de reducción de costos de adquisición de clientes",
    description:
      "Al automatizar tus procesos de atención, puedes reducir tus costos y mejorar la experiencia de tus clientes potenciales.",
  },
];

const CallToAction = () => {
  return (
    <section className="lg:py-[80pxz ] relative z-10 overflow-hidden bg-primary py-20">
      <div className="container flex flex-col items-center justify-center gap-8 px-4">
        <div className="mb-12 grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:mb-0">
          {benefits.map((benefit) => (
            <div
              className="h-full md:h-[220px] rounded-md border border-white bg-transparent p-8 text-white"
              key={benefit.title}
            >
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="text-white">{benefit.description}</p>
            </div>
          ))}
        </div>
        <Link
          href="#contact"
          className="flex w-fit items-center gap-2 rounded-md bg-white px-6 py-[14px] text-base font-medium text-dark transition duration-300 ease-in-out hover:bg-white/[0.12] hover:text-white"
        >
          Empieza a Crecer – Agenda tu Demo hoy!
          <FiCalendar />
        </Link>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
