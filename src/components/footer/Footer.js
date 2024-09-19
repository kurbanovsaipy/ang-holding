import Link from "next/link";
import './css/footer.scss'
import Api from "@/utils/Api";
import Image from "next/image";
import NavigationHead from "./NavigationHead";
import Store from "@/utils/Store";

const getSocials = async () => {
    let res = await Api.getWithoutCache('socials/all')

    if(res) {
        return res.filter(el => el.active === 1)
    } else {
        return false
    }
}

const getPbNavigation = async (type) => {
    let res = await Api.get('pb/house')

    if(res) {
        return res.filter(el => el.isArchive === false && el.type === type).slice(0, 5)
    }
}


export default async function Footer({info}) {

    const socials = await getSocials()
    const projects = await getPbNavigation('RESIDENTIAL')
    const parking = await getPbNavigation('PARKING')

    return (
        <footer>
            <div className="container">

                <div className="content_flex">

                    <div className="info">

                        <div className="info_item">
                            <Link href={'/'} className="logo footer">
                                <Image 
                                    src={`${Api.url}/images/footer`} 
                                    // src={'/images/logo.10.svg'}
                                    width={0} 
                                    height={0} 
                                    priority={100}
                                    unoptimized={true} 
                                    style={{height: 'auto', width: 'auto', minWidth: '160px', maxWidth: '220px'}} 
                                    alt=""
                                />
                            </Link>
                            <a href="https://go.2gis.com/m67zw" className="contacts_item">
                                Анг-холдинг, строительная компания, 17а комплекс, 07, Набережные Челны — 2ГИС
                            </a>

                        </div>

                        <div className="info_item">
                            <div className="social_block">

                                {socials?.length ? 
                                    socials.map((el) => (
                                        <a href={el.link} className="" key={el.id}>
                                            <div className="icon_wrapper" dangerouslySetInnerHTML={{__html: el.icon}}></div>
                                        </a>
                                    ))
                                :<></>}
                            </div>

                            <div className="phone">
                                <a href={`tel:+${(info?.phone)?.replace(/\D/g, '')}`} className="tel">
                                    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                                        <g id="SVGRepo_iconCarrier"> <path d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z"/> </g>

                                    </svg>
                                    {info?.phone}
                                </a>
                            </div>

                        </div>

                    </div>


                    <nav className="footer_nav">

                        <div className="navigation">
                            <NavigationHead image={'/icons/arrow_down_white.svg'} title={'Проекты'}/>
                            <div className="nav_wrapper">
                                <nav>
                                    {projects?.length ? 
                                        <>
                                            {projects.map((el, i) => (
                                                <Link key={i} href={''} className={`link`}>{el.title}</Link>
                                            ))}
                                        </>
                                    :
                                        <></>
                                    }
                                    <a href={'/#projects'} className={`link`}>Все проекты</a>
                                </nav>
                            </div>
                                
                        </div>

                        <div className="navigation">
                            <NavigationHead image={'/icons/arrow_down_white.svg'} title={'Паркинг и кладовые'}/>
                            <div className="nav_wrapper">
                                <nav>
                                    {parking?.length ? 
                                        <>
                                            {parking.map((el, i) => (
                                                <a key={i} href={`/#/catalog/house/${el?.id}/smallGrid?filter=property.status:AVAILABLE`} className={`link`}>{el.title}</a>
                                            ))}
                                        </>
                                    :
                                        <></>
                                    }
                                    <a href={'/#parking'} className={`link`}>Все паркинги</a>
                                </nav>
                            </div>
                                
                        </div>

                        <div className="navigation">
                            <NavigationHead image={'/icons/arrow_down_white.svg'} title={'Карта сайта'}/>
                            <div className="nav_wrapper">
                                <nav>
                                    <Link href={''} className={`link`}>Главная</Link>
                                    {Store.navigation.map((el, i) => (
                                        el.anchor 
                                        ?<a href={el.link} className={`link`}>{el.title}</a>
                                        :<Link href={el.link} className={`link`}>{el.title}</Link>
                                    ))}
                                </nav>
                            </div>
                                
                        </div>

                    </nav>

                </div>
            </div>
        </footer>
    );
}