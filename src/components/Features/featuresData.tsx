import { Feature } from "@/types/feature";
import { FiInbox } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <RiRobot2Line size={26} />,
    title: "Chatbot con IA",
    paragraph:
      "Atiende consultas y agenda citas automáticamente, disponible 24/7 para tus pacientes.",
    image: "/images/about/chatbot-demo.png",
  },
  {
    id: 2,
    icon: <FiInbox size={26} />,
    title: "Inbox Universal",
    paragraph:
      "Centraliza mensajes de WhatsApp, Email, Facebook e Instagram en un solo lugar para una gestión eficiente.",
    image: "/images/about/inbox-demo.png",
  },
  {
    id: 3,
    icon: <FiCalendar size={26} />,
    title: "Calendario Integrado",
    paragraph:
      "Sincronización con Google Calendar y Outlook para una gestión eficiente de citas.",
    image: "/images/about/calendario-demo.png",
  },
  {
    id: 4,
    icon: <FaSearch size={26} />,
    title: "Optimización SEO",
    paragraph:
      "Mejora tu posicionamiento en buscadores y aumenta tu visibilidad online.",
    image: "/images/about/gmb-demo.png",
  },
  {
    id: 5,
    icon: <CgWebsite size={26} />,
    title: "Sitio Web Profesional",
    paragraph:
      "Diseñado para convertir visitantes en pacientes, con un enfoque en la experiencia del usuario.",
    image: "/images/about/sites-demo.png",
  },
];

export default featuresData;
