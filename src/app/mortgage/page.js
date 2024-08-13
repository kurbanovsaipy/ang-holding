import CommonNewsList from '@/components/common_news_list/CommonNewsList'
import Calculator from './components/calculator/Calculator'
import Hero from './components/Hero'
import './mortgage.scss'
import Api from '@/utils/Api'

export async function generateMetadata() {
  
    let meta = await Api.getWithoutCache(`pages/info?path=/mortgage`)
  
    if(meta) {
      return {title: meta.title, description: meta.description}
    }
}

export default function Mortgage() {
    return (
        <div className="mortgage">
            <Hero />

            <div className="container">
                
                <Calculator />

                <h2 className="main_title">Новости</h2>

                <CommonNewsList />
            </div>
        </div>
    )
}