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
            color: ${({ theme }) => theme.tertiary};
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

            background-color: ${({ theme }) => theme.cor_aux_0};
            padding: 10px;

            & .div_img_info {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    .info {
                        top: 0%;
                        background-color: ${({ theme }) => theme.cor2};
                        height: 100%;
                    }
                }

                & .img_projeto {
                    width: 100%;
                    border-radius: 10px;
                }

                & .info {
                    position: absolute;
                    top: 100%;
                    left: 0%;
                    right: 0%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    height: 0px;
                    padding: 0px 20px;
                    overflow: hidden;
                    border-radius: 10px;
                    color: white;
                    background-color: ${({ theme }) => theme.tertiary};

                    transition: 0.2s;

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
                        }
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
                            color: ${({ theme }) => theme.light_blue};
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
`
