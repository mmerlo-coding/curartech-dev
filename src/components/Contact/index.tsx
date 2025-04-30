import SectionTitle from "../Common/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="container relative h-[1000px]">
      <SectionTitle
        subtitle="Contacto"
        title="Agenda un demo con nosotros!"
        paragraph="Agenda un demo con nosotros para conocer mas sobre nuestros servicios y como podemos ayudarte a impulsar tu negocio."
        width="640px"
        center
      />
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/zF1BwcT9OjJuFkIg1T47"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        id="zF1BwcT9OjJuFkIg1T47_1745987915916"
      ></iframe>
    </section>
  );
};

export default Contact;
