
import Api from "@/utils/Api";
import Head from "./components/Head";
import NewsList from "./components/NewsList";
import './css/news.scss';

export default async function News() {

    const news = await Api.get('news/all')

    return (
        <div className="news container">

            <Head />

            <NewsList news={news}/>
            
        </div>
    )
}