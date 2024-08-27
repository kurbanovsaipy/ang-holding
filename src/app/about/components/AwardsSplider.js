'use client'
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function AwardsSplider({awards}) {

    return (
        <Splide
        
            options={{
                type  : 'loop',
                // speed: '8000',
                // interval: '10',
                //autoplay     : true,
                autoWidth: true,
                pauseOnHover : true,
                resetProgress: false,
                rewind: false,
                width : '100%',
                gap   : '30px',
                focus: 'center',
                arrows: false,
                pagination: false,
                drag: 'free',
                autoStart: true,
                autoScroll: {
                    speed: 1,
                },
                //perPage: '5',
                
            }}
            extensions={ { AutoScroll } }
        >
            {awards?.length ?
                <>
                    {awards.map(el => (
                        <SplideSlide>
                            <p className="year">{el.date}</p>
                            <h3>{el.title}</h3>
                            <p className="description">{el.description}</p>
                        </SplideSlide>
                    ))}
                </>
            :
                <></>
            }
        </Splide>
    )
}