import Line from '../Line'
import { Container, Left, Photo, Right, Subtitle, Title, Description } from './style'
import PhotoStrategiesSRC from '../../public/img/strategies.jpg'
import { ButtonLink } from '../Button'

function Strategies() {
    return (
        <>
            <Line/>
            <Container>
                <Left>
                    <Photo placeholder="blur" src={PhotoStrategiesSRC} alt="Imagem Estratégias"/>
                </Left>
                <Right>
                    <Subtitle>estratégias e negócios</Subtitle>
                    <Title>MARKETING É VENDA</Title>
                    <Description>Nossas soluções são para vender o seu produto, vender para mais pessoas, vender pelo maior valor e vender mais vezes.</Description>
                    <ButtonLink href="#form" $primary="secondary" $secondary="primary">FALAR COM ESPECIALISTA</ButtonLink>
                </Right>
            </Container>
        </>
    )
}

export default Strategies