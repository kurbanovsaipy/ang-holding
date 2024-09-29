'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";
import Store from '@/utils/Store';
import More from './More';


export default function Navigation() {
    
    const path = usePathname()

    return (
        <div className='nav'>
            {Store.navigation.slice(0, 5).map((el, i) => (
                el.anchor 
                ?<a key={i} href={el.link} className={`link ${path === el.link ? 'active' : ''}`}>{el.title}</a>
                :<Link key={i} href={el.link} className={`link ${path === el.link ? 'active' : ''}`}>{el.title}</Link>
            ))}

            {Store.navigation.length > 5
            ?<More />
            :<></>}
        </div>
    );
}