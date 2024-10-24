"use client";
import { LogoMobile } from "@/assets/header/pictures/LogoMobile";
import { NavigationLinks } from "@/shared/interfaces/layout.interface";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContactBtn } from "../contact-btn";
import s from "./header-mobile.module.css";
import { ModalMobileNav } from "../modal-mobile-nav";
import { HeaderMobileProvider } from "./context/header-provider";

interface Props {
  content: NavigationLinks;
}

export const HeaderMobile = ({ content }: Props) => {
  const router = useRouter();
  const handleServices = () => {
    router.push("/");
    setTimeout(() => {
      document
        .getElementById("services-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <HeaderMobileProvider>
      <header className={s.headerMobile}>
        <div className={s.headerMobile__container}>
          <Link href={"/"} className={s.logo__mobile}>
            <LogoMobile />
          </Link>
          <ModalMobileNav content={content} />
          <div className={s.headerMobile__contactUsBtn}>
            <ContactBtn route="/contact-us" title="Contáctanos" />
          </div>
        </div>
      </header>
    </HeaderMobileProvider>
  );
};
