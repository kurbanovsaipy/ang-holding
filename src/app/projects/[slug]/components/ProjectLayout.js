'use client'

import ProjectLayoutItem from "./ProjectLayoutItem";
import LayoutSkeletList from "./LayoutSkeletList";
import useLayout from "../hooks/useLayout";
import NothingHere from "@/components/nothing_here/NothingHere";

export default function ProjectLayout({id}) {

    const layout = useLayout(id)

    return (
        <div className="container project_layout">
            <h2 className="main_title">Планировка</h2>

            <div className="filters_block">
                <div className="filters">
                    <button className={`main_button ${layout.filter === 'all' ? 'active' : ''}`} onClick={layout.getAll}>Все</button>
                    <button className={`main_button ${layout.filter === 'studio' ? 'active' : ''}`} onClick={() => layout.getStudio()}>Студии</button>
                    <button className={`main_button ${layout.filter === 1 ? 'active' : ''}`} onClick={() => layout.switchRooms(1)}>1</button>
                    <button className={`main_button ${layout.filter === 2 ? 'active' : ''}`} onClick={() => layout.switchRooms(2)}>2</button>
                    <button className={`main_button ${layout.filter === 3 ? 'active' : ''}`} onClick={() => layout.switchRooms(3)}>3</button>
                    <button className={`main_button ${layout.filter === 'more' ? 'active' : ''}`} onClick={() => layout.moreRooms(4)}>4+</button>
                </div>
                <div className="search_result">
                    <p>Найдено: {layout.count}</p>
                </div>
            </div>

            {layout.load ? 
                <>
                    {layout.layouts?.length ? 
                        <div className="layout_list">
                            {layout.layouts.map((el) => (
                                <ProjectLayoutItem el={el} houseId={id} key={el.id}/>
                            ))}
                        </div>
                    :<NothingHere />}
                </>
            :
                <LayoutSkeletList />
            }
            
            {layout.layouts?.length >= layout.count ? <></> :<button className="show_more main_button" onClick={layout.showMore}>Показать ещё</button>}
            
        </div>
    );
}