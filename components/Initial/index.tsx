import { Container, Content, Subtitle, Video } from './style'
import Title from './Title'
import { ButtonLink } from '../Button'

function Initial() {
    return (
        <Container id="initial">
            <Content>
                <Title/>
                <Subtitle>Revolucionamos suas operações de marketing, vendas e experiência do usuário, garantindo uma marca eficaz e resultados de negócios excepcionais.</Subtitle>
                <ButtonLink $primary="secondary" $secondary="primary" href="#form">FALAR COM ESPECIALISTA</ButtonLink>
            </Content>
            <Video autoPlay loop muted playsInline poster="/img/thumbnail.jpg"> 
                <source src="/img/video.mp4" type="video/mp4"/>
            </Video>
        </Container>
    )
}

export default Initial