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
          title="Características principales de nuestro FoodBot"
          paragraph="Nuestros chatbots son capaces de responder preguntas, tomar acciones y mucho más. 24 horas al día, 7 días a la semana. Sin descanso, ni aumentos de sueldo, ni vacaciones."
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
