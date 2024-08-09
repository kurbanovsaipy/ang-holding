import Api from '@/utils/Api';
import Card from './Card';
import './common_news_list.scss';

export default async function CommonNewsList() {

    const news = await Api.get('news/last?limit=3')

    return (
        <div className="news_list_block">
            
            {news?.length ? 
                <>
                    {news.map((el) => (
                        <Card el={el} key={el.id}/>
                    ))}
                </>
            :
                <></>
            }
            
            
        </div>
    )
}