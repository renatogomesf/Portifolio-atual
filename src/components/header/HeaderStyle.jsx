import styled from 'styled-components'

export const HeaderComponent = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: ${({ theme }) => theme.tertiary};
    width: 100%;
    height: 100vh;
    max-width: 250px;

    color: white;

    /* & h1 {
        color: black;
    } */

    & nav {
        & ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            list-style: none;

            & a {
                width: min-content;
                color: white;
                font-weight: bold;

                & div {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    & li {
                        white-space: nowrap;
                    }
                }
            }
        }
    }

    & .contatos {
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-weight: bold;

        & .redes_sociais {
            & a {
                display: flex;
                align-items: center;
                gap: 10px;
                color: white;
                width: min-content;
            }
        }

        & .emails {
            & .gmail > .conteudo > a {
                display: flex;
                align-items: center;
                color: white;
            }

            & .hotmail > .conteudo > a {
                display: flex;
                align-items: center;
                color: white;
            }
        }
    }
`
