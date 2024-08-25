import styled from 'styled-components'
import { Button as ButtonRaw } from '../Button'

export const Container = styled.form`
    gap: 1em;
    width: 60%;
    display: flex;
    margin-top: 4em;
    flex-wrap: wrap;
    margin-bottom: 5em;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        width: 80%;
        flex-direction: column;
    }
`

interface IField {
    $full?: boolean
}

export const Field = styled.div<IField>`
    display: flex;
    width: ${props => props.$full ? '100' : '45'}%;

    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    }
`

export const Label = styled.span`
    color: ${props => props.theme.colors.primary};
`

export const Input = styled.input`
    padding: 0.4em;
    font-size: 1.2em;
    margin-top: 0.5em;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.colors.primary};
`

export const InputSelect = styled.select`
    padding: 0.2em;
    font-size: 1.2em;
    margin-top: 0.5em;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.colors.primary};
`

export const InputTextarea = styled.textarea`
    padding: 0.2em;
    font-size: 1.2em;
    resize: vertical;
    margin-top: 0.5em;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.colors.primary};
`

export const Button = styled(ButtonRaw)`
    width: 50%;
    margin: auto;
    margin-top: 2em;
    align-items: center;

    @media screen and (max-width: 900px) {
        width: 100%;
        font-size: 1em;
    }
`