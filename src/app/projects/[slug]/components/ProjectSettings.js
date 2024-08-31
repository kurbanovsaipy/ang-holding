import Image from "next/image";


export default function ProjectSettings({data, maxFloor, propertyCount}) {
    return (
        <div className="projects_settings container">
            <div className="settings_item">
                <div className="icon">
                    <Image src={'/icons/flors.svg'} width={45} height={45} alt=""/>
                </div>
                <div className="description">
                    <h4 className="settings_name">Этажность</h4>
                    <p className="character">{maxFloor} этажей</p>
                </div>
            </div>
            <div className="settings_item">
                <div className="icon">
                    <Image src={'/icons/building2.svg'} width={45} height={45} alt=""/></div>
                <div className="description">
                    <h4 className="settings_name">Квартир в доме</h4>
                    <p className="character">{propertyCount} квартир</p>
                </div>
            </div>
            <div className="settings_item">
                <div className="icon">
                    <Image src={'/icons/calendar.svg'} width={45} height={45} alt=""/></div>
                <div className="description">
                    <h4 className="settings_name">Дата сдачи объекта</h4>
                    <p className="character">{data.quarter} квартал {data.year} года</p>
                </div>
            </div>
        </div>
    );
}