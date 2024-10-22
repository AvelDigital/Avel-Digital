import { FC } from 'react'
import { Container, Left, Image, Right, Title, Description } from './style'
import ImageSRC from '../../public/img/animation-dynamic-and-integrated-solutions.gif'
import { ButtonLink } from '../Button'

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
                <Description>O crescimento não depende de estrutura, segmento ou tamanho, mas sim de uma mentalidade inovadora. Não acreditamos em soluções mágicas para <span className="bold">transformar seu negócio</span>. Acreditamos na experimentação, na cultura de testes e no acúmulo de pequenas melhorias contínuas que, juntas, <span className="bold">geram resultados surpreendentes.</span></Description>
                {CTA && <ButtonLink href="#form">FALAR COM ESPECIALISTA</ButtonLink>}
            </Right>
        </Container>
    )
}

export default About