import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Automatiza tu consultorio medico con IA",
  description:
    "IA para consultorios medicos, genera al menos 10 consultas nuevas este mes!",
  keywords: [
    "curartech",
    "Calendarios automatico para consultorios",
    "Sistema automatico con IA para consultorios medicos",
    "Chatbot con IA para consultorios medicos",
    "Asistente virtual para consultorios medicos",
  ],
  openGraph: {
    title: "Automatiza tu consultorio medico con IA",
    description:
      "IA para consultorios medicos, genera al menos 10 consultas nuevas este mes!",
    siteName: "Curartech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="!scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
          disableTransitionOnChange
        >
          <ToasterContext />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
        <GoogleTagManager gtmId="AW-17059503490" />
      </body>
    </html>
  );
}
