import Image from "next/image";

export default function StatistickItem({title, description, icon}) {
    return (
        <div className="item">
            <div className="icon">
                <Image className="image" src={icon} width={25} height={25} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}