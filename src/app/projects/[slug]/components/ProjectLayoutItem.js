

export default function ProjectLayoutItem() {
    return (
        <div className="layout_item">
                    
            <div className="image">
                <img src="https://new-api.ingrad.ru/storage/plannings/int/Fr_k9_s2_et7-10_4_253.png" alt="" />
            </div>

            <div className="description_block">
                <div className="layout_settings">
                    <div className="section">
                        <h5 className="setings_name">Площадь</h5>
                        <p className="setings_ch">36,2 м2</p>
                    </div>
                    <div className="section">
                        <h5 className="setings_name">Этаж</h5>
                        <p className="setings_ch">8-10</p>
                    </div>
                </div>

                <div className="layout_settings">

                    <div className="section">
                        <h5 className="setings_name">Стоимость</h5>
                        <p className="setings_ch">6 670 000 руб.</p>
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