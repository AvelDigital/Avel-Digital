import { FC } from 'react'
import Line from '../Line'
import { Container, Left, Image, Right, Title, Description } from './style'
import ImageSRC from '../../public/img/image-agency.jpg'
import { ButtonLink } from '../Button'

interface IAbout {
    CTA?: boolean
}

const About: FC<IAbout> = ({ CTA=true }) => {
    return (
        <>
            <Line/>
            <Container id="about">
                <Left>
                    <Image unoptimized src={ImageSRC} alt="Imagem agencia"/>
                </Left>
                <Right>
                    <Title>Muito mais que marketing. Avel é publicidade com estratégia, impacto e resultado.</Title>
                    <Description>Apostamos em testes e melhorias contínuas para resultados surpreendentes. Escolha nossos serviços e conquiste resultados rápidos e consistentes.</Description>
                    {CTA && <ButtonLink $primary="secondary" $secondary="primary" href="#form">FALAR COM ESPECIALISTA AGORA</ButtonLink>}
                </Right>
            </Container>
        </>
    )
}

export default About