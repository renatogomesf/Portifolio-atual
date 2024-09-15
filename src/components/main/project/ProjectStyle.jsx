import styled from 'styled-components'

export const ProjectComponent = styled.section`
    /* margin: 50px 0px; */
    scroll-margin-top: 70px;

    position: relative;
    background-image: url('https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    /* overflow: hidden; */

    padding: 0px 0px 100px 0px;

    & .curva2 {
        fill: #fafafa;
        /* padding-bottom: 100px; */
    }

    & .titulo {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 50px;
        margin-bottom: 40px;

        & h1 {
            font-size: 4rem;
            font-weight: 800;
            /* color: ${({ theme }) => theme.secondary}; */
            color: white;
        }

        & .img_projeto {
            width: 300px;
        }
    }

    & .projetos {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        padding: 0px 60px;

        & .projeto {
            display: grid;
            /* grid-template-columns: repeat(2, 1fr); */
            /* gap: 50px; */
            /* flex-direction: row; */
            border-radius: 10px;
            /* height: min-content; */
            padding: 10px;
            /* background-color: ${({ theme }) => theme.quaternary}; */

            &:hover {
                & .div_img {
                    & .img_projeto {
                        filter: grayscale(1);
                    }
    
                    & .info {
                        padding: 20px;
                        top: 0%;
                        opacity: 1;
                    }
                }

            }

            & .div_img {
                position: relative;
                display: flex;
                /* align-items: center; */
                justify-content: center;
                flex-direction: column;

                & .img_projeto {
                    width: 100%;
                    height: 100%;
                    max-width: 600px;
                    /* border-radius: 10px; */
                    transition: 0.2s;
                }

                & .info {
                    position: absolute;
                    top: 100%;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    /* height: 0px; */
                    padding: 20px;
                    opacity: 0;
                    overflow: hidden;
                    /* border-radius: 10px; */
                    color: white;
                    background-color: #000000d5;
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
                            filter: drop-shadow(1px 1px 0px black);
                        }
                    }

                    & .açoes {
                        display: flex;
                        flex-direction: column;
                        /* padding: 10px; */
                        gap: 10px;

                        & .titulo_projeto {
                            font-size: 1.2rem;
                            font-weight: 800;
                            /* color: ${({ theme }) => theme.tertiary}; */
                        }

                        & .btn_links {
                            display: flex;
                            gap: 20px;

                            & a {
                                /* color: ${({ theme }) => theme.tertiary}; */
                                color: white;

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
                                        /* color: ${({ theme }) =>
                                            theme.tertiary}; */
                                    }
                                }

                                & hr {
                                    border: none;
                                    /* background-color: ${({ theme }) =>
                                        theme.tertiary}; */
                                    height: 2px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 30px;

        & .titulo {
            flex-direction: column;
            flex-wrap: wrap-reverse;
        }
    }

    @media (max-width: 915px) {
        scroll-margin-top: 100px;

        & .titulo {
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
        padding: 10px;
        & .titulo {
            & h1 {
                font-size: 2rem;
            }

            & .img_projeto {
                width: 200px;
            }
        }
    }
`
