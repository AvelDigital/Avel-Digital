import useAnimation from './useAnimation'
import { Container, Dynamic, Cursor } from './style'

function Title() {
    useAnimation()

    return (
        <Container className="title">
            Transforme seu <br/> negócio com <br/> 
            <Dynamic className="dynamic">
                <span className="value"></span>
                <Cursor className="cursor">|</Cursor>
            </Dynamic>
        </Container>
    )
}

export default Title