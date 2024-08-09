

export default function ContactBlock({info}) {
    return (
        <div className="contact_block">
            <div className="phone">
                <a href={`tel:${info?.phone}`}>
                    {info?.phone}
                </a>
                <p>ПН-СБ: С 08:00 ДО 19:00</p>
            </div>
            <button className='main_button'>Выбрать квартиру</button>
        </div>
    );
}