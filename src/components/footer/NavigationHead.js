'use client'

import Image from "next/image"

export default function NavigationHead ({title, image}) {

    const openSpoiler = (e) => {
        const spoiler = e.currentTarget.closest('.navigation')
        const nav = e.currentTarget.nextElementSibling
        const height = spoiler.querySelector('nav').offsetHeight

        e.currentTarget.classList.toggle('show')
        if(e.currentTarget.classList.contains('show')) {
            nav.style.height = `${height}px`
        } else {
            nav.style.height = `0px`
        }
    }

    return (
        <h5 className="navigation_head" onMouseDown={(e) => openSpoiler(e)}>
            {title}
            <Image
                src={image}
                alt=""
                width={20}
                height={20}
                className="arrow"
            />
        </h5>
    )
}