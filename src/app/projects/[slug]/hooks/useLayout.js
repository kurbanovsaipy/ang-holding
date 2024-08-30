import Api from "@/utils/Api"
import { useEffect, useState } from "react"


export default function useLayout(id) {

    const [layouts, setLayouts] = useState([])
    const [pagination, setPagination] = useState({})
    const [load, setLoad] = useState(false)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState('all')

    const chunkList = (list) => {
        let pagination = {}
        let page = 1
        
        while (list.length > 0) {
            pagination[page++] = list.splice(0, 8)
        }
        return pagination
    }

    const showMore = () => {
        const page = (layouts?.length / 8) + 1
        setLayouts(prev => [...prev, ...pagination[page]])
    }

    const switchRooms = async (room) => {

        setLoad(false)
        setFilter(room)

        let res = await Api.get(`pb/plan?houseId=${id}&rooms[]=${room}`)

        if(res) {
            setCount(res.length)
            const list = chunkList(res)
            setPagination(list)
            if(list[1]) {
                setLayouts(list[1])
            } else {
                setLayouts([])
            }
            setLoad(true)
        }
    }

    const moreRooms = async (room) => {

        setLoad(false)
        setFilter('more')

        let res = await Api.get(`pb/plan?houseId=${id}&roomMoreThan=${room}`)

        if(res) {
            setCount(res.length)
            const list = chunkList(res)
            setPagination(list)
            if(list[1]) {
                setLayouts(list[1])
            } else {
                setLayouts([])
            }
            setLoad(true)
        }
    }

    const getAll = async () => {

        setLoad(false)
        setFilter('all')

        let res = await Api.get(`pb/plan?houseId=${id}`)

        if(res) {
            setCount(res.length)
            const list = chunkList(res)
            setPagination(list)
            if(list[1]) {
                setLayouts(list[1])
            } else {
                setLayouts([])
            }
            setLoad(true)
        }
    }

    useEffect(() => {

        if(id) {
            (async () => {
    
                await getAll()
    
            })()
        }

    }, [id])

    return { layouts, count, load, filter, showMore, getAll, switchRooms, moreRooms }
}