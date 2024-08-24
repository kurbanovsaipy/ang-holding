import CommonNewsList from '@/components/common_news_list/CommonNewsList'
import Calculator from './components/calculator/Calculator'
import Hero from './components/Hero'
import './mortgage.scss'
import Api from '@/utils/Api'

export async function generateMetadata() {
  
    let meta = await Api.getWithoutCache(`pages/info?path=/mortgage`)
  
    if(meta) {
        return {
            title: meta.title, 
            description: meta.description,
            keywords: meta.keywords,
            contentType: meta.contentType,
            author: meta.author
        }
    }
}

export default async function Mortgage() {

    const mortgage = await Api.get('calculator/info')

    return (
        <div className="mortgage">
            <Hero title={mortgage?.title} button={mortgage?.button} description={mortgage?.description} image={mortgage?.image}/>

            <div className="container">
                
                <Calculator mortgage={mortgage?.list}/>

                <h2 className="main_title">Новости</h2>

                <CommonNewsList />
            </div>
        </div>
    )
}