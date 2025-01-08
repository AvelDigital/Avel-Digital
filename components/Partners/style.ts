import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.backgrounds.secondary};

    img {
        filter: drop-shadow(0px 0px #FFF);
    }
`