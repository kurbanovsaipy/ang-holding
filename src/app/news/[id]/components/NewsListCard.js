import Image from "next/image";
import Link from "next/link";
import news from './../../images/news.jpg'

export default function NewsListCard() {
    <div className="news_card">

        <Link href={'/news/1'} className="cover">

            <Image 
                src={news} 
                alt=""
                width={400}
                height={214}
                className="image"
            />

        </Link>

        <p className="date">05.04.2023</p>

        <div className="content">

            <Link href={'/news/1'} className="main_title">Заголовок новости</Link>
            <Link href={'/news/1'} className="description"> Короткое описание с ограничение в 300 символов. Описание формируется из первых слов самой статьи </Link>
        
        </div>
        
    </div>
}