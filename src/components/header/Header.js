import Link from 'next/link';
import './css/header.scss';
import Navigation from './components/Navigation';
import ContactBlock from './components/ContactBlock';
import MobileBlock from './components/MobileBlock';

export default function Header () {

    return (
        <header>
            <div className="container">

                <Link href={'/'} className="logo">
                    LOGO.
                </Link>

                <Navigation />

                <ContactBlock />

                <MobileBlock />
                
            </div>
        </header>
    );
}