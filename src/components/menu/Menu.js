'use client'

import './css/menu.scss';

import Store from "@/utils/Store"
import Link from 'next/link';
import { useEffect, useState } from "react"

export default function Menu() {

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

                {Store.navigation.slice(0, 5).map((el, i) => (
                    el.anchor 
                    ?<a key={i} href={el.link} className={`menu_link`} onClick={closeMenu}>{el.title}</a>
                    :<Link key={i} href={el.link} className={`menu_link`} onClick={closeMenu}>{el.title}</Link>
                ))}

            </div>
        </div>
    )
}