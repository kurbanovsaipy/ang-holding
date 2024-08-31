import Api from "@/utils/Api";
import ProjectsSlider from "./ProjectsSlider";

export default async function Projects() {

    const project = await Api.get(`pb/house`)

    return (
        <div className="projects">
            <div className="container">
                <h2 className="main_title">Наши проекты</h2>
            </div>

            <ProjectsSlider project={project}/>
        </div>
    )
}