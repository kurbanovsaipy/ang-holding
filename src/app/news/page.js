'use client'
import Head from "./components/Head";
import NewsList from "./components/NewsList";
import ShowMore from "./components/ShowMore";
import Loading from "../loading";
import LoadSkeleton from "./components/LoadSkeleton";
import useNews from "./hooks/useNews";

import './css/news.scss';

export default function News() {

    const {changeSort, params, news, pageLoad, showMore, total} = useNews()

    return (
        <div className="news container">

            <Head changeSort={changeSort} sort={params.sort}/>

            {pageLoad ?
                <>
                    <NewsList news={news}/>

                    <LoadSkeleton />

                    {news?.length && params.page < total.pages ? 
                        <ShowMore showMore={showMore}/>
                        :
                        <></>
                    }
                </>
            :
                <Loading />
            }
            
        </div>
    )
}