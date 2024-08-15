import Image from "next/image";

export default function AboutDescription() {

    return (
        <div className="about_description container">
            <h2 className="main_title">О нас</h2>

            <div className="flex">
                <div className="description">
                    <p>Группа компаний АНГ-Холдинг работает в сфере строительства с 2012 года. За это время мы собрали команду первоклассных специалистов, создали обширную материально-техническую базу и накопили большой опыт. Все вместе это позволяет нам успешно реализовывать даже самые сложные и нестандартные проекты.
                    На сегодняшний день Группа компаний АНГ-Холдинг- это динамично развивающаяся строительная компания, за плечами которой участие в крупных проектах по строительству и реконструкции объектов в Татарстане. Мы гордимся своими достижениями и стремимся к дальнейшему развитию.</p>
                    <div className="description_flex">
                        <a href="#awards" className="main_button">Награды</a>
                        <a href="#info" className="main_button">Контакты</a>
                    </div>
                </div>

                
                <div className="image_wrapper">
                    <Image 
                        src={'/images/desc.jpg'} 
                        alt=""
                        width={0} 
                        height={0} 
                        style={{ width: '100%', height: '100%' }} 
                        placeholder="blur" 
                        unoptimized={true} 
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z"
                        className="image"
                    />
                </div>
            </div>
        </div>
    )
}