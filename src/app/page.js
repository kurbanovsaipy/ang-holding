import MainSlider from './home/components/MainSlider';
import './home/css/home.scss'
import Projects from './home/components/Projects';
import Parking from './home/components/Parking';
import Api from '@/utils/Api';
import Info from './about/components/Info';


export async function generateMetadata() {
  
  let meta = await Api.getWithoutCache(`pages/info?path=/`)

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

export default async function Home() {

  const slider = await Api.get('slider/list')
  
  return (
    <div className='home'>
       
      <MainSlider slider={slider}/>

      <Projects />

      <Parking />

      <div className="container">
        <Info />
      </div>

    </div>
  );
}
