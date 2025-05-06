import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="¿Tienes Dudas? Te Ayudamos"
          paragraph="Abajo te dejamos algunas de las preguntas mas frecuentes que nuestros clientes nos han hecho."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="¿Cuanto tiempo demo la implementacion de su sistema de IA en mi pagina web?"
              answer="Depende de si tu negocio necesita hacer un website o ya tienes uno. Si necesitas un website, el tiempo de implementacion puede variar entre 1-2 semanas. Si ya tienes un website, el tiempo de implementacion puede variar entre 3-5 dias."
            />
            <SingleFaq
              question="¿El bot puede responder preguntas en varios idiomas?"
              answer="Si, el bot puede responder preguntas en varios idiomas, dependiendo de la configuracion de tu negocio, si el usuario escribe en ingles, el bot respondera en ingles, si el usuario escribe en español, el bot respondera en español."
            />
            <SingleFaq
              question="¿Tienen mas servicios aparte del chatbot?"
              answer="Si, tenemos mas servicios aparte del chatbot, como por ejemplo, la creacion de paginas web, automatizaciones de procesos como email marketing, manejo de reputacion con Google My Business, etc."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="¿Que pasa si no tengo pagina web para mi negocio?"
              answer="No hay problema, podemos crear una pagina web para tu negocio, te ofrecemos un servicio de creacion de pagina web, con la compra del plan PREMIUM. Tambien podemos integrar nuestras soluciones de IA directamente con tu Whatsapp para que todo el proceso se maneje directamente desde ahi. "
            />
            <SingleFaq
              question="¿Que tan efectivo es el uso de IA para impulsar mi negocio?"
              answer="Investigaciones sugieren que los negocio que usa IA, especialmente los entrenados con información específica de la empresa, pueden transformar los negocios en LATAM. Por ejemplo, un estudio en un banco brasileño mostró que aumentaron las interacciones en un 2,350% y la resolución de problemas en un 19%, con una satisfacción del cliente de 3.9/5. También se proyecta una reducción de costos de hasta 30% en servicio al cliente."
            />
            <SingleFaq
              question="¿Como pueden mis pacientes agendar automaticamente una consulta?"
              answer="Con nuestro sistema de agendamientos automaticos, tus pacientes pueden agendar una consulta por si mismos, sin necesidad de llamar o esperar a que un agente este disponible. Simplemente deben escribirle al bot desde tu pagina web, o enviarte un mensaje a whatsapp, y el bot se encarga de agendar la cita desde ahi."
            />
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 45.6673 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0013 132)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0013 117.333)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0013 102.667)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0013 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 31.0013 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0013 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0013 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0013 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0013 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0013 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3333 132)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3333 117.333)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3333 102.667)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3333 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 16.3333 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3333 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3333 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3333 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3333 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3333 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 1.66732 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#13C296"
            />
          </svg>
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 45.6673 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0006 132)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0006 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0006 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0006 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.0008 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0008 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0008 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0008 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0008 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0008 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3341 132)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3341 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3341 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3341 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 16.3338 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3338 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3338 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3338 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3338 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3338 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 1.66732 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#3758F9"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Faq;
