'use client'

export default function DescriptionWindow({info}) {

    return (
        <div className="description_window">
            <h5 className="title">{info?.title}</h5>
            <div className="description">
                Концепция благоустройства от бюро ARTEZA. Зеленый пешеходный бульвар идеален для прогулок и пробежек. На территории жилого квартала обустроены детские игровые и спортивные площадки, отдельные зоны для спокойного отдыха на деревянных настилах, воркаут-площадка и велодорожка.
            </div>
        </div>
    );
}