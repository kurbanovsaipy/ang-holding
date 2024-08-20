'use client'

import Store from "@/utils/Store";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";


export default function More() {

    const [isOpen, setIsOpen] = useState('')
    Store.useListener('more', setIsOpen)

    const closeMenu = () => {
        setIsOpen('close')
    }

    const toggleMenu = (e) => {
        e.stopPropagation()
        if(isOpen === 'open') {
            setIsOpen('close')
        } else {
            setIsOpen('open')
        }
    }

    useEffect(() => {

        window.addEventListener('click', closeMenu)

        return () => {
            window.removeEventListener('click', closeMenu)
        }

    }, [])

    useCallback(() => {

        return () => {
            window.removeEventListener('click', closeMenu)
        }

    }, [])

    return (
        <div className={`more`}>
            <button className={`more_button ${isOpen === 'open' ? 'active' : ''}`} onClick={(e) => toggleMenu(e)}>Ещё...</button>
            <div className={`list ${isOpen}`}>
                {Store.navigation.slice(5).map((el, i) => (
                    <>
                        {el.anchor ? 
                            <a key={i} href={el.link} className={`link_more`} onClick={closeMenu}>{el.title}</a>
                        :
                            <Link key={i} href={el.link} className={`link_more`} onClick={closeMenu}>{el.title}</Link>
                        }
                    </>
                ))}
            </div>
        </div>
    );  
}