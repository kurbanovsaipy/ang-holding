import { useCallback, useEffect, useRef } from "react"
import checkScrollSpeed from "./checkScrollSpeed"

export default function useBtnUp () {
    let lastPos
    let bottom
    let top

    const upBtn = useRef(null)

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const showBtn = () => {
        const scrollSpeed = checkScrollSpeed()

        const screenPos = document.documentElement.scrollTop

        if(screenPos > 1000) {
            if (scrollSpeed < 2) {
                if((bottom - screenPos) > 100) {
                    upBtn.current.style.transform = 'translateX(-30px)'
                }
            }
            if((screenPos - top) > 110) {
                upBtn.current.style.transform = 'translateX(115%)'
            }
        }
        if(screenPos < 1000) {
            upBtn.current.style.transform = 'translateX(115%)'
        }
        if(screenPos > lastPos) {
            bottom = screenPos
        }
        if(screenPos < lastPos) {
            top = screenPos
        }
        lastPos = screenPos   
    }

    useEffect(() => {
        window.onscroll = () => showBtn()

        return window.onscroll = () => showBtn()
    }, [])

    useCallback(() => {
        window.onscroll = () => showBtn()
    })

    return {scrollToTop, upBtn}
}