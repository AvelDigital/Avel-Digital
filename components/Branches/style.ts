import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding-top: 5em;
    align-items: center;
    background-color: ${props => props.theme.backgrounds.secondary};

    @media screen and (max-width: 900px) {
        padding-top: 4em;
    }
`

export const Title = styled.h3`
    width: 90%;
    font-size: 3em;
    text-align: center;

    @media screen and (max-width: 900px) {
        font-size: 2em;
    }
`

export const List = styled.div`
    gap: 4em;
    width: 95%;
    display: flex;
    margin: 5em 0;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 900px) {
        margin-top: 3em;
    }
`

export const Branch = styled.div`
    width: 18em;
    display: flex;
    align-self: flex-start;

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`

export const BranchIcon = styled.svg`
    width: 3em;
    fill: ${props => props.theme.colors.secondary};
`

export const BranchTitle = styled.h4`
    font-size: 1.3em;
    font-weight: bold;
    margin-top: 0.5em;
`

export const BranchDescription = styled.span`
    font-size: 1em;
    margin-top: 1em;
`