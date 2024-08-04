'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Navigation() {
    
    const path = usePathname()

    return (
        <nav>
            <Link href={''} className={`link ${path === '' ? 'active' : ''}`}>Проекты</Link>
            <Link href={'/'} className={`link ${path === '' ? 'active' : ''}`}>Паркинг</Link>
            <Link href={'/mortgage'} className={`link ${path === '/mortgage' ? 'active' : ''}`}>Ипотека</Link>
            <Link href={'/news'} className={`link ${path === '/news' ? 'active' : ''}`}>Новости</Link>
            <Link href={'/about'} className={`link ${path === '/about' ? 'active' : ''}`}>О нас</Link>
        </nav>
    );
}