import Consultation from "./Consultation";
import Contacts from "./Contacts";

export default function Info() {
    return (
        <div className="info" id="info">
            <Contacts />

            <Consultation />
        </div>
    )
}