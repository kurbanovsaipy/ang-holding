import Link from 'next/link';
import './css/header.scss';
import Navigation from './components/Navigation';
import ContactBlock from './components/ContactBlock';
import MobileBlock from './components/MobileBlock';
import Image from 'next/image';
import Api from '@/utils/Api';

export default function Header ({info}) {

    return (
        <header>
            <div className="container">

                <Link href={'/'} className="logo">
                    <Image src={`${Api.url}/images/header.png`} width={90} height={55} alt=''/>
                </Link>

                <Navigation />

                <ContactBlock info={info}/>

                <MobileBlock info={info}/>
                
            </div>
        </header>
    );
}