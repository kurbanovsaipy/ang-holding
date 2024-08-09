'use client'

import {Autoplay, Navigation, A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MortgageSlider() {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[ Autoplay ]}
            draggable={false}
            speed={2500} 
            loop={true}
            autoplay={
                {delay: 4000}
            }
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>HELLO</SwiperSlide>
            <SwiperSlide>HELLO</SwiperSlide>
            <SwiperSlide>HELLO</SwiperSlide>
            <SwiperSlide>HELLO</SwiperSlide>
        </Swiper>
    )
}