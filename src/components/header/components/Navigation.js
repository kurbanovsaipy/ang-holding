'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Navigation() {
    
    const path = usePathname()

    return (
        <nav>
            <a href={'/#projects'} className={`link ${path === '/#projects' ? 'active' : ''}`}>Проекты</a>
            <a href={'/#parking'} className={`link ${path === '/#parking' ? 'active' : ''}`}>Паркинг</a>
            <Link href={'/mortgage'} className={`link ${path === '/mortgage' ? 'active' : ''}`}>Ипотека</Link>
            <Link href={'/news'} className={`link ${path === '/news' ? 'active' : ''}`}>Новости</Link>
            <Link href={'/about'} className={`link ${path === '/about' ? 'active' : ''}`}>О нас</Link>
        </nav>
    );
}