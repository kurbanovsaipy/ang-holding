import Image from 'next/image';
import './news_details.scss';
import CommonNewsList from '@/components/common_news_list/CommonNewsList';
import Api from '@/utils/Api';
import Store from '@/utils/Store';

export async function generateMetadata() {
  
    let meta = await Api.getWithoutCache(`pages/info?path=/news`)
  
    if(meta) {
        return {
            title: meta?.title, 
            description: meta?.description,
            keywords: meta?.keywords,
            contentType: meta?.contentType,
            author: meta?.author,
            openGraph: {
                title: meta?.title,
                url: meta?.og_url,
                description: meta?.og_description,
                images: [
                  {
                    url: `${Api.url}/images/${meta?.image}`,
                    width: 500,
                    height: 400
                  }
                ],
                siteName: meta?.og_site_name
            }
        }
    }
}

export default async function Details({params}) {

    const detail = await Api.getData(`news/data/?id=${params.id}`)

    return (
        <div className='news_detail container'>
            
            <div className="head">
                <h1>{detail?.title}</h1>

                <p className="date">{Store.Date(detail?.date, 'dd.mm.yyyy')}</p>
            </div>

            <div className="main_image">
                <Image 
                    className='image'
                    src={`${Api.url}/images/${detail?.image}`}
                    alt=''
                    width={1300}
                    height={600}
                />
            </div>

            <div className="description" dangerouslySetInnerHTML={{__html: Store.markdown(detail?.description)}}></div>

            <h2 className="main_title">Будут вам интересны</h2>

            <CommonNewsList />
        </div>
    )
}