import Link from "next/link";


export default function ProjectsCard() {
    return (
        <div className="card">
            <img src="https://pro-dachnikov.com/uploads/posts/2023-01/1673146778_pro-dachnikov-com-p-kvartira-mechti-foto-1.png" alt="" className="back_image" />
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