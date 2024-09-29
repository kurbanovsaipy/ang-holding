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
                    <Image 
                        src={`${Api.url}/images/header.svg`}
                        width={0} 
                        height={0} 
                        style={{height: '100%', width: 'auto'}}
                        priority={100}
                        unoptimized={true} 
                        alt=''
                    />
                </Link>

                <Navigation />

                <ContactBlock info={info}/>

                <MobileBlock info={info}/>
                
            </div>
        </header>
    );
}