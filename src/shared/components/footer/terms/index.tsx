import Link from "next/link"
import s from "./terms.module.css"
import { FC } from "react"
import { BtnFacebook } from "@/assets/social-media/icons/BtnFacebook"
import { BtnInstagram } from "@/assets/social-media/icons/instagram"
import { BtnLinkedin } from "@/assets/social-media/icons/BtnLinkedin"

interface Prop{
    facebook: string,
    instagram: string,
    linkedin: string
}

export const TermsFooter:FC<Prop> = ({facebook, instagram, linkedin}) => {
    return (
        <div className={s.footer__terms__container}>
        <div>
          <div className={s.social__text__container}>
            <h4>@2023 Global S1. All Rights Reserved.</h4>
            <Link href="/terms-conditions">
              <h4>Terms & Conditions</h4>
            </Link>
          </div>
          <div className={s.social__icons__container}>
            <Link href={facebook} className={s.social__media__icon}>
              <BtnFacebook />
            </Link>
            <Link
              href={instagram}
              className={s.social__media__icon}
            >
              <BtnInstagram />
            </Link>
            <Link href={linkedin} className={s.social__media__icon}>
              <BtnLinkedin />
            </Link>
          </div>
        </div>
      </div>
    )
}