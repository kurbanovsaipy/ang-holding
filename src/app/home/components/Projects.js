import ProjectsCard from "../../../components/card/ProjectsCard";


export default function Projects() {
    return (
        <div className="container">
            <div className="head">
            <h2 className="main_title">Новостройки в Набережных Челнах</h2>
            <button className='main_button'>Показать на карте</button>
            </div>

            <div className="grid">
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
        </div>
    );
}