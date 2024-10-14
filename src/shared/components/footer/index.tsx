import Link from "next/link";
import {
  NavigationLinks,
  SocialMedia,
} from "@/shared/interfaces/layout.interface";
import { SearchInput } from "./search-input";
import { TermsFooter } from "./terms";
import s from "./footer.module.css";

interface Props {
  content: NavigationLinks;
  socialMedia: SocialMedia;
}

export const Footer = ({ content, socialMedia }: Props) => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__menu__container}>
        <SearchInput route={content.home.route} />
        <div className={s.footer__linklist__container}>
          <Link href={content.home.route}>{content.home.title}</Link>
          <Link href={content["about-us"].route}>
            {content["about-us"].title}
          </Link>
          <button>{content.services.title}</button>
          <Link href={content["contact-us"].route}>
            {content["contact-us"].title}
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
