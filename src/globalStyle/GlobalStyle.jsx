import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;

        /* font-family: "Nunito", sans-serif; */
        font-family: "Source Sans 3", sans-serif;
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
        background-color: ${({ theme }) => theme.quaternary};
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #000113;
        border-radius: 5px;
    }
`
