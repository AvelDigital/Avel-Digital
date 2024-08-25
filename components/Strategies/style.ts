import styled from 'styled-components'
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
        order: 1;
        margin-top: 2em;
        margin-right: 0;
    }
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

export const Right = styled.div`
    flex: 0.5;
    display: flex;
    margin-top: 1em;
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
    margin-bottom: 2em;
    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`