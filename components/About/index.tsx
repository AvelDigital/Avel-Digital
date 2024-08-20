import { FC } from 'react'
import { Container, Left, Image, Right, Title, Description, Button } from './style'
import ImageSRC from '../../public/img/animation-dynamic-and-integrated-solutions.gif'

interface IAbout {
    CTA?: boolean
}

const About: FC<IAbout> = ({ CTA=true }) => {
    return (
        <Container id="about">
            <Left>
                <Image unoptimized src={ImageSRC} alt="Animação Soluções dinâmicas e integradas"/>
            </Left>
            <Right>
                <Title>Soluções dinâmicas e integradas para acelerar o seu crescimento.</Title>
                <Description>O crescimento não depende de estrutura, segmento ou tamanho, mas sim de uma mentalidade inovadora. Não acreditamos em soluções mágicas para transformar seu negócio. Acreditamos na experimentação, na cultura de testes e no acúmulo de pequenas melhorias contínuas que, juntas, geram resultados surpreendentes.</Description>
                {CTA && <Button href="/contact">FALAR COM ESPECIALISTA</Button>}
            </Right>
        </Container>
    )
}

export default About