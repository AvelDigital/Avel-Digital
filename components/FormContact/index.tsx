import { Container, Field, Label, Input, InputSelect, InputTextarea, Button } from './style'

function FormContact() {
    return (
        <Container action={process.env.NEXT_PUBLIC_FORM_URL} method="POST">
            <Field>
                <Label>Nome Completo</Label>
                <Input name="name" id="name"/>
            </Field>
            <Field>
                <Label>Empresa</Label>
                <Input name="company" id="company"/>
            </Field>
            <Field>
                <Label>E-mail corporativo</Label>
                <Input name="email" id="email" type="email"/>
            </Field>
            <Field>
                <Label>Segmento</Label>
                <InputSelect name="segment" id="segment">
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
            <Field>
                <Label>Telefone</Label>
                <Input name="phone" id="phone" type="tel"/>
            </Field>
            <Field>
                <Label>Cargo</Label>
                <InputSelect name="position" id="position"> 
                    <option>Analista de Marketing</option> 
                    <option>Gerente/Coordenador de Marketing</option> 
                    <option>Gerente/Coordenador de Vendas</option> 
                    <option>Diretor</option> 
                    <option>Sócio/CEO</option> 
                    <option>Outros cargos</option> 
                    <option>Estudante</option> 
                    <option>Autônomo</option> 
                </InputSelect>
            </Field>
            <Field $full>
                <Label>Mensagem</Label>
                <InputTextarea name="message" id="message" rows={3}/>
            </Field>
            <Button>Enviar mensagem</Button>
        </Container>
    )
}

export default FormContact