'use client'

export default function CalculatorTabs({mortgage, changeCreditRateTabs, refer, tab}) {

    return (
        <div className="tabs" ref={refer}>

            {mortgage ? 
                Object.keys(mortgage).map((el, i) => (
                    <button key={i} name={mortgage[el].value} className={`main_button ${tab === mortgage[el].name ? 'active' : ''}`} onMouseDown={(e) => changeCreditRateTabs(mortgage[el].name, mortgage[el].value)}>{mortgage[el].name}</button>
                ))
            :<></>}

        </div>
    )
}