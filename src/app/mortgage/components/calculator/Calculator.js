'use client'

import Count from "../count/Count"
import CalculatorTabs from "./CalculatorTabs"
import useCalculator from "./hooks/useCalculator"

export default function Calculator() {

    const calculate = useCalculator()

    return (
        <div className="calculator" id="calculator">
            <h2 className="main_title">Калькулятор</h2>

            <CalculatorTabs refer={calculate.calculatorTabs} changeCreditRateTabs={calculate.changeCreditRateTabs}/>

            <Count 
                calculate={calculate}
            />
        </div>
    )
}