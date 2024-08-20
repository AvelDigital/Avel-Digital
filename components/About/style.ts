import styled from 'styled-components'
import ImageRaw from 'next/image'
import Link from 'next/link'

export const Container = styled.div`
    padding: 5em;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: #EFEFEF;

    @media screen and (max-width: 900px) {
        padding: 4em 2em;
        flex-direction: column;
    }
`

export const Left = styled.div`
    flex: 0.5;
    display: flex;
    margin-right: 2em;
    justify-content: center;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin-right: 0;
    }
`

export const Image = styled(ImageRaw)`
    width: 90%;
    height: auto;
    object-fit: cover;
    align-self: flex-end;

    @media screen and (max-width: 900px) {
        width: 100%;
        align-self: center;
    }
`

export const Right = styled.div`
    flex: 0.5;
    display: flex;
    margin-top: 1em;

    @media screen and (max-width: 900px) {
        margin-top: 3em;
    }
`

export const Title = styled.h3`
    font-size: 3em;
    color: #001238;

    @media screen and (max-width: 900px) {
        font-size: 2em;
    }
`

export const Description = styled.span`
    width: 80%;
    color: #001238;
    font-size: 1em;
    margin-top: 1em;
    font-weight: 300;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const Button = styled(Link)`
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
    align-self: flex-start;
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
    }
`