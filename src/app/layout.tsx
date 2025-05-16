import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Marketing Digital con IA",
  description:
    "Agencia de marketing digital con IA para consultorios medicos, genera minimo 10 nuevas consultas este mes!",
  keywords: [
    "curartech",
    "Agencia de marketing digital",
    "Agencia de marketing para consultorios medicos",
    "Chatbot con IA para consultorios medicos",
  ],
  openGraph: {
    title: "Marketing Digital con IA",
    description:
      "Agencia de marketing digital con IA para consultorios medicos, genera minimo 10 nuevas consultas este mes!",
    siteName: "Curartech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="!scroll-smooth">
      <GoogleTagManager gtmId="AW-17059503490" />
      <body suppressHydrationWarning={true}>
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
