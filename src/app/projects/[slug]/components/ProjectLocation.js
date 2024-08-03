export default function ProjectLocation() {
    return (
        <div className="project_info container">
            <div className="description_block">
                <h2 className="main_title">Транспортная доступность</h2>
                <div className="description">
                    Квартал расположен на территории Набережных Челнов. С одной стороны, он окружен лесными массивами, с другой — имеет удобные выезды и маршруты в сторону центра для личного и общественного транспорта.
                </div>
                
                <h4 className='title'>Ближайшие остановки</h4>
                <div className="station">
                    <div className="station_item">Пр. Сююмбике - 600 м</div>
                    <div className="station_item">Ул. Шамиля Усманова - 1,2 км</div>
                </div>
            </div>

            <div className="image_block">
                <img src="https://getpublii.com/docs/media/posts/44/google-map.png" alt="" />
            </div>
        </div>
    );
}