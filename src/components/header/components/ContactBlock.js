import ProfitBaseBtn from "./ProfitBaseBtn";


export default function ContactBlock({info}) {

    return (
        <div className="contact_block">
            <div className="phone">
                <a href={`tel:+${(info?.phone)?.replace(/\D/g, '')}`}>

                    {info?.phone}
                </a>
                <p>{info?.time}</p>
            </div>

            <ProfitBaseBtn />
        </div>
    );
}