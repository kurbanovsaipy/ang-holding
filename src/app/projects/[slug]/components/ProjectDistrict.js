import Api from "@/utils/Api";


export default function ProjectDistrict({project}) {
    return (
        <div className="project_info container">
            <div className="description_block">
                <h2 className="main_title">О районе</h2>
                <div className="description">
                    {project.district}
                </div>

                {project.places?.length 
                ? <h4 className='title'>Интересные места</h4> 
                :<></>}
                
                {project.places?.length ? 
                    <div className="station">
                        {project.places.map((el, i) => (
                            <div className="station_item" key={i}>{el}</div>
                        ))}
                    </div>
                :<></>}
            </div>

            <div className="image_block">
                <img src={`${Api.url}/images/${project.district_image}`} alt="" />
            </div>
        </div>
    );
}