'use client'

import './css/menu.scss';

import Store from "@/utils/Store"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react"

export default function Menu() {

    const path = usePathname()
    const [isOpen, setIsOpen] = useState('close')
    Store.useListener('menu', setIsOpen)

    const closeMenu = () => {
        setIsOpen('close')
        Store.setListener('menuBurger', false)
    }

    useEffect(() => {

        if(isOpen === 'open') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }

        window.addEventListener('mousedown', closeMenu)

        return () => {
            window.removeEventListener('mousedown', closeMenu)
        }

    }, [isOpen])

    return (
        <div className={`menu_wrapper ${isOpen}`} onMouseDown={(e) => e.stopPropagation()}>
            <div className="menu">
                <Link href={'/#projects'} className={`menu_link ${path === '/#projects' ? 'active' : ''}`} onMouseDown={closeMenu}>Проекты</Link>
                <Link href={'/#parking'} className={`menu_link ${path === '/#parking' ? 'active' : ''}`} onMouseDown={closeMenu}>Паркинг</Link>
                <Link href={'/mortgage'} className={`menu_link ${path === '/mortgage' ? 'active' : ''}`} onMouseDown={closeMenu}>Ипотека</Link>
                <Link href={'/news'} className={`menu_link ${path === '/news' ? 'active' : ''}`} onMouseDown={closeMenu}>Новости</Link>
                <Link href={'/about'} className={`menu_link ${path === '/about' ? 'active' : ''}`} onMouseDown={closeMenu}>О нас</Link>
            </div>
        </div>
    )
}