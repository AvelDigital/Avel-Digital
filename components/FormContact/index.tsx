import { Container, Texts, Title, Step, StepIcon, StepTexts, StepTitle, StepDescription, Form, Field, Label, Input, InputSelect, Button } from './style'
import Line from '../Line'

function FormContact() {
    return (
        <Container id="form">
            <Line/>
            <Texts>
                <Title>Preencha o formulário e aguarde o contato de um especialista para uma consultoria gratuita</Title>
                <Step>
                    <StepIcon xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none"/>
                        </g>
                        <g>
                            <path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M7,7h5v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10 V13z M15,9V5l4,4H15z"/>
                        </g>
                    </StepIcon>
                    <StepTexts>
                        <StepTitle>Preencha o formulário</StepTitle>
                        <StepDescription>Envie suas informações agora e avance rumo ao sucesso. Seus dados estarão totalmente protegidos conosco.</StepDescription>
                    </StepTexts>
                </Step>
                <Step>
                    <StepIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </StepIcon>
                    <StepTexts>
                        <StepTitle>Receba uma ligação</StepTitle>
                        <StepDescription>Em até 2 horas, um dos nossos especialistas fará uma ligação para agendar a reunião mais importante com você.</StepDescription>
                    </StepTexts>
                </Step>
            </Texts>
            <Form action={process.env.NEXT_PUBLIC_FORM_URL} method="POST">
                <Field>
                    <Label>Nome Completo</Label>
                    <Input required name="name" id="name"/>
                </Field>
                <Field>
                    <Label>E-mail</Label>
                    <Input required name="email" id="email" type="email"/>
                </Field>
                <Field>
                    <Label>Nome da Empresa</Label>
                    <Input required name="company" id="company"/>
                </Field>
                <Field>
                    <Label>Telefone</Label>
                    <Input required name="phone" id="phone" type="tel"/>
                </Field>
                <Field>
                    <Label>Faturamento Mensal</Label>
                    <InputSelect required name="billing" id="billing"> 
                        <option>Até 5 mil</option> 
                        <option>De 6 mil à 10 mil</option> 
                        <option>De 11 mil à 50 mil</option> 
                        <option>De 51 mil à 100 mil</option> 
                        <option>De 101 mil à 200 mil</option> 
                        <option>Mais de 200 mil</option> 
                    </InputSelect>
                </Field>
                <Field>
                    <Label>Segmento</Label>
                    <InputSelect required name="segment" id="segment">
                        <option>Negócios B2B em Geral</option> 
                        <option>Agronegócio</option> 
                        <option>Atacadista/Distribuidor</option> 
                        <option>Construtora e Incorporadora</option> 
                        <option>Concessionária de Veículos</option> 
                        <option>Educação</option> 
                        <option>Energia</option> 
                        <option>Equipamentos/Rental</option> 
                        <option>Indústria</option> 
                        <option>Imobiliária</option> 
                        <option>Agência de Marketing</option> 
                        <option>Rede de Franquia</option> 
                        <option>Saúde</option> 
                        <option>Serviço Financeiro</option> 
                        <option>Software/Tecnologia</option> 
                        <option>Varejo/E-commerce</option> 
                        <option>Outros segmentos</option> 
                        <option>Infoproduto</option> 
                        <option>Não tenho empresa</option> 
                        <option>Empresa Junior</option> 
                    </InputSelect>
                </Field>
                <Button $align="center" $primary="secondary" $secondary="primary">Consultoria Gratuita</Button>
            </Form>
        </Container>
    )
}

export default FormContact