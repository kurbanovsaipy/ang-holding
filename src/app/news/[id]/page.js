import Image from 'next/image';
import './news_details.scss';
import CommonNewsList from '@/components/common_news_list/CommonNewsList';
import Api from '@/utils/Api';
import Store from '@/utils/Store';

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

            <p className="description" dangerouslySetInnerHTML={{__html: Store.markdown(detail?.description)}}></p>

            <h2 className="main_title">Будут вам интересны</h2>

            <CommonNewsList />
        </div>
    )
}