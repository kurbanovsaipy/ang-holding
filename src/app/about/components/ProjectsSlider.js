'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import ProjectsCard from "@/components/card/ProjectsCard";

export default function ProjectsSlider() {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            speed={2500}
            rewind={true}
            autoplay={{delay: 3000}}
            centeredSlides={true}
            slidesPerView={'auto'}
            breakpoints={{
                1700: {
                    slidesPerView: 4.5
                },
                1500: {
                    slidesPerView: 4
                },
                1300: {
                    slidesPerView: 3.5
                },
                1100: {
                    slidesPerView: 3
                },
                900: {
                    slidesPerView: 2.5
                },
                700: {
                    speed: 2500,
                    spaceBetween: 50,
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1.8
                },
                500: {
                    slidesPerView: 1.5
                },
                400: {
                    spaceBetween: 30,
                    slidesPerView: 1.2
                },
                300: {
                    speed: 2000,
                    spaceBetween: 10,
                    slidesPerView: 1.1
                }
            }}
            loop={true}
        >
            <SwiperSlide>
                <ProjectsCard />
            </SwiperSlide>

            <SwiperSlide>
                <ProjectsCard />
            </SwiperSlide>

            <SwiperSlide>
                <ProjectsCard />
            </SwiperSlide>

            <SwiperSlide>
                <ProjectsCard />
            </SwiperSlide>

            <SwiperSlide>
                <ProjectsCard />
            </SwiperSlide>

            <SwiperSlide>
                <ProjectsCard />
            </SwiperSlide>

            <SwiperSlide>
                <ProjectsCard />
            </SwiperSlide>
        </Swiper>
    )
}