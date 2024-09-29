'use client'

import { useEffect, useState } from "react"
import ParkingCard from "./ParkingCard"
import SkeletProjectCard from "@/components/skelet_card/SkeletProjectCard"
import Api from "@/utils/Api"
import NothingHere from "@/components/nothing_here/NothingHere"

export default function ParkingList() {

    const [load, setLoad] = useState(false)
    const [parking, setParking] = useState([])
    const [pagination, setPagination] = useState({})
    const [count, setCount] = useState(0)

    
    const showMore = () => {
        const page = (parking?.length / 3) + 1
        setParking(prev => [...prev, ...pagination[page]])
    }

    const chunkList = (list) => {
        let pagination = {}
        let page = 1
        
        while (list.length > 0) {
            pagination[page++] = list.splice(0, 3)
        }
        return pagination
    }

    useEffect(() => {

        (async () => {

            let res = await Api.get(`pb/house`)

            if(res) {
                res = res.filter(el => el.isArchive === false && el.type === 'PARKING')
                setCount(res.length)
                const list = chunkList(res)
                setPagination(list)

                if(list[1]) {
                    setParking(list[1])
                } else {
                    setParking([])
                }

                setLoad(true)
            }

        })()

    }, [])

    return (
        <>
            {load ? 
                <>
                    {parking?.length ? 
                        <div className="grid">
                            {parking.map((el, i) => (
                                <ParkingCard key={i} el={el}/>
                            ))}
                        </div>
                    :
                        <NothingHere />
                    }
                </>
            :
                <div className="grid">
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                </div>
            }

            {parking?.length >= count ? <></> :<button className="show_more main_button" onClick={showMore}>Показать ещё</button>}
        </>
    );
}