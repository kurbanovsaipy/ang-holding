

export default function MobileBlock({info}) {
    return (
        <div className="mobile_block">
            <a href={`tel:${info?.phone}`} className='header_icon_phone'></a>
            <div className="burger">
                <span></span><span></span><span></span>
            </div>
        </div>
    );
}