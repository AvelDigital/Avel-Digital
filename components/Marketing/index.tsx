import Line from '../Line'
import { Container, Left, Subtitle, Title, Description, Right, Photo } from './style'
import { ButtonLink } from '../Button'
import PhotoMarketingSRC from '../../public/img/marketing.jpg'

function Marketing() {
    return (
        <>
            <Line/>
            <Container>
                <Left>
                    <Subtitle>marketing e vendas</Subtitle>
                    <Title>Conheça nossa consultoria personalizada</Title>
                    <Description>Vagas limitadas para consultoria personalizada garanta seu lugar e comece a ver resultados em menos de 30 dias</Description>
                    <ButtonLink href="#form" $primary="secondary" $secondary="primary">FALAR COM ESPECIALISTA</ButtonLink>
                </Left>
                <Right>
                    <Photo placeholder="blur" src={PhotoMarketingSRC} alt="Imagem Marketing"/>
                </Right>
            </Container>
        </>
    )
}

export default Marketing