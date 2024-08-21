import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

interface IContainer {
    $black?: boolean
}

export const Container = styled.header<IContainer>`
    z-index: 2;
    width: 100%;
    display: flex;
    position: fixed;
    padding: 1em 2em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(3, 2, 67, 0.1);
    backdrop-filter: saturate(130%) blur(30px);

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`

export const ContainerLogo = styled(Link)`
    height: auto;
`

export const Logo = styled(Image)`
    width: 6em;
    height: auto;
    transition-duration: 0.1s;
    transition-timing-function: linear;

    &:hover {
        transform: scale(1.1);
    }
`

export const IconPhoneContainer = styled.a`
    right: 5%;
    width: 1.5em;
    display: none;
    position: absolute;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`

interface IIconPhone {
    $black?: boolean
}

export const IconPhone = styled.svg<IIconPhone>`
    fill: ${props => !props.$black ? props.theme.colors.secondary : props.theme.colors.primary};
`