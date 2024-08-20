import { Container, Title } from './style'
import LogosSlide from '../LogosSlides'
import images from './images'

function Showcase() {
    return (
        <Container>
            <Title>Grandes empresas escolheram a Avel para estruturar ou acelerar o crescimento</Title>
            <LogosSlide
                id="showcase"
                images={images}
            />
        </Container>
    )
}

export default Showcase