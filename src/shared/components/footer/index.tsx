"use client";
import Link from "next/link";
import {
  NavigationLinks,
  SocialMedia,
} from "@/shared/interfaces/layout.interface";
import { SearchInput } from "./search-input";
import { TermsFooter } from "./terms";
import s from "./footer.module.css";
import { useRouter } from "next/navigation";

interface Props {
  content: NavigationLinks;
  socialMedia: SocialMedia;
}

export const Footer = ({ content, socialMedia }: Props) => {
  const router = useRouter();
  const handleServices = () => {
    console.log("handleServices")
    router.push("/");
    setTimeout(() => {
      document
        .getElementById("services-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);

  };
  const handlerHome = () => {
    router.push("/");
  };

  return (
    <footer className={s.footer}>
      <div className={s.footer__menu__container}>
        <SearchInput route={content.home.route} />
        <div className={s.footer__linklist__container}>
          <button className={s.link__style} onClick={handlerHome}>
            {content.home.title}
          </button>
          <Link className={s.link__style} href={content.aboutUs.route}>
            {content.aboutUs.title}
          </Link>
          <button className={s.link__style} onClick={handleServices}>
            {content.services.title}
          </button>
          <Link className={s.link__style} href={content.contactUs.route}>
            {content.contactUs.title}
          </Link>
        </div>
      </div>
      <TermsFooter
        facebook={socialMedia.facebook}
        instagram={socialMedia.instagram}
        linkedin={socialMedia.linkedin}
      />
    </footer>
  );
};
