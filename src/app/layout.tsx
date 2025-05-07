import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curartech - Automatiza tu practica de medicina",
  description:
    "Automatiza tu practica de medicina con Curartech, la plataforma de automatización para consultas médicas. Gestiona calendarios, chats, citas, pacientes, etc.",
  keywords: [
    "curartech",
    "automatización para consultas médicas",
    "marketing para consultas médicas",
    "calendarios para doctores",
    "chats para doctores",
    "citas para doctores",
    "pacientes para doctores",
  ],
  openGraph: {
    title: "Curartech - Automatiza tu practica de medicina",
    description:
      "Automatiza tu practica de medicina con Curartech, la plataforma de automatización para consultas médicas. Gestiona calendarios, chats, citas, pacientes, etc.",
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
