import { IBlog } from '../types/blog'
import blogPhoto1 from '../public/img/blogs/como-alavancar-seu-negocio-em-tempos-de-mudanca.jpg'

const blogs: IBlog[] = [
    {
        date: '21/08/2024',
        author: 'Vinícius Andrade',
        description: 'A Nova Era dos Negócios',
        slug: 'como-alavancar-seu-negocio-em-tempos-de-mudanca',
        title: 'Como Alavancar Seu Negócio em Tempos de Mudança',
        image: {
            src: blogPhoto1,
            alt: 'Como Alavancar Seu Negócio em Tempos de Mudança'
        }
    }
]

export default blogs