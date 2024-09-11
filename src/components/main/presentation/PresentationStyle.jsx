import styled from 'styled-components'

export const PresentationComponent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* padding: 60px 10px; */
    /* margin: 50px 0px; */
    flex-wrap: wrap;
    width: 100%;
    height: 88vh;
    scroll-margin-top: 100px;


    & div {
        & p {
            font-weight: bold;
            color: ${({ theme }) => theme.secondary};
        }

        & h1 {
            font-size: 5rem;
            font-weight: 800;
            /* color: ${({ theme }) => theme.secondary}; */
            color: white;
            white-space: nowrap;
        }

        & h2 {
            position: relative;
            display: inline-block;
            color: ${({ theme }) => theme.light_green};
            font-family: monospace;
            font-size: 1.8rem;

            &::before {
                display: flex;
                justify-content: end;
                align-items: end;
                position: absolute;
                top: 0px;
                right: -2px;
                bottom: 0px;
                content: '';
                /* width: 101%; */
                border-left: 3px solid ${({ theme }) => theme.secondary};
                background-color: ${({ theme }) => theme.primary};

                /* animation:
                    digitar 5s steps(24) infinite alternate,
                    piscar 0.5s infinite linear; */
            }

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
