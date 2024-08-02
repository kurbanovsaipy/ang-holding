'use client'

export default function CalculatorTabs({changeCreditRateTabs, refer}) {

    return (
        <div className="tabs" ref={refer}>
            <button name="9" className="main_button active" onMouseDown={(e) => changeCreditRateTabs(e, 9)}>Семейная</button>
            <button name="16.5" className="main_button" onMouseDown={(e) => changeCreditRateTabs(e, 16.5)}>Военная</button>
            <button name="6" className="main_button" onMouseDown={(e) => changeCreditRateTabs(e, 6)}>Льготная</button>
            <button name="5" className="main_button" onMouseDown={(e) => changeCreditRateTabs(e, 5)}>IT ипотека</button>
        </div>
    )
}