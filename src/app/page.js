import Link from 'next/link';
import MainSlider from './home/components/MainSlider';
import './home/css/home.scss'
import Projects from './home/components/Projects';
import Parking from './home/components/Parking';
import Api from '@/utils/Api';


export async function generateMetadata() {
  
  let meta = await Api.getWithoutCache(`pages/info?path=/`)

  if(meta) {
    return {title: meta.title, description: meta.description}
  }
}

export default function Home() {
  
  return (
    <div className='home'>
       
      <MainSlider />

      <Projects />

      <Parking />

    </div>
  );
}
