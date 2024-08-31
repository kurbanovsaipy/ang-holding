'use client'

import { useEffect, useState } from "react";
import Api from "@/utils/Api";
import SkeletProjectCard from "@/components/skelet_card/SkeletProjectCard";
import ProjectsCard from "@/components/card/ProjectsCard";
import NothingHere from "@/components/nothing_here/NothingHere";

export default function ProjectsList() {

    const [load, setLoad] = useState(false)
    const [projects, setProjects] = useState([])
    const [pagination, setPagination] = useState({})
    const [count, setCount] = useState(0)

    
    const showMore = () => {
        const page = (projects?.length / 6) + 1
        setProjects(prev => [...prev, ...pagination[page]])
    }

    const chunkList = (list) => {
        let pagination = {}
        let page = 1
        
        while (list.length > 0) {
            pagination[page++] = list.splice(0, 6)
        }
        return pagination
    }


    useEffect(() => {

        (async () => {

            let res = await Api.get(`pb/house`)

            if(res) {
                if(res) {
                    res = res.filter(el => el.isArchive === false && el.type === 'RESIDENTIAL')
                    setCount(res.length)
                    const list = chunkList(res)
                    setPagination(list)
    
                    if(list[1]) {
                        setProjects(list[1])
                    } else {
                        setProjects([])
                    }
    
                    setLoad(true)
                }
            }

        })()

    }, [])

    console.log(pagination)

    return (
        <>
            {load ? 
                <>
                    {projects?.length ? 
                        <div className="grid">
                            {projects.map((el, i) => (
                                <ProjectsCard key={i} el={el}/>
                            ))}
                        </div>
                    :
                        <NothingHere />
                    }
                </>
            :
                <div className="grid">
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                    <SkeletProjectCard />
                </div>
            }
            {projects?.length >= count ? <></> :<button className="show_more main_button" onClick={showMore}>Показать ещё</button>}
        </>
    );
}