import styled from 'styled-components'

export const PresentationComponent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 65px;
    margin: 50px 0px;
    flex-wrap: wrap;

    & div {
        & p {
            font-weight: bold;
            color: ${({ theme }) => theme.secondary};
        }

        & h1 {
            font-size: 5rem;
            font-weight: 800;
            color: ${({ theme }) => theme.secondary};
            white-space: nowrap;
        }

        & h2 {
            color: ${({ theme }) => theme.light_green};
            text-shadow: 1px 1px 0px black;
        }
    }

    & .img_dev {
        width: 100%;
        max-width: 400px;
    }

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

            & p {
                font-size: 0.9rem;
            }

            & li {
                white-space: nowrap;
            }
        }

        .icon {
            color: ${({ theme }) => theme.tertiary};
            font-size: 1.7rem;
            transition: 0.2s;
        }

        .btn_redes {
            background-color: ${({ theme }) => theme.tertiary};
            transition: 0.2s;
            border: 2px solid ${({ theme }) => theme.tertiary};
        }

        &:hover {
            .icon {
                color: ${({ theme }) => theme.light_green};
            }

            hr {
                width: 100%;
            }

            .btn_redes {
                background-color: ${({ theme }) => theme.light_green};
                border: 2px solid ${({ theme }) => theme.light_green};
            }
        }
    }

    hr {
        background-color: ${({ theme }) => theme.light_green};
        border: none;
        width: 0px;
        height: 2px;
        transition: 0.2s;
    }

    & .contatos {
        display: none;
        flex-direction: row;
        gap: 15px;
        font-weight: bold;

        & .redes_sociais {
            display: flex;
            flex-direction: column;
            gap: 15px;

            & .btn_redes {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                border-radius: 5px;
                color: white;
                cursor: pointer;
            }
        }

        & .emails {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }

    @media (max-width: 1024px) {
        padding: 30px;
    }

    @media (max-width: 915px) and (min-width: 690px) {
        gap: 20px;
        & .contatos {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 690px) {
        & div {
            & h1 {
                font-size: 4rem;
            }
        }

        & .img_dev {
            width: 100%;
            max-width: 350px;
        }
    }

    @media (max-width: 520px) {
        & div {
            & h1 {
                font-size: 3rem;
            }

            & h2 {
                font-size: 1.1rem;
            }
        }

        & .img_dev {
            width: 100%;
            max-width: 300px;
        }
    }

    @media (max-width: 375px) {
        padding: 20px;
        & div {
            & h1 {
                font-size: 2.5rem;
            }

            & h2 {
                font-size: 1rem;
            }
        }

        & .img_dev {
            width: 100%;
            max-width: 300px;
        }
    }

    @media (max-width: 320px) {
        & div {
            & h1 {
                font-size: 2.3rem;
            }

            & h2 {
                font-size: 1rem;
            }
        }

        & .img_dev {
            width: 100%;
            max-width: 250px;
        }
    }
`
