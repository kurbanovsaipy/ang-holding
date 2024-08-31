import ParkingList from "./ParkingList";


export default function Parking() {
    return (
        <div className="container anchor" id="parking">
            <div className="head">
            <h2 className="main_title">Паркинги и кладовые</h2>
            <button className='main_button'>Показать на карте</button>
            </div>
            
            <ParkingList />
            
        </div>
    );
}