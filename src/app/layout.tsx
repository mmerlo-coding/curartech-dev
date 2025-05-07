import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Curartech - Servicios de automatizacion y marketing para consultorios medicos, odontologicos y quiropracticos",
  description:
    "Servicios de automatizacion y marketing para consultorios medicos, odontologicos y quiropracticos con Curartech, la plataforma de automatización para consultas médicas. Gestiona calendarios, chats, citas, pacientes, etc.",
  keywords: [
    "curartech",
    "Soluciones automatizadas para consultorios médicos",
    "marketing para consultorios médicos",
    "calendarios para doctores",
    "chatbot de IA para doctores",
    "agendamiento de consultas automatizadas",
    "optimizar de Google my business para mi negocio",
    "automatización de citas para consultorios médicos",
    "automatización de citas para consultorios odontologicos",
    "automatización de citas para consultorios quiroprácticos",
  ],
  openGraph: {
    title:
      "Curartech - Servicios de automatizacion y marketing para consultorios medicos, odontologicos y quiropracticos",
    description:
      "Servicios de automatizacion y marketing para consultorios medicos, odontologicos y quiropracticos con Curartech, la plataforma de automatización para consultas médicas. Gestiona calendarios, chats, citas, pacientes, etc.",
    siteName: "Curartech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="es">
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <ToasterContext />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
