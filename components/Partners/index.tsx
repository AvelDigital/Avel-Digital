import { Container } from './style'
import LogosSlides from '../LogosSlides'
import images from './images'

function Partners() {
    return (
        <Container>
            <LogosSlides id="partners" images={images}/>
        </Container>
    )
}

export default Partners