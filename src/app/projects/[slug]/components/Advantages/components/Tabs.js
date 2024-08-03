'use client'

export default function Tabs({advantages}) {
    
    return (
        <div className="advantages_header">
            <button className={`advantages_tab ${advantages.tab === 1 ? 'active' : ''}`} onClick={() => advantages.switchTab(1)}>Архитектура</button>
            <button className={`advantages_tab ${advantages.tab === 2 ? 'active' : ''}`} onClick={() => advantages.switchTab(2)}>Благоустройства</button>
            <button className={`advantages_tab ${advantages.tab === 3 ? 'active' : ''}`} onClick={() => advantages.switchTab(3)}>Входные группы</button>
            <button className={`advantages_tab ${advantages.tab === 4 ? 'active' : ''}`} onClick={() => advantages.switchTab(4)}>Инфраструктура</button>
        </div>
    );
}