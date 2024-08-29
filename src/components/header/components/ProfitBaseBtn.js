'use client'

import { usePathname } from "next/navigation"

export default function ProfitBaseBtn() {

    const path = usePathname()

    return <a href={`https://ang-holding.ru${path}#/catalog/projects/houses?filter=property.status:AVAILABLE`} className='main_button'>Выбрать квартиру</a>
}