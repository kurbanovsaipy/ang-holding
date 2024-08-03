import ProjectsCard from "@/components/card/ProjectsCard";


export default function ProjectOther() {
    return (
        <div className="container project_other">
            <h2 className="main_title">Другие проекты</h2>

            <div className="grid">
                
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />

            </div>
        </div>
    );
}