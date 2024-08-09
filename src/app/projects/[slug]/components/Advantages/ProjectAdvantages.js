'use client'

import AdvantagesSlider from "./components/AdvantagesSlider"
import DescriptionWindow from "./components/DescriptionWindow"
import Tabs from "./components/Tabs"
import useAdvantages from "./hooks/useAdvantages"


export default function ProjectAdvantages() {

    const advantages = useAdvantages()

    return (
        <div className="project_advantages container">
            <h2 className="main_title">Ключевые преимущества</h2>

            <div className="advantages_window">

                <Tabs advantages={advantages}/>

                <AdvantagesSlider />
                
                <DescriptionWindow info={advantages.info[advantages.tab]}/>

            </div>
        </div>
    )
}