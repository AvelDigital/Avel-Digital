import styled from 'styled-components'

interface IOverlay {
    $showForm: boolean
}

export const Overlay = styled.div<IOverlay>`
    z-index: 2;
    width: 100%;
    height: 100vh;
    position: fixed;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    display: ${props => props.$showForm ? 'flex' : 'none'};
`

export const Container = styled.form`
    width: 95%;
    z-index: 4;
    display: flex;
    margin-top: 2em;
    max-width: 30em;
    align-items: center;
    background-color: #ebe5de;
`

export const Header = styled.div`
    padding: 1em;
    background-color: #265c54;
    color: ${props => props.theme.colors.secondary};
`

export const Input = styled.input`
    width: 95%;
    font-size: 1em;
    padding: 0.4em;
    margin-top: 0.5em;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.colors.primary};

    &:focus {
        outline: none;
    }
`

export const Button = styled.button`
    width: 50%;
    margin: auto;
    display: flex;
    margin: 2em 0;
    font-size: 1em;
    padding: 1.5em;
    color: #265c54;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    border: 3px solid #265c54;
    transition-duration: 0.2s;
    background-color: transparent;
    transition-timing-function: linear;

    &:hover {
        border: 3px solid #265c54;
        background-color: #265c54;
        color: ${props => props.theme.colors.secondary};
    }

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`