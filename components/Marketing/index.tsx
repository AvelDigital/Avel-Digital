import { Container, Left, Subtitle, Title, Description, Right, Photo } from './style'
import { ButtonLink } from '../Button'
import PhotoMarketingSRC from '../../public/img/marketing.jpg'

function Marketing() {
    return (
        <Container>
            <Left>
                <Subtitle>marketing e vendas</Subtitle>
                <Title>Estratégias Digitais e Resultados</Title>
                <Description>Apoiamos e implementamos conteúdos para aumentar a participação das empresas B2B e B2C no mercado. Preencha as lacunas de negócios e acelere a sua agenda de crescimento!</Description>
                <ButtonLink href="/contact">FALAR COM ESPECIALISTA</ButtonLink>
            </Left>
            <Right>
                <Photo placeholder="blur" src={PhotoMarketingSRC} alt="Imagem Marketing"/>
            </Right>
        </Container>
    )
}

export default Marketing