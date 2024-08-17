'use client'

import Head from "./components/Head";
import NewsList from "./components/NewsList";
import ShowMore from "./components/ShowMore";
import LoadSkeleton from "./components/LoadSkeleton";
import useNews from "./hooks/useNews";
import LoadSkeletCard from "./components/LoadSkeletCard";

export default function NewsContent() {

    const {changeSort, params, news, pageLoad, showMore, total} = useNews()

    return (
        <>
        <Head changeSort={changeSort} sort={params.sort}/>

            {pageLoad ?
                <NewsList news={news}/>
            :
                <div className="load_skelet init">
                    <LoadSkeletCard />
                    <LoadSkeletCard />
                    <LoadSkeletCard />
                    <LoadSkeletCard />
                    <LoadSkeletCard />
                    <LoadSkeletCard />
                </div>
            }

            <LoadSkeleton />

            {news?.length && params.page < total.pages ? 
                <ShowMore showMore={showMore}/>
                :
                <></>
            }
        </>
    )
}