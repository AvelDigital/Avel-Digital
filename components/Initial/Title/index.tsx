import useAnimation from './useAnimation'
import { Container, Dynamic, Cursor } from './style'

function Title() {
    useAnimation()

    return (
        <Container className="title">
            Potencialize seus <br/> resultados em <br/> 
            <Dynamic className="dynamic">
                <span className="value"></span>
                <Cursor className="cursor">|</Cursor>
            </Dynamic>
        </Container>
    )
}

export default Title