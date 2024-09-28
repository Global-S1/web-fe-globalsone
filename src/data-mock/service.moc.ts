import { VideoPlayer } from "@/assets/home/our-services/icons/VideoPlayer";
import { Ticket } from "@/assets/home/our-services/icons/Ticket";
import { CpuIcon } from "@/assets/home/our-services/icons/CpuIcon";
import { PeopleAvatars } from "@/assets/home/icons/PeopleAvatars";
import TradingPlataform from "@/assets/images/trading-plataform.png";
import AppMobil from "@/assets/images/app-mobil.png";
import CrmPlataform from "@/assets/images/crm-plataform.png";
import ApiConnection from "@/assets/home/pictures/apps-group.png";
import Ecommerce from "@/assets/images/ecommerce.png";

export const services = [
  {
    title: "Diseño web",
    content: "Your journey to finding the perfect prop",
    icon: VideoPlayer,
  },
  {
    title: "UX/UI",
    content: "Your journey to finding the perfect prop",
    icon: Ticket,
  },
  {
    title: "Desarrollo de Software",
    content: "Your journey to finding the perfect prop",
    icon: CpuIcon,
  },
  {
    title: "Consultoría",
    content: "Your journey to finding the perfect prop",
    icon: PeopleAvatars,
  },
];

export const ourService = [
  {
    title: "Plataforma de Traiding",
    content:
      "All your data and finances in one place to provide quick answers and make decisions instantly.",
    image: TradingPlataform,
    altContent: "Plataforma de Trading",
  },
  {
    title: "Aplicación Móvil",
    content:
      " Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023.",
    image: AppMobil,
    altContent: "Aplicación Móvil",
  },
  {
    title: "CRM para Negocios y Empresas",
    content:
      "Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.",
    image: CrmPlataform,
    altContent: "Plataforma CRM",
  },
  {
    title: "Conección entre diferentes Apps",
    content:
      "Bring your data with our built-in integration for accounting, revenue tools and banking",
    image: ApiConnection,
    altContent: "APIs",
    // ColumSpan: 7,
  },
  {
    title: "Ecommerce",
    content:
      "All your data and finances in one place to provide quick answers and make decisions instantly.",
    image: Ecommerce,
    altContent: "Ecommerce",
    // ColumSpan: 5,
  },
];
