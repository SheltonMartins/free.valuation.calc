import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: 	#1C1C1C;
        color: #000;
        font-family: 'Hedvig Letters Serif', sans-serif;
        font-weight: 100;
    }
`