'use client'

import { useEffect, useState } from "react"
import Api from "./Api"

export default function Script() {

    const [script, setScript] = useState(false)

    useEffect(() => {

        if(window.innerWidth < 1001) {
            setScript(true)
        } else {
            setScript(false)
        }

    }, [])

    if(!script) return null

    return <script src={`${Api.url}/script/pb.js`}></script>

}