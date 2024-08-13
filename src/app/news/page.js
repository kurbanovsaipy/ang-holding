import Api from '@/utils/Api';
import './css/news.scss';
import NewsContent from './NewsContent';

export async function generateMetadata() {
  
    let meta = await Api.getWithoutCache(`pages/info?path=/news`)
  
    if(meta) {
      return {title: meta.title, description: meta.description}
    }
}

export default function News() {
    return (
        <div className="news container">

            <NewsContent />
            
        </div>
    )
}