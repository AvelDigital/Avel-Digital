import styled from 'styled-components'
import Link from 'next/link'
import ImageRaw from 'next/image'

export const Main = styled.main`
    padding-top: 10em;
    background-color: ${props => props.theme.backgrounds.primary};

    @media screen and (max-width: 900px) {
        padding-top: 8em;
    }
`

export const Subtitle = styled.span`
    margin-left: 4.8em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.description};

    @media screen and (max-width: 900px) {
        margin-left: 1.8em;
    }
`

export const Title = styled.h1`
    font-size: 4.5em;
    margin-left: 1em;
    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        margin-left: 1em;
        font-size: 1.8em;
    }
`

export const Blogs = styled.div`
    gap: 3em;
    display: flex;
    padding: 5em 0;
    margin-left: 4.5em;

    @media screen and (max-width: 900px) {
        margin: 0 1em;
        padding: 2em 0;
    }
`

export const Blog = styled(Link)`
    gap: 1em;
    width: 90%;
    display: flex;
    max-width: 40em;
    align-items: center;
    flex-direction: row;
    text-decoration: none;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const BlogImage = styled(ImageRaw)`
    width: 15em;
    height: auto;

    @media screen and (max-width: 900px) {
        width: 10em;
    }
`

export const BlogTexts = styled.div`
    display: flex;
    align-self: flex-start;
`

export const BlogTitle = styled.h3`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.subtitle};

    @media screen and (max-width: 900px) {
        font-size: ${props => props.theme.fonts.description};
    }
`

export const BlogAbout = styled.span`
    font-weight: 500;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.description};

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const BlogDescription = styled.span`
    display: flex;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.description};
`