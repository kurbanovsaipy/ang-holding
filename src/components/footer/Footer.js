import Link from "next/link";
import './css/footer.scss'
import Api from "@/utils/Api";


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="info">
                    <Link href={'/'} className="logo footer">
                        <img src={`${Api.url}/images/footer.png`} alt="" />
                    </Link>
                    <div className="phone">
                        <a href="tel:+7(8552)23‒00‒44" className="tel">
                            +7 (8552) 23‒00‒44
                        </a>
                    </div>
                    <div className="social_block">
                        <a href="" className="footer_icon_telegram"></a>
                        <a href="" className="footer_icon_vk"></a>
                        <a href="" className="footer_icon_whatsapp"></a>
                    </div>
                </div>

                <div className="navigation">
                    <h5 className="navigation_head">Проекты</h5>
                    <nav>
                        <Link href={''} className={`link`}>Название проекта 1</Link>
                        <Link href={''} className={`link`}>Название проекта 2</Link>
                        <Link href={''} className={`link`}>Название проекта 3</Link>
                        <Link href={''} className={`link`}>Название проекта 4</Link>
                        <Link href={''} className={`link`}>Название проекта 5</Link>
                        <Link href={''} className={`link`}>Название проекта 6</Link>
                    </nav>
                </div>

                <div className="navigation">
                    <h5 className="navigation_head">Паркинг и кладовые</h5>
                    <nav>
                        <Link href={''} className={`link`}>Название проекта 1</Link>
                        <Link href={''} className={`link`}>Название проекта 2</Link>
                        <Link href={''} className={`link`}>Название проекта 3</Link>
                        <Link href={''} className={`link`}>Название проекта 4</Link>
                        <Link href={''} className={`link`}>Название проекта 5</Link>
                    </nav>
                </div>

                <div className="navigation">
                    <h5 className="navigation_head">Карта сайта</h5>
                    <nav>
                        <Link href={''} className={`link`}>Главная</Link>
                        <Link href={''} className={`link`}>Проекты</Link>
                        <Link href={''} className={`link`}>Паркинг</Link>
                        <Link href={''} className={`link`}>Ипотека</Link>
                        <Link href={''} className={`link`}>О нас</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}