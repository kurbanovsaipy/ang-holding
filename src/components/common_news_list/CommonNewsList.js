import Api from '@/utils/Api';
import Card from './Card';
import './common_news_list.scss';

const getNews = async (path) => {
    const news = await Api.get(path)

    return news?.filter(el => el.active === 1)
}

export default async function CommonNewsList() {

    const news = await getNews('news/last?limit=3')

    return (
        <div className="news_list_block">
            
            {news?.length ? 
                news.map((el) => (
                    <Card el={el} key={el.id}/>
                ))
            :<></>}
            
        </div>
    )
}