import ContactsItem from "./ContactsItem";

export default function Contacts() {
    return (
        <div className="contacts">

            <div className="central">
                <h2>Центральный офис продаж</h2>
                <div className="flex">
                    <ContactsItem 
                        title={'Адрес расположения офиса, кликабельная ссылка на 2гис'}
                    >
                        <p>Основной номер телефона</p>
                    </ContactsItem>

                    <ContactsItem 
                        title={'Для клиентов по вопросам заселения и получения ключей'}
                    >
                        <p>номер телефона</p>
                    </ContactsItem>
                </div>
            </div>

            <div className="partners">
                <h2>Для партнёров</h2>
                <div className="flex">
                    <ContactsItem 
                        title={'Для обращений и служебной переписке'}
                    >
                        <p>номер телефона</p>

                        <a href="mailto:company@mail.ru">company@mail.ru</a>
                    </ContactsItem>

                    <ContactsItem 
                        title={'Корпоративным клиентам'}
                    >
                        <p>номер телефона</p>
                    </ContactsItem>

                    <ContactsItem 
                        title={'Агентствам недвижимости'}
                    >
                        <p>номер телефона</p>
                    </ContactsItem>
                </div>
            </div>
            
        </div>
    )
}