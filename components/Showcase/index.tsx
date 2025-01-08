import Line from '../Line'
import { Container, Title } from './style'
import LogosSlide from '../LogosSlides'
import images from './images'

function Showcase() {
    return (
        <>
            <Line/>
            <Container>
                <Title>Empresas que aumentamos seu faturamento em até 300% com campanhas inteligentes</Title>
                <LogosSlide
                    id="showcase"
                    images={images}
                />
            </Container>
        </>
    )
}

export default Showcase