import Api from "@/utils/Api"
import { useEffect, useState } from "react"

export default function useNews() {
    const [pageLoad, setPageLoad] = useState(false)
    const [total, setTotal] = useState(false)
    const [news, setNews] = useState(false)
    const [params, setParams] = useState({
        page: 1,
        limit: 3,
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
        const skelet = document.getElementById('skelet')
        skelet.style.height = '470px'
        skelet.style.opacity = '1'
        setNews([])
        setParams(prev => ({...prev, sort: name, page: 1}))
    }

    useEffect(() => {
        (async () => {
            const query = new URLSearchParams(params).toString()
            const init = await Api.getFull(`news/page?${query}`)
            if(init) {
                if(!news) {
                    setNews(init.data)
                } else if (!news?.length) {
                    const skelet = document.getElementById('skelet')
                    setTimeout(() => {
                        setNews(init.data)
                        skelet.style.height = '0'
                        skelet.style.opacity = '0'
                    }, 1200)
                } else {
                    const skelet = document.getElementById('skelet')
                    setTimeout(() => {
                        skelet.classList.remove('show')
                        setNews(prev => [...prev, ...init.data])
                    }, 1200)
                }
                setTotal(init.state)
            }
            
            setPageLoad(prev => prev = true)
        })()
    }, [params])

    return {changeSort, params, news, pageLoad, showMore, total}
}