import { useState } from "react"

export default function CalculateItem({title, val, rangeFunc, range, inputFunc, max, name}) {

    return (
        <div className="calculate_item">

            <label htmlFor="">{title}</label>

            <div className="input_wrapper">
                <input 
                    type="text" 
                    inputMode="numeric"
                    placeholder="0" 
                    value={val} 
                    onChange={(e) => inputFunc(e, max, name)}/>
                <div 
                    className="range_fill"
                    style={{background: `linear-gradient(90deg, var(--main-color) 0 ${range}%, transparent ${range}% 100%)`}}
                ></div>
            </div>

            <input type="range" min={0} max={100} step={0.001} value={range} onChange={(e) => rangeFunc(e)}/>
        </div>
    )
}