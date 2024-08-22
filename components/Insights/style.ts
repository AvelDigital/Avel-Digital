import styled from 'styled-components'
import Link from 'next/link'
import ImageRaw from 'next/image'

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

export const Blogs = styled.div`
    gap: 3em;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    flex-direction: row;
`

export const Blog = styled(Link)`
    width: 20em;
    text-decoration: none;
`

export const BlogImage = styled(ImageRaw)`
    width: 100%;
    height: auto;
`

export const BlogTitle = styled.h3`
    margin-top: 0.5em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.subtitle};
`

export const BlogDescription = styled.span`
    display: flex;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fonts.description};
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