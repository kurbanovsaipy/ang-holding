import './css/detail.scss'
import ProjectHead from './components/ProjectHead';
import ProjectSettings from './components/ProjectSettings';
import ProjectAdvantages from './components/Advantages/ProjectAdvantages';
import ProjectLocation from './components/ProjectLocation';
import ProjectPlan from './components/ProjectPlan';
import ProjectDistrict from './components/ProjectDistrict';
import ProjectLayout from './components/ProjectLayout';
import ProjectProgress from './components/ProjectProgress';
import ProjectNews from './components/ProjectNews';
import ProjectOther from './components/ProjectOther';
import Api from '@/utils/Api';

export default async function ProjectDetail({params}) {

    const project = await Api.getDataList(`pb/house?id=`, params.slug)

    return (
        <div className="project_detail">

            <ProjectHead project={project}/>

            {/* <ProjectAdvantages /> */}

            <ProjectSettings data={project.developmentEndQuarter} maxFloor={project.maxFloor} propertyCount={project.propertyCount}/>

            <ProjectLocation project={project.project}/>

            <ProjectPlan id={project.projectId}/>

            <ProjectDistrict project={project.project}/>

            <ProjectLayout id={params.slug}/>

            <ProjectProgress progress={project.project.progress}/>

            <ProjectNews />

            <ProjectOther id={params.slug}/>

        </div>
    );
}