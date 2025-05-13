import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Juan Pérez",
    designation: "Clínica Salud Total",
    content:
      "Desde que implementé CurarTech, mis pacientes pueden agendar citas fácilmente y mi consultorio opera de manera más eficiente.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Dr. Alex González",
    designation: "Centro Médico Integral",
    content:
      "La automatización de citas y el chatbot han mejorado significativamente la experiencia de mis pacientes y reducido mi carga administrativa.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Dr. Carlos Rodríguez",
    designation: "Consultorio Privado",
    content:
      "El sistema de gestión de pacientes y la optimización de Google My Business han aumentado mi visibilidad y atraído más pacientes a mi consulta.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonios"
          title="Lo que dicen nuestros clientes"
          paragraph="Conoce la experiencia de médicos que han transformado su consultorio con CurarTech."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap gap-y-8 lg:mt-20">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
