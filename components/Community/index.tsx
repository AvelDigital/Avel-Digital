import { Container, Content, Title, Description, Form, Input } from './style'
import { Button } from '../Button'
import Line from '../Line'

function Community() {
    return (
        <Container>
            <Content>
                <Title>#AVELCOMUNITY</Title>
                <Description>Preencha o formulário e receba agora nosso eBook exclusivo sobre Marketing Digital. Descubra estratégias e dicas práticas para impulsionar seu negócio online!</Description>
                <Form>
                    <Input type="email" placeholder="E-mail"/>
                    <Button type="submit" $align="center" $primary="secondary" $secondary="primary">QUERO MEU EBOOK</Button>
                </Form>
            </Content>
            <Line/>
        </Container>
    )
}

export default Community