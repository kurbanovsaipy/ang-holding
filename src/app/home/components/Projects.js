import ProjectsCard from "../../../components/card/ProjectsCard";
import ProjectsList from "./ProjectsList";


export default function Projects() {
    return (
        <div className="container anchor" id="projects">
            <div className="head">
            <h2 className="main_title">Новостройки в Набережных Челнах</h2>
            {/* <button className='main_button'>Показать на карте</button> */}
            </div>

            <ProjectsList />
            
        </div>
    );
}