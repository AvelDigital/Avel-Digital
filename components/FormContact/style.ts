import styled from 'styled-components'
import { Button as ButtonRaw } from '../Button'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 2em;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${props => props.theme.backgrounds.primary};
`

export const Texts = styled.div`
    width: 40%;
    display: flex;
    margin-top: 5em;

    @media screen and (max-width: 900px) {
        width: 80%;
        align-items: center;
    }
`

export const Title = styled.h3`
    margin-bottom: 2em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.subtitle};

    @media screen and (max-width: 900px) {
        text-align: center;
        font-size: ${props => props.theme.fonts.subtitle};
    }
`

export const Step = styled.div`
    gap: 1em;
    width: 80%;
    padding: 1em;
    display: flex;
    margin-bottom: 5em;
    align-items: center;
    border-radius: 10px;
    flex-direction: row;
    background-color: ${props => props.theme.backgrounds.tertiary};

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-bottom: 2em;
    }
`

export const StepIcon = styled.svg`
    width: 8em;
    height: auto;
    fill: ${props => props.theme.colors.secondary};

    @media screen and (max-width: 900px) {
        width: 15em;
    }
`

export const StepTexts = styled.div`
    display: flex;
`

export const StepTitle = styled.span`
    font-size: ${props => props.theme.fonts.subtitle};
`

export const StepDescription = styled.span`
    margin-top: 1em;
    font-size: ${props => props.theme.fonts.description};
`

export const Form = styled.form`
    gap: 1em;
    width: 30%;
    padding: 1em;
    display: flex;
    margin-top: 4em;
    margin-bottom: 5em;
    align-self: center;
    border-radius: 10px;
    justify-content: space-between;
    border: 2px solid ${props => props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        width: 90%;
        margin-top: 1em;
        flex-direction: column;
    }
`
export const Field = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 900px) {
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