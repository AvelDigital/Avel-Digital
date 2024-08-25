import ITheme from '../types/theme'
import styled, { css } from 'styled-components'
import Link from 'next/link'

interface IButton {
    $primary?: keyof ITheme['colors']
    $secondary?: keyof ITheme['colors']
    $align?: 'start' | 'center' | 'end'
}

export const styleContainer = css<IButton>`
    display: flex;
    padding: 1.5em;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    align-self: ${props => props.$align || 'start'};
    color: ${props => props.$primary ? props.theme.colors[props.$primary] : props.theme.colors.primary};
    border: 3px solid ${props => props.$primary ? props.theme.colors[props.$primary] : props.theme.colors.primary};

    &:hover {
        color: ${props => props.$secondary ? props.theme.colors[props.$secondary] : props.theme.colors.secondary};
        border: 3px solid ${props => props.$primary ? props.theme.colors[props.$primary] : props.theme.colors.primary};
        background-color: ${props => props.$primary ? props.theme.colors[props.$primary] : props.theme.colors.primary};
    }

    @media screen and (max-width: 900px) {
       font-size: 0.8em;
    }
`

export const ButtonLink = styled(Link)<IButton>`
    text-decoration: none;

    ${styleContainer}
`

export const Button = styled.button<IButton>`
    cursor: pointer;
    background-color: transparent;

    ${styleContainer}
`