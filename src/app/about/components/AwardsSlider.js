'use client'

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';

export default function AwardsSlider({awards}) {

    return (

        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            allowTouchMove={true}
            speed={8000}
            rewind={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                //pauseOnMouseEnter: true,
            }}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
        >
            {awards?.length ? 
                <>
                    {awards.map((el) => (
                        <SwiperSlide key={el.id}>
                            <p className="year">{el.date}</p>
                            <h3>{el.title}</h3>
                            <p className="description">{el.description}</p>
                        </SwiperSlide>
                    ))}

                    {awards.map((el) => (
                        <SwiperSlide key={el.id}>
                            <p className="year">{el.date}</p>
                            <h3>{el.title}</h3>
                            <p className="description">{el.description}</p>
                        </SwiperSlide>
                    ))}

                    {awards.map((el) => (
                        <SwiperSlide key={el.id}>
                            <p className="year">{el.date}</p>
                            <h3>{el.title}</h3>
                            <p className="description">{el.description}</p>
                        </SwiperSlide>
                    ))}

                    {awards.map((el) => (
                        <SwiperSlide key={el.id}>
                            <p className="year">{el.date}</p>
                            <h3>{el.title}</h3>
                            <p className="description">{el.description}</p>
                        </SwiperSlide>
                    ))}
                </>
            :
                <></>
            }
        </Swiper>
    )
}