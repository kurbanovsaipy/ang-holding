import Image from "next/image";


export default function ProjectSettings() {
    return (
        <div className="projects_settings container">
            <div className="settings_item">
                <div className="icon">
                    <Image src={'/icons/flors.svg'} width={45} height={45} />
                </div>
                <div className="description">
                    <h4 className="settings_name">Этажность</h4>
                    <p className="character">16, 18, 24 этажей</p>
                </div>
            </div>
            <div className="settings_item">
                <div className="icon">
                    <Image src={'/icons/building2.svg'} width={45} height={45} /></div>
                <div className="description">
                    <h4 className="settings_name">Квартир в доме</h4>
                    <p className="character">1238 квадртир</p>
                </div>
            </div>
            <div className="settings_item">
                <div className="icon">
                    <Image src={'/icons/calendar.svg'} width={45} height={45} /></div>
                <div className="description">
                    <h4 className="settings_name">Дата сдачи объекта</h4>
                    <p className="character">3 квартал 2024 года</p>
                </div>
            </div>
        </div>
    );
}