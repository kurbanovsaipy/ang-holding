'use client'

import Count from "../count/Count"
import CalculatorTabs from "./CalculatorTabs"
import useCalculator from "./hooks/useCalculator"

export default function Calculator({mortgage}) {

    const calculate = useCalculator(mortgage)

    return (
        <div className="calculator" id="calculator">
            <h2 className="main_title">Калькулятор</h2>

            <CalculatorTabs mortgage={mortgage} refer={calculate.calculatorTabs} changeCreditRateTabs={calculate.changeCreditRateTabs} tab={calculate.tab}/>

            <Count 
                calculate={calculate}
            />
        </div>
    )
}