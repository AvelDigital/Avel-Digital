import { StaticImageData } from 'next/image'

interface IBlog {
    date: string
    slug: string
    title: string
    author: string
    description: string
    image: {
        alt: string
        src: StaticImageData
    }
}