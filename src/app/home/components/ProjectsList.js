'use client'

import { useEffect, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import Api from "@/utils/Api";
import SkeletProjectCard from "@/components/skelet_card/SkeletProjectCard";

export default function ProjectsList() {

    const [load, setLoad] = useState(false)
    const [projects, setProjects] = useState([])
    const [filter, setFilter] = useState({
        limit: 5,
        offset: 0
    })

    useEffect(() => {

        (async () => {
            let params = new URLSearchParams(filter).toString()

            let res = await Api.get(`pb/projects?${params}`)

            if(res) {
                setProjects(res)
                setLoad(true)
            }

        })()

    }, [filter])

    return (
        <>
            {load ? 
                <div className="grid">
                    {projects?.length ? 
                        <>
                            {projects.map((el, i) => (
                                <ProjectsCard key={i} el={el}/>
                            ))}
                        </>
                    :
                        <div className="">No items</div>
                    }
                </div>
            :
                <div className="grid">
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                </div>
            }
        </>
    );
}