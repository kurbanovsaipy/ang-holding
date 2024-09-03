import Api from "@/utils/Api";
import Galery from "./Galery";


const getGalery = async (id) => {
    const res = await Api.get('pb/projects')
    
    if(res) {
        let list = res.find(el => el.id === id)
        return list?.images
    }    
}

export default async function ProjectPlan({id}) {
    
    const galery = await getGalery(id)

    if(galery?.length < 1) return null

    return (
        <div className="general_plan container">
            <h2 className="main_title">Галерея</h2>

            <div className="general">
                <Galery galery={galery}/>
            </div>
        </div>
    );
}