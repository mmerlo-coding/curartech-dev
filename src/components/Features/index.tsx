import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container flex flex-col gap-8">
        <SectionTitle
          subtitle="Características"
          title="Características de nuestro sistema"
          paragraph="Imagina una consulta llena de pacientes felices, con citas agendadas sin esfuerzo y un negocio que crece solo. Esto no es un sueño: es lo que logramos para medicos como tú con nuestras soluciones de IA y automatización. En CurarTech, te ofrecemos herramientas revolucionarias para destacar: sitios web de alta conversión, chatbots inteligentes, CRM todo-en-uno y más."
        />

        <div className="grid grid-cols-1 gap-8">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
