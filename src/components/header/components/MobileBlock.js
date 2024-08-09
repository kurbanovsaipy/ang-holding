'use client'

import Store from "@/utils/Store";
import { useEffect, useState } from "react";

export default function MobileBlock({info}) {

    const [isOpen, setIsOpen] = useState(false)
    Store.useListener('menuBurger', setIsOpen)

    const toggleMenu = (e) => {
        e.stopPropagation()
        if(isOpen) {
            Store.setListener('menu', 'close')
            setIsOpen(false)
        } else {
            Store.setListener('menu', 'open')
            setIsOpen(true)
        }
    }

    return (
        <div className={`mobile_block`}>
            <a href={`tel:${info?.phone}`} className='header_icon_phone'></a>
            <a href="" className="header_icon_home"></a>

            <div className={`burger ${isOpen ? 'cross' : 'burg'}`} onMouseDown={(e) => toggleMenu(e)}>
                <span className="top"></span>
                <span className="center"></span>
                <span className="bottom"></span>
            </div>
        </div>
    );
}