'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Navigation() {
    
    const path = usePathname()

    return (
        <nav>
            <Link href={''} className={`link ${path === '' ? 'active' : ''}`}>Проекты</Link>
            <Link href={'/'} className={`link ${path === '' ? 'active' : ''}`}>Паркинг</Link>
            <Link href={'/'} className={`link ${path === '' ? 'active' : ''}`}>Ипотека</Link>
            <Link href={'/'} className={`link ${path === '' ? 'active' : ''}`}>Новости</Link>
            <Link href={'/'} className={`link ${path === '' ? 'active' : ''}`}>О нас</Link>
        </nav>
    );
}