import CalculateItem from "./CalculateItem";

export default function Count({calculate}) {
    const {monthPay, total, field, range, changeFlatCost, changeInitialPayment, changeLoanTerm, changeCreditRate, inputCreditRange, mainValidate, inputFlat} = calculate

    return (
        <div className="count">
            <div className="calculate_block">
                <CalculateItem 
                    title={'Стоимость квартиры, руб'}
                    rangeFunc={changeFlatCost}
                    inputFunc={inputFlat}
                    max={100000000}
                    name={'flat'}
                    val={field.flat}
                    range={range.flat}
                />

                <CalculateItem 
                    title={'Первоначальный взнос, руб'}
                    rangeFunc={changeInitialPayment}
                    inputFunc={mainValidate}
                    max={field.flat}
                    name={'initial'}
                    val={field.initial}  
                    range={range.initial}
                />

                <div className="flex">
                    <CalculateItem 
                        title={'Срок кредита, лет'}
                        rangeFunc={changeLoanTerm}
                        inputFunc={mainValidate}
                        max={50}
                        name={'term'}
                        val={field.term}
                        range={range.term}
                    />

                    <CalculateItem 
                        title={'Ставка, %'} 
                        rangeFunc={changeCreditRate}
                        inputFunc={inputCreditRange}
                        val={field.rate}
                        range={range.rate}
                    />
                </div>

            </div>

            <div className="result_block">

                <div className="result__count">
                    <div>
                        <label htmlFor="">Платёж в месяц</label>
                        <p className="loan">{monthPay} ₽</p>
                    </div>

                    <div className="loan_summ">

                        <div className="loan_item">
                            <label htmlFor="">Сумма кредита</label>

                            <p>{total} ₽</p>
                        </div>

                        <div className="loan_item">
                            <label htmlFor="">Ставка</label>

                            <p>{field.rate <=0 ?'0' : field.rate} %</p>
                        </div>
                    </div>

                    <p>Точную информацию по ипотеке уточняйте у банка!</p>
                </div>

            </div>
        </div>
    )
}