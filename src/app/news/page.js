import { Suspense } from "react";
import Head from "./components/Head";
import NewsList from "./components/NewsList";
import './css/news.scss';
import LoadSkeleton from "./components/LoadSkeleton";

export default function News() {
    return (
        <div className="news container">

            <Head />

            <Suspense fallback={<LoadSkeleton />}>
                <NewsList />
            </Suspense>
            
        </div>
    )
}