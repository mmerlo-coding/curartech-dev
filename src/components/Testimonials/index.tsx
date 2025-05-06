import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Yolfrank Merlo",
    designation: "Fundador @ sersasuperficies.cl",
    content:
      "Pude reducir el tiempo en el que mis clientes reciben la información de mis productos y servicios, lo que me ha permitido aumentar mis ventas y tambien, mejorar la experiencia de usuario.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmundo",
    designation: "Fundador @ UI Hunter",
    content:
      "Hace tiempo que ya no me preocupo de agendar citas, ahora mis clientes pueden agendar su cita por si mismos.",
    image: "/images/testimonials/author-02.png",
    star: 4,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Fundador @ Trorex",
    content:
      "Mis ventas aumentaron un 30% gracias a Curartech, ahora puedo ofrecer un servicio mas personalizado a mis clientes y enfocarme en lo que realmente importa, mi consulta medica.",
    image: "/images/testimonials/author-03.png",
    star: 4.5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonios"
          title="Lo que dicen nuestros clientes"
          paragraph="Nuestros clientes nos han dejado testimonios de su experiencia con nosotros."
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
