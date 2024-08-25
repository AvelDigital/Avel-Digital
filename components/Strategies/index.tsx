import { Container, Left, Photo, Right, Subtitle, Title, Description } from './style'
import PhotoStrategiesSRC from '../../public/img/strategies.jpg'
import { ButtonLink } from '../Button'

function Strategies() {
    return (
        <Container>
            <Left>
                <Photo placeholder="blur" src={PhotoStrategiesSRC} alt="Imagem Estratégias"/>
            </Left>
            <Right>
                <Subtitle>estratégias e negócios</Subtitle>
                <Title>Impulsionamos a sua empresa!</Title>
                <Description>Nossos serviços são focados no elemento mais importante: o usuário. Por isso, todas as nossas soluções tem o objetivo de desenvolver clientes leais para a sua marca.</Description>
                <ButtonLink href="/contact">FALAR COM ESPECIALISTA</ButtonLink>
            </Right>
        </Container>
    )
}

export default Strategies