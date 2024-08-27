import ContactsItem from "./ContactsItem";
import Phone from "./Phone";

export default function Contacts({info}) {
    return (
        <div className="contacts">

            <div className="central">
                <h2>Центральный офис продаж</h2>
                <div className="flex">
                    
                    <div className="contacts_item">
                        <a href="https://go.2gis.com/m67zw" className="contacts_item">
                            Республика Татарстан г.Набережные Челны пр.Набережночелнинский д.9А (ЗЯБ 17А/7)
                        </a>
                        <Phone phone={info?.phone}/>
                    </div>

                    <ContactsItem 
                        title={'Для клиентов по вопросам заселения и получения ключей'}
                    >
                        <a href="tel:+79274230044">+7(8552)23-00-44</a>
                    </ContactsItem>
                </div>
            </div>

            <div className="partners">
                <h2>Для партнёров</h2>
                <div className="flex">
                    <ContactsItem 
                        title={'Для обращений и служебной переписке'}
                    >
                        <a href="tel:+79274230044">+7(8552)23-00-44</a>

                        <a href={`mailto:${info?.email}`}>{info?.email}</a>
                    </ContactsItem>

                    <ContactsItem 
                        title={'Корпоративным клиентам'}
                    >
                        <a href="tel:+79274230044">+7(8552)23-00-44</a>
                    </ContactsItem>

                    <ContactsItem 
                        title={'Агентствам недвижимости'}
                    >
                        <a href="tel:+79274230044">+7(8552)23-00-44</a>
                    </ContactsItem>
                </div>
            </div>
            
        </div>
    )
}