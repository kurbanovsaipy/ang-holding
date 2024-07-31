import Link from "next/link";


export default function ParkingCard() {
    return (
        <div className="card">
            <img src="https://avatars.mds.yandex.net/i?id=840c1ef927abb63816ab4d080e77fe49_l-3614575-images-thumbs&n=13" alt="" className="back_image" />
            <Link href={''} className='cover_link'></Link>
            <Link href={''} className='title'>Riversky</Link>
            <div className="ofer">Старт продаж новых квартир</div>
            <div className="advantages">
            <h3 className="advantages_title">Преимущество</h3>
            <p className="description">Описание преимущества</p>
            </div>
        </div>
    );
}