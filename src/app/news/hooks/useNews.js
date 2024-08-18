import Api from "@/utils/Api"
import { useEffect, useState } from "react"

export default function useNews() {
    
    const [pageLoad, setPageLoad] = useState(false)
    const [total, setTotal] = useState(false)
    const [news, setNews] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        limit: 6,
        sort: 'ASC',
    })

    function showMore() {
        const skelet = document.getElementById('skelet')
        skelet.classList.add('show')
        setParams(prev => ({...prev, page: prev.page + 1,}))
    }

    function changeSort(e, name) {
        if(params.sort === name) {
            return
        }
        setPageLoad(prev => prev = false)
        setNews(false)
        setParams(prev => ({...prev, sort: name, page: 1}))
    }

    useEffect(() => {
        (async () => {
            const query = new URLSearchParams(params).toString()
            const init = await Api.getFull(`news/page?${query}`)
            if(init) {
                const data = init.data.filter(el => el.active === 1)
                if(!news) {
                    console.log(init)
                    setNews(data)
                    setPageLoad(prev => prev = true)
                } else {
                    const skelet = document.getElementById('skelet')
                    setTimeout(() => {
                        skelet.classList.remove('show')
                        setNews(prev => [...prev, ...data])
                    }, 1200)
                }
                setTotal(init.state)
            }
            
            setPageLoad(prev => prev = true)
        })()
    }, [params])

    return {changeSort, params, news, pageLoad, showMore, total}
}