import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding-top: 2em;
    align-items: center;
    background-color: ${props => props.theme.backgrounds.secondary};
`

export const Title = styled.h3`
    width: 90%;
    font-weight: 600;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 2em;
`