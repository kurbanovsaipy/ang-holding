import Image from 'next/image';
import './css/detail.scss'

export default function ProjectDetail() {
    return (
        <div className="project_detail">
            <div className="project_head">
                <Image src={'https://bogatyr.club/uploads/posts/2023-06/1688104483_bogatyr-club-p-bolshoi-dvukhetazhnii-dom-foni-krasivo-69.jpg'} alt="" placeholder='blur' width={0} height={0} style={{ width: '100%', height: '100%' }} priority={100} unoptimized={true} blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z"/>
                <h2 className="title">Riversky</h2>
                <div className="button_block">
                    <button className="main_button big fill">Вырбать квартиру</button>
                    <button className="main_button big">Скачать буклет</button>
                    <button className="main_button big">I</button>
                </div>
            </div>

            <div className="projects_settings container">
                <div className="settings_item">
                    <div className="icon"></div>
                    <div className="description">
                        <h4 className="settings_name">Этажность</h4>
                        <p className="character">16, 18, 24 этажей</p>
                    </div>
                </div>
                <div className="settings_item">
                    <div className="icon"></div>
                    <div className="description">
                        <h4 className="settings_name">Квартир в доме</h4>
                        <p className="character">1238 квадртир</p>
                    </div>
                </div>
                <div className="settings_item">
                    <div className="icon"></div>
                    <div className="description">
                        <h4 className="settings_name">Дата сдачи объекта</h4>
                        <p className="character">3 квартал 2024 года</p>
                    </div>
                </div>
            </div>

            <div className="project_advantages container">
                <div className="main_title">Ключевые преимущества</div>

                <div className="advantages_window">

                    <div className="advantages_header">
                        <button className="advantages_tab">Архитектура</button>
                        <button className="advantages_tab active">Благоустройства</button>
                        <button className="advantages_tab">Входные группы</button>
                        <button className="advantages_tab">Инфраструктура</button>
                    </div>

                    <div className="description_window">
                        <h5 className="title">Благоустройства</h5>
                        <div className="description">
                            Концепция благоустройства от бюро ARTEZA. Зеленый пешеходный бульвар идеален для прогулок и пробежек. На территории жилого квартала обустроены детские игровые и спортивные площадки, отдельные зоны для спокойного отдыха на деревянных настилах, воркаут-площадка и велодорожка.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}