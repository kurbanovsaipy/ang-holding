export default function Consultation() {
    return (
        <form action="" className="consultation">
            <div>
                <h2 className="main_title mb">Консультация</h2>
                <p>Наш менеджер свяжется с вами в ближайшее время.</p>
            </div>

            <input type="text" placeholder="Ваше имя"/>
            <input type="text" placeholder="Телефон"/>

            <button className="main_button">Получить консультацию</button>

            <a href="tel:+78552230044" className="main_title">+7 (8552) 146-56-78</a>

            <p>Нажимая кнопку «Получить консультацию», вы подтверждаете свое согласие на обработку персональных данных</p>
        </form>
    )
}