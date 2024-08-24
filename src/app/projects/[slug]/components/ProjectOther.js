'use client'

import ProjectsCard from "@/components/card/ProjectsCard";
import SkeletProjectCard from "@/components/skelet_card/SkeletProjectCard";
import Api from "@/utils/Api";
import { useEffect, useState } from "react";


export default function ProjectOther({id}) {

    const [load, setLoad] = useState(false)
    const [projects, setProjects] = useState([])
    const [filter, setFilter] = useState({
        limit: 3,
        offset: 0
    })

    useEffect(() => {

        (async () => {
            let params = new URLSearchParams(filter).toString()

            let res = await Api.get(`pb/house?${params}`)

            if(res) {
                setProjects(res.filter(el => el.id === id))
                setLoad(true)
            }

        })()

    }, [filter])

    return (
        <div className="container project_other">
            {load ? <>{projects?.length ? <h2 className="main_title">Другие проекты</h2> : <></>}</>
            :<h2 className="main_title">Другие проекты</h2>}
            

            {load ? 
                <div className="grid">
                    {projects?.length ? 
                        <>
                            {projects.map((el, i) => (
                                <ProjectsCard key={i} el={el}/>
                            ))}
                        </>
                    :
                        <></>
                    }
                </div>
            :
                <div className="grid">
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                </div>
            }

        </div>
    );
}