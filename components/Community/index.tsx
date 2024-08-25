import { Container, Content, Title, Description, Form, Input } from './style'
import { Button } from '../Button'

function Community() {
    return (
        <Container>
            <Content>
                <Title>#AVELCOMUNITY</Title>
                <Description>Os melhores insights em marketing digital, vendas, experiência do cliente, desenvolvimento web e transformação digital. 
                Aproveite nosso conhecimento especializado para transformar seu negócio e alcançar resultados extraordinários!</Description>
                <Form>
                    <Input type="email" placeholder="E-mail"/>
                    <Button type="submit" $primary="secondary" $secondary="primary">QUERO FAZER PARTE</Button>
                </Form>
            </Content>
        </Container>
    )
}

export default Community