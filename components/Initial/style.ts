import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    padding-bottom: 4em;
`

export const Content = styled.div`
    padding: 5em;
    display: flex;
    margin-top: 5em;
    max-width: 70em;
    align-items: center;

    @media screen and (max-width: 900px) {
        padding: 1.8em;
    }
`

export const Subtitle = styled.h2`
    width: 50%;
    font-size: 1em;
    margin-top: 1em;
    font-weight: 500;
    margin-bottom: 2em;
    align-self: flex-start;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

export const Video = styled.video`
    width: 100%;
    z-index: -1;
    height: 100%;
    object-fit: cover;
    position: absolute;
    object-position: center;
    filter: brightness(0.6);
`