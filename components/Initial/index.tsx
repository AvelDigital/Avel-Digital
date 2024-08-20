import { Container, Content, Subtitle, Button, Video } from './style'
import Title from './Title'

function Initial() {
    return (
        <Container id="initial">
            <Content>
                <Title/>
                <Subtitle>Revolucionamos suas operações de marketing, vendas e experiência do usuário, garantindo uma marca eficaz e resultados de negócios excepcionais.</Subtitle>
                <Button href="/contact">FALAR COM ESPECIALISTA</Button>
            </Content>
            <Video autoPlay loop muted playsInline> 
                <source src="/img/video.mp4" type="video/mp4"/>
            </Video>
        </Container>
    )
}

export default Initial