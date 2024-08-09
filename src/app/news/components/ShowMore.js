export default function ShowMore({showMore}) {
    return (
        <button className="main_button show" onMouseDown={() => showMore()}>
            Показать ещё
        </button>
    )
}