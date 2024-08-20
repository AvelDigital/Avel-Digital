import styled from 'styled-components'

export const Container = styled.form`
    gap: 1em;
    width: 60%;
    display: flex;
    margin-top: 4em;
    flex-wrap: wrap;
    margin-bottom: 5em;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        width: 80%;
        flex-direction: column;
    }
`

interface IField {
    $full?: boolean
}

export const Field = styled.div<IField>`
    display: flex;
    width: ${props => props.$full ? '100' : '45'}%;

    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    }
`

export const Label = styled.span`
    color: #000000;
`

export const Input = styled.input`
    padding: 0.4em;
    font-size: 1.2em;
    margin-top: 0.5em;
    border-radius: 5px;
    border: 2px solid #000000;
`

export const InputSelect = styled.select`
    padding: 0.2em;
    font-size: 1.2em;
    margin-top: 0.5em;
    border-radius: 5px;
    border: 2px solid #000000;
`

export const InputTextarea = styled.textarea`
    padding: 0.2em;
    font-size: 1.2em;
    resize: vertical;
    margin-top: 0.5em;
    border-radius: 5px;
    border: 2px solid #000000;
`

export const Button = styled.button`
    width: 50%;
    margin: auto;
    display: flex;
    padding: 1.5em;
    font-size: 1em;
    color: #001238;
    margin-top: 2em;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    border: 3px solid #001238;
    transition-duration: 0.2s;
    background-color: transparent;
    transition-timing-function: linear;

    &:hover {
        color: #FFFFFF;
        border: 3px solid #001238;
        background-color: #001238;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`