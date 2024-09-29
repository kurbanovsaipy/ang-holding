import Api from '@/utils/Api';
import './../info.scss'

import Consultation from "./Consultation";
import Contacts from "./Contacts";

export default async function Info() {

    const info = await Api.getWithoutCache('contact/info')

    return (
        <div className="company_info" id="info">
            <Contacts info={info}/>

            <Consultation info={info}/>
        </div>
    )
}