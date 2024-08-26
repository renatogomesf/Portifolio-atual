import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;

        font-family: "Nunito", sans-serif;
        text-decoration: none;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        height: 100vh;
        background-color: ${({ theme }) => theme.primary};
    }

    ::-webkit-scrollbar{
        background-color: ${({ theme }) => theme.cor_aux_0};
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.cor2};
        border-radius: 5px;
    }
`
