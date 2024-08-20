import { StaticImageData } from 'next/image'
import { FC } from 'react'
import useSlidesPerView from './useSlidesPerView'
import { Swiper, Photo } from './style'
import { Autoplay } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

export interface ILogosSlides {
    id: string
    images: { alt: string, src: StaticImageData }[]
}

const LogosSlides: FC<ILogosSlides> = ({ id, images }) => {
    const slidesPerView = useSlidesPerView()

    return (
        <Swiper
            loop
            id={id}
            centeredSlides
            initialSlide={2}
            spaceBetween={100}
            modules={[Autoplay]}
            slidesPerView={slidesPerView}
            autoplay={{
                delay: 3000,
                waitForTransition: false
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Photo placeholder="blur" src={image.src} alt={image.alt}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default LogosSlides