import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FoodBit - Automatiza tu restaurante con IA",
  description:
    "FoodBit es un chatbot con IA para restaurantes que te permite automatizar tus procesos y aumentar tus ventas.",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="681026ace15c38559a636bcb"
        strategy="afterInteractive"
      />
    </main>
  );
}
