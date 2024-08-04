import { notFound } from "next/navigation"

const Api = {}

Api.url = 'http://194.58.126.195:4043'
Api.domain = '194.58.126.195'

Api.get = async (path) => {

    try {

        let res = await fetch(`${Api.url}/${path}`)

        res = await res.json()
        
        if(res.status === 'success') {
            return res.data
        } else {
            return false
        }

    } catch (e) {
        return false
    }

}

Api.getData = async (path) => {

    try {

        let res = await fetch(`${Api.url}/${path}`)

        res = await res.json()
        
        if(res.status === 'success') {
            return res.data
        } else {
            return notFound()
        }

    } catch (e) {
        return notFound()
    }

}

Api.getWithoutCache = async (path) => {
    
    try {

        let res = await fetch(`${Api.url}/${path}`, {cache: 'no-cache'})

        res = await res.json()

        if(res.status === 'success') {
            return res.data
        } else {
            return false
        }

    } catch (e) {
        return false
    }

}

export default Api;