import { FC } from 'react'
import { Container, ContainerLogo, Logo, IconPhoneContainer, IconPhone } from './style'
import LogoAvelSRC from '../../public/img/Logo Avel em Branco.png'
import LogoAvelBlackSRC from '../../public/img/Logo Avel em Preto.png'
import Menu from './Menu'

interface IHeader {
    black?: boolean
}

const Header: FC<IHeader> = ({ black }) => {
    return (
        <Container $black={black}>
            <ContainerLogo href="/">
                <Logo src={!black ? LogoAvelSRC : LogoAvelBlackSRC} alt="Logo Avel"/>
            </ContainerLogo>
            <Menu black={black}/>
            <IconPhoneContainer aria-label="Ir para o Whatsapp" href="https://api.whatsapp.com/send?phone=5581989099913&text=Quero%20gerar%20mais%20vendas">
                <IconPhone $black={black} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </IconPhone>
            </IconPhoneContainer>
        </Container>
    )
}

export default Header