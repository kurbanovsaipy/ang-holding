'use client'

import { useEffect, useLayoutEffect, useState } from "react"
import Api from "./Api"

export default function Script() {

    const [script, setScript] = useState(false)

    useLayoutEffect(() => {

        if(window.innerWidth < 1001) {
            setScript(true)
        } else {
            setScript(false)
        }

    }, [])

    if(!script) return null

    return 

}