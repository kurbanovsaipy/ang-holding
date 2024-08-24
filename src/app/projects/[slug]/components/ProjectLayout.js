'use client'

import { useEffect, useState } from "react";
import ProjectLayoutItem from "./ProjectLayoutItem";
import Api from "@/utils/Api";

export default function ProjectLayout({id}) {

    const [layouts, setLayouts] = useState([])
    const [all, setAll] = useState(true)
    const [filters, setFilters] = useState({
        rooms: 0,
        isStudio: false,
        roomMoreThan: false
    })

    const switchRooms = (room, studio, more) => {
        setAll(false)
        setFilters(prev => ({...prev, rooms: room, isStudio: studio, roomMoreThan: more}))
    }

    const getAll = () => {
        setAll(true)
        setFilters(prev => ({...prev, rooms: 0, isStudio: false, roomMoreThan: false}))
    }

    useEffect(() => {

        (async () => {
            let res;
            if(all) {
                res = await Api.get(`pb/plan?houseId=${id}`)
            } else {
                res = await Api.get(`pb/plan?houseId=${id}&rooms[${filters.rooms}]&isStudio=${filters.isStudio}${filters.roomMoreThan ? `&roomMoreThan=${filters.roomMoreThan}` : ''}`)
            }

            if(res) {
                setLayouts(res)
            }
        })()

    }, [filters, all])

    return (
        <div className="container project_layout">
            <h2 className="main_title">Планировка</h2>

            <div className="filters_block">
                <div className="filters">
                    <button className={`main_button ${all ? 'active' : ''}`} onClick={getAll}>Все</button>
                    <button className={`main_button ${filters.isStudio === true ? 'active' : ''}`} onClick={() => switchRooms(0, true, false)}>Студии</button>
                    <button className={`main_button ${filters.rooms === 1 ? 'active' : ''}`} onClick={() => switchRooms(1, false, false)}>1</button>
                    <button className={`main_button ${filters.rooms === 2 ? 'active' : ''}`} onClick={() => switchRooms(2, false, false)}>2</button>
                    <button className={`main_button ${filters.rooms === 3 ? 'active' : ''}`} onClick={() => switchRooms(3, false, false)}>3</button>
                    <button className={`main_button ${filters.rooms === 4 ? 'active' : ''}`} onClick={() => switchRooms(4, false, 4)}>4+</button>
                </div>
                <div className="search_result">
                    <p>Найдено: {layouts?.length}</p>
                </div>
            </div>

            <div className="layout_list">
                {layouts?.length ? 
                    <>
                        {layouts.map((el) => (
                            <ProjectLayoutItem el={el} key={el.id}/>
                        ))}
                    </>
                :<></>}
                
            </div>
            
        </div>
    );
}