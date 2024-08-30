import Api from "@/utils/Api";

export default function ProjectLocation({project}) {
    return (
        <div className="project_info container">
            <div className="description_block">
                <h2 className="main_title">Общая информация</h2>
                <div className="description">
                    {project.description}
                </div>

                {project.transports?.length 
                ?<h4 className='title'>Транспортная доступность</h4>
                :<></>}
                
                {project.transports?.length ? 
                    <div className="station">
                        {project.transports.map((el, i) => (
                            <div className="station_item" key={i}>{el}</div>
                        ))}
                    </div>
                :<></>}
            </div>

            <div className="image_block">
                <img src={`${Api.url}/images/${project.map_image}`} alt="" />
            </div>
        </div>
    );
}