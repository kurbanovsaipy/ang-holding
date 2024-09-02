import Api from '@/utils/Api';
import './css/news.scss';
import NewsContent from './NewsContent';

export async function generateMetadata() {
  
    let meta = await Api.getWithoutCache(`pages/info?path=/news`)
  
    if(meta) {
        return {
            title: meta.title, 
            description: meta.description,
            keywords: meta.keywords,
            contentType: meta.contentType,
            author: meta.author,
            openGraph: {
                title: meta.og_title,
                url: meta.og_url,
                description: meta.og_description,
                images: [
                  {
                    url: `${Api.url}/images/${meta.og_image}`,
                    width: 500,
                    height: 400
                  }
                ],
                siteName: meta.og_site_name
            }
        }
    }
}

export default function News() {
    return (
        <div className="news container">

            <NewsContent />
            
        </div>
    )
}