import styled from 'styled-components'
import ImageRaw from 'next/image'

export const Main = styled.main`
    padding: 1em;
    display: flex;
    padding: 5% 15%;
    background-color: ${props => props.theme.backgrounds.primary};

    @media screen and (max-width: 900px) {
        padding: 20% 10%;
    }
`

export const Title = styled.h1`
    margin-top: 1em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.title};

    @media screen and (max-width: 900px) {
        font-size: ${props => props.theme.fonts.subtitle};
    }
`

export const About = styled.span`
    margin: 1em 0;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.description};
`

export const Image = styled(ImageRaw)`
    width: 100%;
    height: auto;
`

export const Subtitle = styled.h2`
    margin: 0.5em 0;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.title};

    @media screen and (max-width: 900px) {
        font-size: ${props => props.theme.fonts.subtitle};
    }
`

export const Paragraph = styled.p`
    margin: 0.5em 0;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.subtitle};

    @media screen and (max-width: 900px) {
        font-size: ${props => props.theme.fonts.description};
    }
`

export const List = styled.ul`
    margin-top: 1em;
    margin-left: 1em;
`

export const ListItem = styled.li`
    margin: 0.5em 0;
    margin-left: 1em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.subtitle};

    @media screen and (max-width: 900px) {
        font-size: ${props => props.theme.fonts.description};
    }
`

export const Bold = styled.span`
    margin: 1em 0;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
`