import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        flex-direction: column;
        scroll-behavior: smooth;
        scrollbar-color: #0d026e #000000;
        font-family: "Montserrat", sans-serif;
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #000000;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: #0d026e;
        }
    }

    body {
        color: #FFFFFF;
        background-color: #000000;
    }

    .swiper .swiper-wrapper {
        flex-direction: row;
    }
`