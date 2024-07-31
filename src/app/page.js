import Link from 'next/link';
import MainSlider from './home/components/MainSlider';
import './home/css/home.scss'
import Projects from './home/components/Projects';
import Parking from './home/components/Parking';

export default function Home() {
  console.log('hi')
  return (
    <div className='home'>
       
      <MainSlider />

      <Projects />

      <Parking />

    </div>
  );
}
