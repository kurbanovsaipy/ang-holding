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
            pagination[page++] = list.splice(0, 9)
        }
        return pagination
    }

    const showMore = () => {
        const page = (layouts?.length / 9) + 1
        setLayouts(prev => [...prev, ...pagination[page]])
    }

    const switchRooms = async (room, studio, more) => {

        setLoad(false)

        let options = {}

        if(room) {
            options = {
                name: 'rooms[]',
                value: room
            }
            setFilter(`room${room}`)
        } else if (studio) {
            options = {
                name: 'isStudio',
                value: studio
            }
            setFilter('studio')
        } else if (more) {
            options = {
                name: 'roomMoreThan',
                value: more
            }
            setFilter('more')
        }

        let res = await Api.get(`pb/plan?houseId=${id}&${options.name}=${options.value}`)

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

    console.log(pagination)

    return { layouts, count, load, filter, showMore, getAll, switchRooms }
}