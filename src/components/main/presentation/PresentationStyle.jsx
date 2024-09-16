import styled from 'styled-components'

export const PresentationComponent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 70px;
    flex-wrap: wrap;
    width: 100%;
    height: 88vh;
    margin-top: 75px;
    scroll-margin-top: 70px;

    & div {
        opacity: 0;

        & p {
            font-weight: bold;
            color: ${({ theme }) => theme.secondary};
        }

        & h1 {
            font-size: 5rem;
            font-weight: 800;
            color: white;
        }

        & h2 {
            position: relative;
            display: inline-block;
            color: ${({ theme }) => theme.light_green};
            font-family: monospace;
            font-size: 1.8rem;

            @keyframes digitar {
                0% {
                    width: 101%;
                }
                70% {
                    width: 0%;
                }
                100% {
                    width: 0%;
                }
            }

            @keyframes piscar {
                from {
                    border-left-style: solid;
                }
                to {
                    border-left-style: none;
                }
            }
        }
    }

    & .img_dev {
        width: 100%;
        max-width: 400px;

        animation: mover 5s infinite linear alternate;

        @keyframes mover {
            from {
                transform: translateY(20px);
            }
            to {
                transform: translateY(-20px);
            }
        }
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

    @media (max-width: 915px) and (min-width: 690px) {
    }

    @media (max-width: 690px) {
        padding: 30px;
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
        }

        & .img_dev {
            max-width: 300px;
        }
    }

    @media (max-width: 320px) {
        & div {
            & h1 {
                font-size: 2.3rem;
            }
        }

        & .img_dev {
            max-width: 250px;
        }
    }
`
