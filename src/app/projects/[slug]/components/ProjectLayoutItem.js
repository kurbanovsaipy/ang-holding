import Image from "next/image";


export default function ProjectLayoutItem({el}) {
    return (
        <div className="layout_item">
                    
            <div className="image">
                <img src={el.image?.source || '/images/no-image.webp'} alt="" />
            </div>

            <div className="description_block">
                <div className="layout_settings">
                    <div className="section">
                        <h5 className="setings_name">Площадь</h5>
                        <p className="setings_ch">{el.areaRange?.max} м2</p>
                    </div>
                    <div className="section">
                        <h5 className="setings_name">Стоимость</h5>
                        <p className="setings_ch">{(el.priceRange?.max).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}