'use client'
import Head from "./components/Head";
import NewsList from "./components/NewsList";
import ShowMore from "./components/ShowMore";
import LoadSkeleton from "./components/LoadSkeleton";
import useNews from "./hooks/useNews";

export default function NewsContent() {

    const {changeSort, params, news, pageLoad, showMore, total} = useNews()

    return (
        <>
        <Head changeSort={changeSort} sort={params.sort}/>

            <NewsList news={news}/>

            <LoadSkeleton />

            {news?.length && params.page < total.pages ? 
                <ShowMore showMore={showMore}/>
                :
                <></>
            }
        </>
    )
}