import styled from 'styled-components'
import { Swiper as SwiperRaw } from 'swiper/react'
import Image from 'next/image'

export const Swiper = styled(SwiperRaw)`
    width: 80%;

    .swiper-slide {
        width: auto;
        align-self: center;
    }
`

export const Photo = styled(Image)`
    width: 10em;
    height: auto;
    cursor: grab;
    transition-duration: 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`