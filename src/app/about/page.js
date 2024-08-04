import Hero from './components/Hero';
import AboutDescription from './components/AboutDescription';
import Statistick from './components/Statistick';
import Projects from './components/Projects';
import Awards from './components/Awards';

import './about.scss';
import CommonNewsList from '@/components/common_news_list/CommonNewsList';
import Info from '../home/components/Info';

export default function About () {
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