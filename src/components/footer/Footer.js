import Link from "next/link";
import './css/footer.scss'
import Api from "@/utils/Api";
import Image from "next/image";


export default function Footer({info}) {
    return (
        <footer>
            <div className="container">

                <div className="content_flex">

                    <div className="info">

                        <div className="info_item">
                            <Link href={'/'} className="logo footer">
                                <Image src={`${Api.url}/images/footer.png`} width={160} height={80} alt=""/>
                            </Link>

                            <p>Анг-холдинг, строительная компания, 17а комплекс, 07, Набережные Челны — 2ГИС</p>

                        </div>

                        <div className="info_item">
                            <div className="social_block">
                                <a href="" className="footer_icon_telegram"></a>
                                <a href="" className="footer_icon_vk"></a>
                                <a href="" className="footer_icon_whatsapp"></a>
                            </div>

                            <div className="phone">
                                <a href={`tel:${info?.phone}`} className="tel">
                                    {info?.phone}
                                </a>
                            </div>

                        </div>

                    </div>


                    <nav className="footer_nav">

                        <div className="navigation">
                            <h5 className="navigation_head">Проекты
                                <Image
                                    src='/icons/arrow_down_white.svg'
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="arrow"
                                />
                            </h5>
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
                            <h5 className="navigation_head">Паркинг и кладовые
                                <Image
                                    src='/icons/arrow_down_white.svg'
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="arrow"
                                />
                            </h5>
                            <nav>
                                <Link href={''} className={`link`}>Название проекта 1</Link>
                                <Link href={''} className={`link`}>Название проекта 2</Link>
                                <Link href={''} className={`link`}>Название проекта 3</Link>
                                <Link href={''} className={`link`}>Название проекта 4</Link>
                                <Link href={''} className={`link`}>Название проекта 5</Link>
                            </nav>
                        </div>

                        <div className="navigation">
                            <h5 className="navigation_head">Карта сайта
                                <Image
                                    src='/icons/arrow_down_white.svg'
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="arrow"
                                />
                            </h5>
                            <nav>
                                <Link href={''} className={`link`}>Главная</Link>
                                <Link href={''} className={`link`}>Проекты</Link>
                                <Link href={''} className={`link`}>Паркинг</Link>
                                <Link href={''} className={`link`}>Ипотека</Link>
                                <Link href={''} className={`link`}>О нас</Link>
                            </nav>
                        </div>

                    </nav>

                </div>
            </div>
        </footer>
    );
}