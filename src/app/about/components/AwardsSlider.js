'use client'

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';

export default function AwardsSlider() {

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            allowTouchMove={false}
            speed={2000}
            rewind={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
        >
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
            <SwiperSlide>
                <p className="year">2023</p>
                <h3>Заголовок</h3>
                <p className="description">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
            </SwiperSlide>
        </Swiper>
    )
}