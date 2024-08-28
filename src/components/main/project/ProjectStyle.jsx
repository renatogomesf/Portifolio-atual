import styled from 'styled-components'

export const ProjectComponent = styled.section`
    padding: 65px;
    margin: 50px 0px;

    & .titulo {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 50px;
        margin-bottom: 40px;

        & h1 {
            font-size: 4rem;
            font-weight: 800;
            color: ${({ theme }) => theme.secondary};
        }

        & .img_projeto {
            width: 300px;
        }
    }

    & .projetos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;

        & .projeto {
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            height: min-content;
            padding: 10px;
            background-color: ${({ theme }) => theme.quaternary};

            &:hover {
                height: 100%;
                transition: 0.5s;

                .info {
                    height: 100%;
                    transition: 0.5s;
                    padding: 10px 10px;
                }
            }

            & .div_img {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                & .img_projeto {
                    width: 100%;
                    border-radius: 10px;
                }
            }
            & .info {
                display: flex;
                flex-direction: column;
                gap: 10px;
                height: 0px;
                padding: 0px 10px;
                overflow: hidden;
                border-radius: 10px;
                color: white;
                background-color: ${({ theme }) => theme.tertiary};

                & .descricao {
                    margin: 10px 0px;
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                & .tec_usada {
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                & .tecnologias {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    & .img_tec {
                        width: 40px;
                        filter: drop-shadow(1px 1px 0px black);
                    }
                }
            }

            & .açoes {
                display: flex;
                flex-direction: column;
                padding: 10px;
                gap: 10px;

                & .titulo_projeto {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: ${({ theme }) => theme.tertiary};
                }

                & .btn_links {
                    display: flex;
                    gap: 20px;

                    & a {
                        color: ${({ theme }) => theme.tertiary};

                        &:hover {
                            color: ${({ theme }) => theme.light_green};
                        }

                        & div {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 5px;

                            & .icon {
                                font-size: 1.3rem;
                                color: ${({ theme }) => theme.tertiary};
                            }
                        }

                        & hr {
                            border: none;
                            background-color: ${({ theme }) => theme.tertiary};
                            height: 2px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 30px;

        & .titulo {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap-reverse;
        }
    }

    @media (max-width: 915px) {
        scroll-margin-top: 100px;

        & .titulo {
            display: flex;
            flex-direction: row;
        }
    }

    @media (max-width: 768px) {
        & .titulo {
            flex-direction: column;
            gap: 20px;

            & h1 {
                font-size: 4rem;
            }

            & .img_fala {
                width: 300px;
            }
        }
    }

    @media (max-width: 690px) {
        & .projetos {
            justify-content: center;
            grid-template-columns: repeat(1, 0.9fr);
            gap: 50px;
        }
    }

    @media (max-width: 520px) {
        & .titulo {
            & h1 {
                font-size: 3rem;
            }

            & .img_projeto {
                width: 250px;
            }
        }

        & .projetos {
            justify-content: center;
            grid-template-columns: repeat(1, 1fr);
            gap: 50px;
        }
    }

    @media (max-width: 375px) {
        padding: 20px;
        & .titulo {
            & h1 {
                font-size: 2rem;
            }

            & .img_projeto{
                width: 200px;
            }
        }
    }

    @media (max-width: 320px) {
        
    }
`
