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
import { ROOT_PATH } from "@/shared/constants/url";

interface Props {
  content: NavigationLinks;
  socialMedia: SocialMedia;
}

export const Footer = ({ content, socialMedia }: Props) => {
  const router = useRouter();
  const handleServices = (e: any) => {
    e.preventDefault();
    const currentRoute =
      typeof window !== "undefined" ? window.location.pathname : null;
    console.log("currentRoute", currentRoute);
    if (currentRoute) {
      window.location.href = `${
        ROOT_PATH?.length ? ROOT_PATH : "/"
      }#services-section`;
    }
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
