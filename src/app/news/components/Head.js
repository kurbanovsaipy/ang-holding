import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

export default function Head({changeSort, sort}) {
    const [open, setOpen] = useState(false)

    const openFilter = (e) => {
        e.stopPropagation()
        setOpen(prev => prev === true ? false : true)
    }

    const closeFilter = () => {
        setOpen(prev => prev = false)
    }

    useEffect(() => {
        window.addEventListener('mousedown', () => closeFilter())

        return () => window.addEventListener('mousedown', () => closeFilter())
    }, [])

    useCallback(() => [
        window.addEventListener('mousedown', () => closeFilter())
    ])
    
    return (
        <div className="news_head">
            <h2 className="main_title">Новости</h2>

            <div className="filter">
                <div className="flex" onMouseDown={e => openFilter(e)}>
                    По дате - {sort === 'ASC' ? 'новые' : 'старые'}
                    <Image 
                        src='/icons/arrow_down.svg'
                        alt=''
                        width={25}
                        height={25}
                    />
                </div>
                {open && 
                    <div className="filter_list" >
                        <p className={sort === 'ASC' && 'active'} onMouseDown={e => changeSort(e, 'ASC')}>Новые</p>
                        <p className={sort === 'DESC' && 'active'} onMouseDown={e => changeSort(e, 'DESC')}>Старые</p>
                    </div>
                }  
            </div>
        </div>
    )
}