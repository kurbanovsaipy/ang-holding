import ParkingCard from "./ParkingCard";


export default function Parking() {
    return (
        <div className="container">
            <div className="head">
            <h2 className="main_title">Паркинги и кладовые</h2>
            <button className='main_button'>Показать на карте</button>
            </div>
            
            <div className="grid">
                <ParkingCard />
                <ParkingCard />
                <ParkingCard />
            </div>
        </div>
    );
}