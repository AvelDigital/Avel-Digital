import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Container = styled.div`
    padding: 5em;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${props => props.theme.backgrounds.primary};

    @media screen and (max-width: 900px) {
        padding: 3em 2em;
        flex-direction: column;
    }
`

export const Left = styled.div`
    flex: 0.5;
    display: flex;
    margin-right: 2em;
    justify-content: center;

    @media screen and (max-width: 900px) {
        margin-right: 0;
    }
`

export const Subtitle = styled.h4`
    font-size: 1em;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};
`

export const Title = styled.h3`
    font-size: 3em;
    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        font-size: 2em;
    }
`

export const Description = styled.span`
    width: 80%;
    font-size: 1em;
    margin-top: 1em;
    font-weight: 300;
    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const Button = styled(Link)`
    display: flex;
    padding: 1.5em;
    font-size: 1em;
    margin-top: 2em;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    align-self: flex-start;
    transition-duration: 0.2s;
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

export const Right = styled.div`
    flex: 0.5;
    display: flex;
    margin-top: 1em;
`

export const Photo = styled(Image)`
    width: 90%;
    height: auto;
    object-fit: cover;
    align-self: flex-end;

    @media screen and (max-width: 900px) {
        width: 100%;
        align-self: center;
    }
`