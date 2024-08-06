import { notFound } from "next/navigation.js"

const Api = {}

Api.url = 'https://api.ang-holding.ru'
Api.domain = 'api.ang-holding.ru'

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

Api.getFull = async (path) => {

    try {

        let res = await fetch(`${Api.url}/${path}`)

        res = await res.json()
        
        if(res.status === 'success') {
            return res
        } else {
            return false
        }

    } catch (e) {
        return false
    }

}

export default Api;