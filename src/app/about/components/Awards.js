import AwardsSlider from "./AwardsSlider";

export default function Awards() {
    return (
        <div className="awards_wrapper" id="awards">
            <div className="awards">
                <div className="container">
                    <h2 className="main_title">Награды и прочие документы</h2>
                </div>

                <AwardsSlider />
            </div>
        </div>
    )
}