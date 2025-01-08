import styled from 'styled-components'

const Line = styled.div`
    width: 100%;
    display: flex;
    height: 0.5em;
    background-image: linear-gradient(100deg, rgba(229, 9, 20, 0), ${props => props.theme.colors.primary}, rgba(229, 9, 20, 0));
`

export default Line