import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
    display: flex;
    position: relative;
    padding-bottom: 4em;
`

export const Content = styled.div`
    padding: 5em;
    display: flex;
    margin-top: 5em;
    max-width: 70em;
    align-items: center;

    @media screen and (max-width: 900px) {
        padding: 1.8em;
    }
`

export const Subtitle = styled.h2`
    width: 50%;
    font-size: 1em;
    margin-top: 1em;
    font-weight: 500;
    align-self: flex-start;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const Button = styled(Link)`
    display: flex;
    padding: 1.5em;
    font-size: 1em;
    color: #FFFFFF;
    margin-top: 2em;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    align-self: flex-start;
    border: 3px solid #FFFFFF;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    &:hover {
        color: #001238;
        border: 3px solid #FFFFFF;
        background-color: #FFFFFF;
    }

    @media screen and (max-width: 900px) {
       font-size: 0.8em;
    }
`

export const Video = styled.video`
    width: 100%;
    z-index: -1;
    height: 100%;
    object-fit: cover;
    position: absolute;
    object-position: center;
    filter: brightness(0.6);
`