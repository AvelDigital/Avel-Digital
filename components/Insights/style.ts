import styled from 'styled-components'

export const Container = styled.div`
    padding: 4em;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.backgrounds.primary};
`

export const Title = styled.h3`
    font-size: 3em;
    align-self: flex-start;
    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        font-size: 2em;
    }
`

export const Button = styled.button`
    display: flex;
    padding: 1.5em;
    font-size: 1em;
    margin-top: 2em;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    transition-duration: 0.2s;
    background-color: transparent;
    transition-timing-function: linear;
    color: ${props => props.theme.colors.primary};
    border: 3px solid ${props => props.theme.colors.primary};

    &:hover {
        color: ${props => props.theme.colors.secondary};
        border: 3px solid ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.primary};
    }

    @media screen and (max-width: 900px) {
       font-size: 0.8em;
    }
`