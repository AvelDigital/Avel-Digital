import styled from 'styled-components'

export const Main = styled.main`
    padding: 1em;
    display: flex;
    margin-left: 1em;
    padding-top: 5em;
`

export const Title = styled.h1`
    margin-top: 1em;
    font-size: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.secondary};
`

export const Subtitle = styled.h3`
    margin-top: 1em;
    font-weight: 500;
    margin-bottom: 20em;
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fonts.subtitle};
`