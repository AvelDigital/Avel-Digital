import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        flex-direction: column;
        scroll-behavior: smooth;
        font-family: "Montserrat", sans-serif;
        scrollbar-color: ${props => props.theme.colors.primary} ${props => props.theme.backgrounds.secondary};
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${props => props.theme.backgrounds.secondary};
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: ${props => props.theme.colors.primary};
        }
    }

    body {
        color: ${props => props.theme.colors.secondary};
        background-color: ${props => props.theme.backgrounds.secondary};
    }

    .swiper .swiper-wrapper {
        flex-direction: row;
    }
`