import { useEffect, useRef, useState } from "react"

export default function useCalculator() {
    const [monthPay, setMonthPay] = useState(0)
    const [total, setTotal] = useState(0)
    const [field, setField] = useState({
        flat: 1000000,
        initial: 300000,
        term: 25,
        rate: 9,
    })
    const [range, setRange] = useState({
        flat: 1,
        initial: 30,
        term: 50,
        rate: 30,
    })
    const max = 100000000
    const calculatorTabs = useRef()

    useEffect(() => {

        if(field.rate <= 0 || field.term <= 0) {
            setMonthPay(0)
            setTotal(0)
            return
        }

        const loanAmount = field.flat - field.initial
        const monthlyInterestRate = field.rate / 100 / 12
        const numberOfPayments = field.term * 12

        let monthlyPayment = Math.round((loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));
        let totalAmount = monthlyPayment * numberOfPayments;

        if(totalAmount > 1000000) {
            totalAmount = totalAmount / 1000000
            totalAmount = `${totalAmount.toFixed(2)} млн.`
        }
        
        setMonthPay(Math.round(monthlyPayment))
        setTotal(totalAmount)
    }, [field])

    const validateinput = (e, max, name) => {
        let value = e.target.value.replace(/[^0-9.]/g, '').replace('.', '').replace(/\./g,'').replace('x','.');

        let zero = value.split('') 

        if(zero[0] && zero[0] <= 0 && zero[1]) {
            value = zero[1]
        }
        if(+value > +max) {
            value = max
        }
        
        let percent
        if(+max > 0) {
            percent = (value / max) * 100
        } else {
            percent = 0
        }

        return {percent, value}
    }

    const mainValidate = (e, max, name) => {

        const {value, percent} = validateinput(e, max, name)

        setRange(prev => ({...prev, [name]: percent}))
        setField(prev => ({...prev, [name]: value}))
    }

    const inputFlat = (e, max, name) => {
        const {value, percent} = validateinput(e, max, name)

        let initialPercent
        if(value > 0) {
            initialPercent = (field.initial / value) * 100
        } else {
            initialPercent = 0
        }
        
        if(value < field.initial) {
            setField(prev => ({...prev, initial: value}))
        }

        setRange(prev => ({...prev, [name]: percent, initial: initialPercent}))
        setField(prev => ({...prev, [name]: value}))
    }

    const changeCreditRateTabs = (e, rate) => {

        const allTabs = calculatorTabs.current.querySelectorAll('.main_button')

        allTabs.forEach(el => {
            if(el === e.target) {
                e.target.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })

        const rateRange = ((rate / 30 )* 100).toFixed(1)

        setRange(prev => ({...prev, rate: rateRange}))
        setField(prev => ({...prev, rate: rate}))
    }

    const changeFlatCost = (e) => {

        const value = +e.target.value

        let cost = Math.round(max * (value / 100))

        cost = cost < 100000 ? 100000 : cost

        const percent = (field.initial / cost) * 100
        
        setTimeout(() => {
            if(cost < field.initial) {
                setField(prev => ({...prev, initial: cost}))
            }
            setField(prev => ({...prev, flat: cost}))
            setRange(prev => ({...prev, flat: value, initial: percent}))
        }, 50)
    }

    const changeInitialPayment = (e) => {
        const cost = Math.round(+field.flat * (+e.target.value / 100))

        setField(prev => ({...prev, initial: cost}))
        setRange(prev => ({...prev, initial: e.target.value}))
    }

    const changeLoanTerm = (e) => {
        const value = +e.target.value
        let term = Math.round(50 * (value / 100))
        term = term < 1 ? 1 : term

        setTimeout(() => {
            setField(prev => ({...prev, term: term}))
            setRange(prev => ({...prev, term: value}))
        }, 50)
    }

    const changeCreditRate = (e) => {

        const value = +e.target.value

        let rate = 30 * (value / 100)
        rate = rate < 0.1 ? 0.1 : rate.toFixed(1)

        const allTabs = calculatorTabs.current.querySelectorAll('.main_button')

        allTabs.forEach(el => {
            const name = +el.name
            console.log('name', name.toFixed(1))
            console.log('rate', rate)
            if(name.toFixed(1) === rate) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })

        setTimeout(() => {
            setField(prev => ({...prev, rate: rate}))
            setRange(prev => ({...prev, rate: value}))
        }, 50)
    }

    const inputCreditRange = (e) => {

        if(e.target.value === '.') {
            return
        }

        let value = e.target.value.replace(/[^0-9.]/g, '').replace('.', 'x').replace(/\./g,'').replace('x','.');

        if(value > 30) {
            value = '30'
        }

        let zero = value.split('')

        if(zero[0] && zero[0] <= 0 && zero[1] && zero[1] !== '.') {

            const percent = zero[1] <= 0 ? 1 : zero[1]

            setRange(prev => ({...prev, rate: ((percent * 0.1) / 30) * 100}))
            setField(prev => ({...prev, rate: `0.${percent}`}))
            return
        }

        let str = value.split('.')

        if(str[1] && str[1].length > 1) {
            return
        } else if(str[1] && str[1].split('').length > 1) {
            return
        } else if(str[1] && str[1] <= 0 && str[0] <= 0) {
            value = 0.1
        } else {
            value = str.join('.')
        }

        const allTabs = calculatorTabs.current.querySelectorAll('.main_button')

        allTabs.forEach(el => {
            if(+el.name === +value) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })

        const percent = (value / 30) * 100
        
        setRange(prev => ({...prev, rate: percent}))
        setField(prev => ({...prev, rate: value}))  
    }

    return {monthPay, total, field, range, changeCreditRateTabs, calculatorTabs, changeFlatCost, changeInitialPayment, changeLoanTerm, changeCreditRate, inputCreditRange, mainValidate, inputFlat}
}