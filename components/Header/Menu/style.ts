import styled, { css } from 'styled-components'
import Link from 'next/link'

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
    fill: ${props => !props.$black ? '#FFFFFF' : '#000000'};
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
        padding-top: 5em;
        position: absolute;
        flex-direction: column;
        background-color: #FFFFFF;
        display: ${props => props.$show ? 'flex' : 'none'};
    }
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
    color: ${props => props.$black ? '#000000' : '#FFFFFF'};

    @media screen and (max-width: 900px) {
        color: #000000;
    }
`

interface IButton {
    $show?: boolean
}

export const Button = styled(Link)<IButton>`
    display: none;
    padding: 1.5em;
    font-size: 1em;
    color: #001238;
    margin-top: 2em;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    align-self: center;
    border-radius: 20px;
    text-decoration: none;
    border: 3px solid #001238;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    &:hover {
        color: #FFFFFF;
        border: 3px solid #001238;
        background-color: #001238;
    }

    @media screen and (max-width: 900px) {
       font-size: 0.8em;
       display: ${props => props.$show ? 'flex' : 'none'};
    }
`