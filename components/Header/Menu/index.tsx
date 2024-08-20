import { FC, useEffect, useState } from 'react'
import { Container, ContainerIconMenu, IconMenu, Options, Option, OptionText, Button } from './style'

interface IProps {
    black?: boolean
}

const Menu: FC<IProps> = ({ black }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.document.body.addEventListener('click', event => {
            if (!(event as any).target.className.includes('options')) {
                setShow(false)
            } else {
                setShow(true)
            }
        })
    }, [])

    return (
        <Container $show={show}>
            <ContainerIconMenu $show={show} className="options" onClick={() => setShow(true)}>
                <IconMenu $black={black} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </IconMenu>
            </ContainerIconMenu>
            <Options $show={show} className="options">
                <Option>
                    <OptionText $black={black} href="/blog">Blog</OptionText>
                </Option>
                <Option>
                    <OptionText $black={black} href="/#about">Sobre</OptionText>
                </Option>
                <Option>
                    <OptionText $black={black} href="/#insights">Cases</OptionText>
                </Option>
                <Option>
                    <OptionText $black={black} href="/contact">Fale Conosco</OptionText>
                </Option>
                <Button $show={show} href="/contact">
                    FALAR COM ESPECIALISTA
                </Button>
            </Options>
        </Container>
    )
}

export default Menu