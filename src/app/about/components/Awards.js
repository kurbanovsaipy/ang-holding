import Api from "@/utils/Api";
import AwardsSplider from "./AwardsSplider";

export default async function Awards() {

    const awards = await Api.get('award/list')

    return (
        <div className="awards_wrapper" id="awards">
            <div className="awards">
                <div className="container">
                    <h2 className="main_title">Награды и прочие документы</h2>
                </div>

                <AwardsSplider awards={awards}/>
            </div>
        </div>
    )
}