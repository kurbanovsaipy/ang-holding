import './../info.scss'

import Consultation from "./Consultation";
import Contacts from "./Contacts";

export default function Info({info}) {
    return (
        <div className="company_info" id="info">
            <Contacts info={info}/>

            <Consultation info={info}/>
        </div>
    )
}