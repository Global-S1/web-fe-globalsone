import s from "./hero-title-bg-left.module.css"

export const HeroTitleBgLeft = () => {
    return (
            <div className={s.bg_container}>
                <div className={s.bg_line_one}></div>
                <div className={s.bg_line_two}></div>
                <div className={s.bg_line_three}></div>
            </div>
    )
}