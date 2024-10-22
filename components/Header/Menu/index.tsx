import { FC, useEffect, useState } from 'react'
import { Container, ContainerIconMenu, IconMenu, Options, HeaderMenu, ContainerHeaderMenuIcon, HeaderMenuIcon, ContainerHeaderMenuIconSocial, HeaderMenuIconSocial, Option, OptionText, Button } from './style'

interface IProps {
    black?: boolean
}

const Menu: FC<IProps> = ({ black }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.document.body.addEventListener('click', event => {
            if (typeof (event as any).target.className === 'string') {
                if (!(event as any).target.className.includes('options')) {
                    setShow(false)
                } else {
                    setShow(true)
                }
            } else if (typeof (event as any).target.className === 'object') {
                if ((event as any).target.id === 'close') {
                    setShow(false)
                }
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
                <HeaderMenu $show={show}>
                    <ContainerHeaderMenuIcon aria-label="Abrir menu">
                        <HeaderMenuIcon id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </HeaderMenuIcon>
                    </ContainerHeaderMenuIcon>
                    <ContainerHeaderMenuIconSocial href="https://www.instagram.com/aveldigitall" target="_blank">
                        <HeaderMenuIconSocial xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </HeaderMenuIconSocial>
                    </ContainerHeaderMenuIconSocial>
                </HeaderMenu>
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
                    <OptionText $black={black} href="/#form">Fale Conosco</OptionText>
                </Option>
                <Button $align="center" $show={show} href="/#form">FALAR COM ESPECIALISTA</Button>
            </Options>
        </Container>
    )
}

export default Menu