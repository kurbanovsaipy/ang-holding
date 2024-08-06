'use client'

import { useState } from "react"
import useFeedback from "../hooks/useFeedback"

export default function Consultation() {

    const feedBack = useFeedback()

    return (
        <form action="" className="consultation" onSubmit={(e) => feedBack.sendForm(e)}>
            <div>
                <h2 className="main_title mb">Консультация</h2>
                <p>Наш менеджер свяжется с вами в ближайшее время.</p>
            </div>

            <div>
                <input type="text" className={`${feedBack.error.name ? 'input_error' : ''}`} value={feedBack.input.name} placeholder="Ваше имя" onChange={(e) => feedBack.changeName(e.target.value)} />
                <p className="error">{feedBack.error.name ? feedBack.error.name : ''}</p>
            </div>

            <div>
                <input type="text" className={`${feedBack.error.phone ? 'input_error' : ''}`} value={feedBack.input.phone} placeholder="Телефон" onPaste={feedBack.onPhonePaste} onKeyDown={feedBack.onPhoneKeyDown} onChange={feedBack.onPhoneInput}/>
                <p className="error">{feedBack.error.phone ? feedBack.error.phone : ''}</p>
            </div>

            <button className="main_button">Получить консультацию</button>

            <a href={`tel:${feedBack.info?.phone}`} className="main_title">{feedBack.info?.phone}</a>

            <p>Нажимая кнопку «Получить консультацию», вы подтверждаете свое согласие на обработку персональных данных</p>
        </form>
    )
}