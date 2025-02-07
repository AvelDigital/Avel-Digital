import styled, { css } from 'styled-components'
import Link from 'next/link'
import { ButtonLink } from '../../Button'

interface IContainer {
    $show?: boolean
}

export const Container = styled.div<IContainer>`
    display: flex;

    @media screen and (max-width: 900px) {
        left: 0;
        position: absolute;

        ${props => props.$show && css`
            top: 0;    
        `}
    }
`

interface IContainerIconMenu {
    $show?: boolean
}

export const ContainerIconMenu = styled.button<IContainerIconMenu>`
    width: 2em;
    border: none;
    display: none;
    margin-left: 1em;
    background-color: transparent;

    @media screen and (max-width: 900px) {
        display: ${props => !props.$show ? 'flex' : 'none'};
    }
`

interface IIconMenu {
    $black?: boolean
}

export const IconMenu = styled.svg<IIconMenu>`
    z-index: -2;
    fill: ${props => !props.$black ? props.theme.colors.secondary : props.theme.colors.primary};
`

interface IOptions {
    $show: boolean
}

export const Options = styled.ul<IOptions>`
    gap: 2em;
    display: flex;
    font-weight: bold;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        width: 85vw;
        padding: 1em;
        height: 100vh;
        padding-top: 2em;
        position: absolute;
        flex-direction: column;
        display: ${props => props.$show ? 'flex' : 'none'};
        background-color: ${props => props.theme.backgrounds.secondary};
    }
`

interface IHeaderMenu {
    $show: boolean
}

export const HeaderMenu = styled.div<IHeaderMenu>`
    width: 100%;
    display: none;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        display: ${props => props.$show ? 'flex' : 'none'};
    }
`

export const ContainerHeaderMenuIcon = styled.button`
    width: 2em;
    border: none;
    background-color: transparent;
`

export const HeaderMenuIcon = styled.svg`
    width: 100%;
    fill: ${props => props.theme.colors.secondary};
`

export const ContainerHeaderMenuIconSocial = styled.a`
    width: 1.5em;
    border: none;
    background-color: transparent;
`

export const HeaderMenuIconSocial = styled.svg`
    width: 100%;
    fill: ${props => props.theme.colors.secondary};
`

export const Option = styled.li`
    list-style: none;
`

interface IOptionText {
    $black?: boolean
}

export const OptionText = styled(Link)<IOptionText>`
    font-size: 1em;
    list-style: none;
    text-decoration: none;
    color: ${props => !props.$black ? props.theme.colors.secondary : props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        color: ${props => props.theme.colors.secondary};
    }
`

interface IButton {
    $show?: boolean
}

export const Button = styled(ButtonLink)<IButton>`
    display: none;
    margin-top: 2em;

    @media screen and (max-width: 900px) {
       display: ${props => props.$show ? 'flex' : 'none'};
    }
`