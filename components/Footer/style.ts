import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Container = styled.footer`
    padding: 3em;
    display: flex;
`

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-size: 2em;
`

export const Social = styled.div`
    gap: 3em;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        margin-top: 2em;
    }
`

export const ContainerIconSocial = styled.a`
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    align-self: flex-end;
`

export const IconSocial = styled.svg`
    fill: ${props => props.theme.colors.secondary};
`

export const Logo = styled(Image)`
    width: 5em;
    height: auto;
    align-self: center;

    @media screen and (max-width: 900px) {
        order: -1;
    }
`

export const Sections = styled.div`
    gap: 5em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        gap: 1em;
        flex-direction: column;
    }
`

export const SectionsRow = styled.div`
    display: flex;
`

export const Section = styled.div`
    gap: 0.5em;
    display: flex;
    margin-top: 3em;
    align-items: flex-start;
`

export const SectionTitle = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
`

export const SectionLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};

    &:hover {
        text-decoration: underline ${props => props.theme.colors.secondary};
    }
`

export const SectionsRowEnd = styled.div`
    display: flex;
    margin-top: 3em;
    margin-left: auto;
    align-items: flex-end;

    @media screen and (max-width: 900px) {
        margin-left: 0%;
        margin-right: auto;
        align-items: flex-start;
    }
`

export const SectionEndLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};

    &:hover {
        text-decoration: underline ${props => props.theme.colors.secondary};
    }
`

export const SectionEndButton = styled(Link)`
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
    color: ${props => props.theme.colors.secondary};
    border: 3px solid ${props => props.theme.colors.secondary};

    &:hover {
        color: ${props => props.theme.colors.primary};
        border: 3px solid ${props => props.theme.colors.secondary};
        background-color: ${props => props.theme.colors.secondary};
    }

    @media screen and (max-width: 900px) {
       font-size: 0.8em;
    }
`

export const Privacy = styled(Link)`
    margin-top: 4em;
    font-size: 0.8em;
    margin-right: auto;
    text-align: center;
    color: ${props => props.theme.colors.secondary};
`

export const Copyright = styled.span`
    margin-top: 1em;
    font-size: 0.8em;
    margin-right: auto;
`