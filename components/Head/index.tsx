import { FC } from 'react'
import HeadRaw from 'next/head'
import GoogleTagManager from './GoogleTagManager'

interface IProps {
    url?: string
    title?: string
    image?: string
    author?: string
    keywords?: string
    description?: string
}

const Head: FC<IProps> = ({ title='Avel Comunicação', description='Geramos vendas, você colhe os resultados', url='', image='/img/thumbnail.png', author='Avel Comunicação', keywords='marketing digital, aumentar faturamento online, otimização de conversão, consultoria de marketing digital, agência de marketing, Avel Comunicação marketing' }) => {
    return (
        <>
            <HeadRaw>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN+url}/>
                <meta property="og:image" content={process.env.NEXT_PUBLIC_DOMAIN+image}/>
                <meta name="author" content={author}/>
                <meta name="keywords" content={keywords}/>
            </HeadRaw>
            <GoogleTagManager/>
        </>
    )
}

export default Head