import styled from 'styled-components'

export const Container = styled.div`
    padding: 4em;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
`

export const Title = styled.h3`
    font-size: 3em;
    color: #001238;
    align-self: flex-start;

    @media screen and (max-width: 900px) {
        font-size: 2em;
    }
`

export const Button = styled.button`
    display: flex;
    padding: 1.5em;
    font-size: 1em;
    color: #001238;
    margin-top: 2em;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    border: 3px solid #001238;
    transition-duration: 0.2s;
    background-color: transparent;
    transition-timing-function: linear;

    &:hover {
        color: #FFFFFF;
        border: 3px solid #001238;
        background-color: #001238;
    }

    @media screen and (max-width: 900px) {
       font-size: 0.8em;
    }
`