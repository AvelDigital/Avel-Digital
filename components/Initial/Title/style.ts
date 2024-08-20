import styled from 'styled-components'

export const Container = styled.h1`
    font-size: 4.5em;
    align-self: flex-start;

    @media screen and (max-width: 900px) {
        font-size: 1.8em;
    }
`

export const Dynamic = styled.div`
    min-height: 1.5em;

    @media screen and (max-width: 900px) {
        min-height: 1.8em;
    }
`

export const Cursor = styled.span`
    color: #1300a7;
`