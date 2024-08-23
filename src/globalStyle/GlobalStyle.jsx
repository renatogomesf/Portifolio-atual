import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;

        text-decoration: none;
    }

    body{
        height: 100vh;
        background-color: ${({ theme }) => theme.primary};
    }

    /* ::-webkit-scrollbar{
        background-color: ${({ theme }) => theme.light_gray_2};
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.primary};
        border-radius: 5px;
    } */
`
