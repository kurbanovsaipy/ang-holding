'use client'

import ProjectLayoutItem from "./ProjectLayoutItem";

export default function ProjectLayout() {
    return (
        <div className="container project_layout">
            <h2 className="main_title">Планировка</h2>

            <div className="filters_block">
                <div className="filters">
                    <button className="main_button">Все</button>
                    <button className="main_button">Студии</button>
                    <button className="main_button">1</button>
                    <button className="main_button">2</button>
                    <button className="main_button">3</button>
                    <button className="main_button">4+</button>
                </div>
                <div className="search_result">
                    <p>Найдено: 23</p>
                </div>
            </div>

            <div className="layout_list">
                
                <ProjectLayoutItem />
                <ProjectLayoutItem />
                <ProjectLayoutItem />
                
            </div>
            
        </div>
    );
}