import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    padding-top: 8em;
    background-color: #EFEFEF;
`

export const Texts = styled.div`
    width: 85%;
    display: flex;
    margin-left: 4em;

    @media screen and (max-width: 900px) {
       margin-left: 0;
       align-self: center;
    }
`

export const Title = styled.h1`
    font-size: 5em;
    color: ${props => props.theme.colors.primary};

    @media screen and (max-width: 900px) {
        font-size: 3em;
    }
`

export const Subtitle = styled.h3`
    font-size: 1em;
    margin-top: 1em;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
`