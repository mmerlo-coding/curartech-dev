import Image from "next/image";
import Link from "next/link";
import CircleSvg from "./circle-svg";
import { FiDollarSign } from "react-icons/fi";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/80 pt-[180px] "
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[850px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Automatiza tu Consultorio Médico con IA: Ahorra Tiempo, Aumenta Pacientes y Mejora tu Servicio.
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base text-white sm:leading-[1.44]">
                  Automatiza, atrae más clientes potenciales y gestiona tu
                  negocio como nunca antes con nuestras soluciones de IA.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      ¡Comienza a Transformar tu Consultorio Hoy! Agenda una Demo Gratuita.
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="flex items-center gap-2 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                    >
                      Precio
                      <FiDollarSign />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <CircleSvg />
        </div>
      </section>
    </>
  );
};

export default Hero;
