import StatistickItem from "./StatistickItem";

export default function Statistick() {
    return (
        <div className="statistick container">
            <StatistickItem 
                icon={'/icons/area.svg'}
                title={'20 000 000 м2'} 
                description={'Площадь построенного и введенного в эксплуатацию жилья'}
            />
            <StatistickItem 
                icon={'/icons/family.svg'}
                title={'35 000 '} 
                description={'Счастливых семей живут в готовых квартирах'}
            />
            <StatistickItem 
                icon={'/icons/statistic.svg'}
                title={'2000'} 
                description={'Еще один параметр, который подойдет для презентации'}
            />
        </div>
    )
}