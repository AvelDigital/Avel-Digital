import styled from 'styled-components'

export const Container = styled.button`
    right: 2%;
    bottom: 4%;
    width: 5em;
    z-index: 1;
    padding: 1em;
    border: none;
    display: flex;
    position: fixed;
    cursor: pointer;
    border-radius: 50%;
    background-color: #25d366;

    @media screen and (max-width: 900px) {
       width: 4em;
       padding: 0.8em;
    }
`

export const Icon = styled.svg`
    width: 100%;
    fill: ${props => props.theme.colors.secondary};
`