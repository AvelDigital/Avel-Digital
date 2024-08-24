import { Dispatch, SetStateAction, FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Overlay, Container, Header, Input, Button } from './style'

interface IProps {
    showForm: boolean
    setShowForm: Dispatch<SetStateAction<boolean>>
}

const Form: FC<IProps> = ({ showForm, setShowForm }) => {
    const router = useRouter()

    useEffect(() => {
        window.document.body.style.overflowY = showForm ? 'hidden': 'auto'
    }, [showForm])

    return (
        <Overlay $showForm={showForm} onClick={() => setShowForm(false)}>
            <Container onSubmit={ev => {
                ev.preventDefault()

                router.push(`https://api.whatsapp.com/send?phone=5581989119536&text=Quero%20gerar%20mais%20vendas%0A%0ANome: ${(ev as any).target.name.value}%0AE-mail: ${(ev as any).target.email.value}%0ATelefone: ${(ev as any).target.phone.value}`)
            }} onClick={ev =>  ev.stopPropagation()}>
                <Header>
                    <span>Olá! Preencha os campos abaixo para iniciar a conversa no WhatsApp</span>
                </Header>
                <Input required name="name" id="name" placeholder="Nome"/>
                <Input required name="email" id="email" type="email" placeholder="E-mail"/>
                <Input required name="phone" id="phone" type="tel" placeholder="Telefone"/>
                <Button type="submit">Iniciar a conversa</Button>
            </Container>
        </Overlay>
    )
}

export default Form