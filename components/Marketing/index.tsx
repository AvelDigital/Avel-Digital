import { Container, Left, Subtitle, Title, Description, Button, Right, Photo } from './style'
import PhotoMarketingSRC from '../../public/img/marketing.jpg'

function Marketing() {
    return (
        <Container>
            <Left>
                <Subtitle>marketing e vendas</Subtitle>
                <Title>Estratégias Digitais e Resultados</Title>
                <Description>Apoiamos e implementamos conteúdos para aumentar a participação das empresas B2B e B2C no mercado. Preencha as lacunas de negócios e acelere a sua agenda de crescimento!</Description>
                <Button href="/contact">FALAR COM ESPECIALISTA</Button>
            </Left>
            <Right>
                <Photo placeholder="blur" src={PhotoMarketingSRC} alt="Imagem Marketing"/>
            </Right>
        </Container>
    )
}

export default Marketing