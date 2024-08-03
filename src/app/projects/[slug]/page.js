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

export default function ProjectDetail() {
    return (
        <div className="project_detail">

            <ProjectHead />

            <ProjectSettings />

            <ProjectAdvantages />

            <ProjectLocation />

            <ProjectPlan />

            <ProjectLayout />

            <ProjectProgress />

            <ProjectDistrict />

            <ProjectNews />

            <ProjectOther />

        </div>
    );
}