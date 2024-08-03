'use client'

import { useState } from "react"

export default function useAdvantages() {

    const info = {
        1: {title: 'Архитектура', description: ''},
        2: {title: 'Благоустройства', description: ''},
        3: {title: 'Входные группы', description: ''},
        4: {title: 'Инфраструктура', description: ''}
    }

    const [tab, setTab] = useState(1)

    const switchTab = (value) => {
        setTab(value)
    }


    return { tab, switchTab, info }
}