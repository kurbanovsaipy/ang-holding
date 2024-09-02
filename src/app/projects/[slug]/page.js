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
import Head from 'next/head';

export async function generateMetadata({params}) {
  
    let meta = await Api.getDataList(`pb/house?id=`, params.slug)
  
    if(meta) {
      return {
        title: meta.title, 
        description: meta.project.description,
        keywords: meta.keywords,
        contentType: meta.contentType,
        author: meta.author,
        openGraph: {
            title: meta.title,
            url: meta.og_url,
            description: meta.project.description,
            images: [
              {
                url: meta.image,
                width: 500,
                height: 400
              }
            ],
            siteName: meta.og_site_name
        }
      }
    }
  }

export default async function ProjectDetail({params}) {

    const project = await Api.getDataList(`pb/house?id=`, params.slug)

    return (
        <div className="project_detail">

            <ProjectHead id={params.slug} project={project}/>

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