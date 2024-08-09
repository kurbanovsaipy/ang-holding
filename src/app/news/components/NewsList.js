
import NewsListCard from "./NewsListCard";

export default function NewsList({news}) {

    return (
        <div className="news_list_block_list">

            {news?.length ? 
                <>
                    {news.map((el) => (
                        <NewsListCard el={el} key={el.id}/>
                    ))}
                </>
            :
                <div className="no_items"></div>
            }
            
        </div>
    )
}