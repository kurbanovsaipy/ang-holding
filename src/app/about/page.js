import Hero from './components/Hero';
import AboutDescription from './components/AboutDescription';
import Statistick from './components/Statistick';
import Projects from './components/Projects';
import Awards from './components/Awards';
import CommonNewsList from '@/components/common_news_list/CommonNewsList';
import Info from './components/Info';
import Api from '@/utils/Api';

import './about.scss';

export async function generateMetadata() {
  
    let meta = await Api.getWithoutCache(`pages/info?path=/about`)
  
    if(meta) {
        return {
            title: meta?.title, 
            description: meta?.description,
            keywords: meta?.keywords,
            contentType: meta?.contentType,
            author: meta?.author,
            openGraph: {
                title: meta?.og_title,
                url: meta?.og_url,
                description: meta?.og_description,
                images: [
                  {
                    url: `${Api.url}/images/${meta?.og_image}`,
                    width: 500,
                    height: 400
                  }
                ],
                siteName: meta?.og_site_name
            }
          }
    }
}

export default async function About () {

    return (
        <div className='about'>
            <Hero />

            <AboutDescription />

            <Statistick />

            <Projects />

            <Awards />

            <div className="container">
                <h2 className="main_title">Новости</h2>

                <CommonNewsList />

                <Info />
            </div>
        </div>
    )
}