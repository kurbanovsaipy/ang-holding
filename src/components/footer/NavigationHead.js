'use client'

import Image from "next/image"

export default function NavigationHead ({title, image}) {

    const openSpoiler = (e) => {
        const spoiler = e.currentTarget.closest('.navigation')
        spoiler.classList.toggle('show')
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