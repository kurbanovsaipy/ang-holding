import Link from 'next/link';
import './css/header.scss';
import Navigation from './components/Navigation';
import ContactBlock from './components/ContactBlock';
import MobileBlock from './components/MobileBlock';
import Image from 'next/image';
import Api from '@/utils/Api';

export default function Header () {

    return (
        <header>
            <div className="container">

                <Link href={'/'} className="logo">
                    <img src={`${Api.url}/images/header.png`} alt="" />
                </Link>

                <Navigation />

                <ContactBlock />

                <MobileBlock />
                
            </div>
        </header>
    );
}