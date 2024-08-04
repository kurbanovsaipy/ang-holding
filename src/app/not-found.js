import Link from "next/link";


export default function NotFound() {
    return (
        <div className="not_found_wrapper">
            <h2 className="not-found">
                404.
            </h2>
            <p>Страница не найдена</p>
            <Link href={'/'} className="main_button">На главную</Link>
        </div>
    );
}