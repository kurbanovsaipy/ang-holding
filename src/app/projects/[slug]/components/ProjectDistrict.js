

export default function ProjectDistrict() {
    return (
        <div className="project_info container">
            <div className="description_block">
                <h2 className="main_title">О районе</h2>
                <div className="description">
                    Короткий продающий текст о месте застройки, его ценности для горожан, его особенностях. Ключевые места и градообразующие поинты. Смыслы и особенности жителей этого района (локации)
                </div>
                
                <h4 className='title'>Интересные места</h4>
                <div className="station">
                    <div className="station_item">Парк Победы - 3 км</div>
                    <div className="station_item">Памятник некой личности - 4 км</div>
                </div>
            </div>

            <div className="image_block">
                <img src="https://avatars.mds.yandex.net/i?id=24296cdb835ebe3cb3036d9c93d219a6_l-5229051-images-thumbs&n=13" alt="" />
            </div>
        </div>
    );
}