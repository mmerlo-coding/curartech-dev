"use client";
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import { sendGAEvent } from "@next/third-parties/google";

const Contact = () => {
  useEffect(() => {
    sendGAEvent("event", "conversion", {
      send_to: "AW-17059503490/2b2qCOvc1MMaEIK7zcY_",
      event_callback: "callback",
    });
  }, []);
  return (
    <section
      id="contact"
      className="container relative h-[1500px] pt-20 md:h-[1000px]"
    >
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
