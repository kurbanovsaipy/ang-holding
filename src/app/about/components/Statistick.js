import StatistickItem from "./StatistickItem";

export default function Statistick() {
    return (
        <div className="statistick container">
            <StatistickItem 
                title={'20 000 000 м2'} 
                description={'Площадь построенного и введенного в эксплуатацию жилья'}
            />
            <StatistickItem 
                title={'35 000 '} 
                description={'Счастливых семей живут в готовых квартирах'}
            />
            <StatistickItem 
                title={'2000'} 
                description={'Еще один параметр, который подойдет для презентации'}
            />
        </div>
    )
}