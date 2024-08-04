export default function StatistickItem({title, description}) {
    return (
        <div className="item">
            <div className="icon"></div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}