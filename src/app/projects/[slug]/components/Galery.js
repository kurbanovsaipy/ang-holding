'use client'

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination} from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Api from '@/utils/Api';

export default function Galery({galery}) {

    const [swiper, setSwiper] = useState()

    return (
        <>
            <Swiper
                onSwiper={setSwiper}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={true}
                speed={1000}
                
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}

                navigation={false}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, Pagination ]}
                className='galery_swiper'
            >
                {galery?.length ? 
                    <>
                        {galery.map((el, i) => (
                            <SwiperSlide>
                                <Image key={i} src={el.url} width={0} height={0} style={{ width: '100%', height: '100%' }} priority={100} placeholder="blur" unoptimized={true} blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" alt=""/>
                            </SwiperSlide>
                        ))}
                    </>
                :<></>}

                {galery.length > 1 ? 
                    <div className="button_block">
                        <button className="prev" onClick={() => swiper.slidePrev()}>&#10094;</button>
                        <button className="next" onClick={() => swiper.slideNext()}>&#10095;</button>
                    </div>
                :<></>}


            </Swiper>
        </>
       
    );
}