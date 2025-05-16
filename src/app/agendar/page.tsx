import Contact from "@/components/Contact";
import Script from "next/script";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function AgendarCitaPage() {
  return (
    <main>
      <Contact />
      <CallToAction />
      <Testimonials />
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id={process.env.GHL_CALENDAR_ID}
        strategy="afterInteractive"
      />
    </main>
  );
}
