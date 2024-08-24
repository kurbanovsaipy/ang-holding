import Image from "next/image";


export default function ProjectLayoutItem({el}) {
    return (
        <div className="layout_item">
                    
            <div className="image">
                <Image
                    src={el.image.source || '/images/no-image.webp'}
                    alt=""
                    width={0} 
                    height={0} 
                    style={{ width: '100%', height: '100%' }} 
                    priority={100} 
                    placeholder="blur" 
                    unoptimized={true} 
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z"
                    className="back_image"
                />
            </div>

            <div className="description_block">
                <div className="layout_settings">
                    <div className="section">
                        <h5 className="setings_name">Площадь</h5>
                        <p className="setings_ch">{el.areaRange.max} м2</p>
                    </div>
                    <div className="section">
                        <h5 className="setings_name">Этаж</h5>
                        <p className="setings_ch">8-10</p>
                    </div>
                </div>

                <div className="layout_settings">

                    <div className="section">
                        <h5 className="setings_name">Стоимость</h5>
                        <p className="setings_ch">{(el.priceRange.max).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.</p>
                    </div>

                    <div className="section">
                        <h5 className="setings_name">Ипотека</h5>
                        <p className="setings_ch">24 000 руб.</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}