import Image from "next/image";
import Foco from "@/assets/icons/foco.png";
import TradingPlataform from "@/assets/images/trading-plataform.png";
import AppMobil from "@/assets/images/app-mobil.png";
import CrmPlataform from "@/assets/images/crm-plataform.png";
import ApiConnection from "@/assets/images/apis.png";
import Ecommerce from "@/assets/images/ecommerce.png";
import WindowCard from "@/components//WindowCard";
import { LeaveClear } from "@/assets/leavesComponents/LeaveClear";
import Section from "@/components/common/Section";

const WhatWeBuild = () => {
  return (
    <Section styles={{marginBottom: "20rem"}}>
      <Image src={Foco} alt="nosotros lo desarrollamos" className="w-28" />

      <h2 className="xl:w-[200%] text-center text-large xl:text-title-5 leading-tight mb-10">
        ¿Tienes una idea? <br />
        NOSOTROS LO DESARROLLAMOS <br />
        POR TÍ
      </h2>

      <WindowCard active border="left">
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-6 pt-8 xl:pt-28 px-3 xl:px-5 pb-4 xl:pb-10 relative">
        <LeaveClear
            style={{
              position: "absolute",
              top: "-14%",
              right: "-2.5%",
             
            }} />
          <div className="xl:col-start-1 xl:col-end-5 rounded-2xl border border-[#f4f4f500] bg-cards-producs">
            <div className="w-full h-[250px] xl:h-[300px]">
              <Image src={TradingPlataform} alt="Plataforma de Trading" />
            </div>
            <div className="p-5">
              <h3 className="mb-3 mt-4 text-lg ">Plataforma de Traiding</h3>
              <p className="text-base font-futura">
                All your data and finances in one place to provide quick answers
                and make decisions instantly.
              </p>
            </div>
          </div>
          <div className="xl:col-start-5 xl:col-end-9 rounded-2xl border border-[#f4f4f519] bg-cards-producs">
            <div className="w-full h-[250px] xl:h-[300px]">
              <Image src={AppMobil} alt="Applicaciones mobiles" />
            </div>
            <div className="p-5">
              <h3 className="mb-3 mt-4 text-lg ">Aplicaciones Mobiles</h3>
              <p className="text-base font-futura">
                Have full control of your business finances on the go using our
                iOS/Android mobile apps. Because, you know, it’s 2023.
              </p>
            </div>
          </div>
          <div className="xl:col-start-9 xl:col-end-13 rounded-2xl border border-[#f4f4f500] bg-cards-producs">
            <div className="w-full h-[250px] xl:h-[300px]">
              <Image src={CrmPlataform} alt="plataformas CRM" />
            </div>
            <div className="p-5">
              <h3 className="mb-3 mt-4 text-lg ">
                CRM para Negocios y Empresas
              </h3>
              <p className="text-sm font-futura">
                Choose the alerts you need and receive them via email, mobile or
                Slack. Review and take action in one click.{" "}
              </p>
            </div>
          </div>
          <div className="xl:col-start-1 xl:col-end-8 rounded-2xl border border-[#f4f4f500] bg-cards-producs">
            <div className="w-full h-[250px] xl:h-[300px]">
              <Image src={ApiConnection} alt="Conexiones API" />
            </div>
            <div className="p-5">
              <h3 className="mb-3 mt-10 text-lg ">
                Conección entre diferentes Apps
              </h3>
              <p className="text-base font-futura">
                Bring your data with our built-in integrations for accounting,
                revenue tools and banking.
              </p>
            </div>
          </div>
          <div className="xl:col-start-8 xl:col-end-13 rounded-2xl border border-[#f4f4f500] bg-cards-producs">
            <div className="w-full h-[250px] xl:h-[300px]">
              <Image src={Ecommerce} alt="ecommerce" />
            </div>
            <div className="p-5">
              <h3 className="mb-3 mt-10 text-lg ">Ecommerce</h3>
              <p className="text-base font-futura">
                Lightning fast. Shortcuts for everything. Command+K on Mac,
                Ctrl+K on Windows. Dark mode.
              </p>
            </div>
          </div>
        </div>
      </WindowCard>
    </Section>
  );
};

export default WhatWeBuild;
