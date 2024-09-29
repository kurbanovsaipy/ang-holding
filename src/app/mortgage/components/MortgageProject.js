'use client'

import ProjectsCard from "@/components/card/ProjectsCard"
import SkeletProjectCard from "@/components/skelet_card/SkeletProjectCard"
import Api from "@/utils/Api"
import { useEffect, useState } from "react"

export default function MortgageProject() {

    const [load, setLoad] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        
        (async () => {

            let res = await Api.get(`pb/house`)

            if(res) {
                res = res.filter(el => el.isArchive === false && el.type === 'RESIDENTIAL').splice(0, 3)
                setProjects(res)
                setLoad(true)
            }

        })()

    }, [])

    return (
        <div className="container">
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