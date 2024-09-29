'use client'

import './button_up.scss'
import useBtnUp from './useBtnUp'

export default function ButtonUp () {
    
    const {scrollToTop, upBtn} = useBtnUp()

    return (
        <button className="button_up" ref={upBtn} onMouseDown={() => scrollToTop()}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}