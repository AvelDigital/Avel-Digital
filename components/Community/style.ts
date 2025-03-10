import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    background-color: ${props => props.theme.backgrounds.secondary};
`

export const Content = styled.div`
    width: 80%;
    padding: 2em;
    display: flex;
    margin-bottom: 5em;
    align-self: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${props => props.theme.backgrounds.tertiary};

    @media screen and (max-width: 900px) {
       width: 100%;
       border-radius: 0;
    }
`

export const Title = styled.h3`
    font-size: 3em;
    margin-top: 0.5em;

    @media screen and (max-width: 900px) {
       font-size: 7vw;
    }
`

export const Description = styled.span`
    margin-top: 2em;
    font-size: 1.2em;
    text-align: center;

    @media screen and (max-width: 900px) {
       font-size: 0.8em;
    }
`

export const Form = styled.form`
    gap: 2em;
    width: 80%;
    display: flex;
    margin-top: 2em;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Input = styled.input`
    width: 55%;
    border: none;
    padding: 1em;
    font-size: 1.2em;
    border-radius: 15px;
    ${props => props.theme.colors.primary}

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`