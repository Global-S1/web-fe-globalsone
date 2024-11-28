import s from "./hero-title-bg-right.module.css"

export const HeroTitleBgRight = () => {
    return (
        <div className={s.bg_container}>
            <div className={s.bg_line_one}></div>
            <div className={s.bg_line_two}></div>
            <div className={s.bg_line_three}></div>
        </div>
    )
}