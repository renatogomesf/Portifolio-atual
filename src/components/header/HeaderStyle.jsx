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
    max-width: 270px;

    color: white;

    a {
        display: flex;
        flex-direction: column;
        color: white;
        width: min-content;
        font-weight: bold;
        gap: 4px;

        & div {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;

            & li {
                white-space: nowrap;
            }
        }

        .icon {
            color: ${({ theme }) => theme.primary};
            font-size: 1.7rem;
            transition: 0.2s;
        }

        &:hover {

            .icon {
                color: ${({ theme }) => theme.cor3};
            }

            hr {
                width: 100%;
            }
        }
    }

    hr {
        background-color: ${({ theme }) => theme.cor3};
        border: none;
        width: 0px;
        height: 2px;
        transition: 0.2s;
    }

    & nav {
        padding: 30px 55px;
        background-color: ${({ theme }) => theme.cor2};
        border-radius: 20px;

        & ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            list-style: none;
        }
    }

    & .contatos {
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-weight: bold;


        & .redes_sociais {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        & .emails {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }
`
