import styled from 'styled-components'

export const AboutComponent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 65px;
    margin: 50px 0px;
    scroll-margin-top: 100px;


    & .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-bottom: 40px;

        & h1 {
            font-size: 4rem;
            font-weight: 800;
            /* color: ${({ theme }) => theme.secondary}; */
            color: white;
        }

        & .img_fala {
            width: 300px;
        }
    }

    & .textos {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.quaternary};

        & p {
            text-indent: 15px;

            & strong {
                font-weight: 800;
                color: ${({ theme }) => theme.light_green};
            }

            & span {
                & a {
                    font-weight: bold;
                    color: ${({ theme }) => theme.light_green};
                    margin-right: 7px;

                    & .icon {
                        font-size: 0.8rem;
                    }
                }
            }
        }

        & .link_pdf {
            display: flex;
            gap: 20px;
            margin-top: 30px;
            font-size: 1.2rem;

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
                        font-size: 1.5rem;
                        color: ${({ theme }) => theme.tertiary};
                    }
                }

                & hr {
                    border: none;
                    height: 2px;
                    background-color: ${({ theme }) => theme.tertiary};
                }
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 30px;

        & .titulo {
            flex-wrap: wrap;
        }
    }

    @media (max-width: 915px) {
        scroll-margin-top: 100px;
    }

    @media (max-width: 768px) {
        padding: 30px;

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

    @media (max-width: 520px) {
        & .titulo {
            & h1 {
                font-size: 3rem;
            }

            & .img_fala {
                width: 250px;
            }
        }

        & .textos {
            & .link_pdf {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 375px) {
        padding: 20px;
        & .titulo {
            & h1 {
                font-size: 2rem;
            }

            & .img_fala {
                width: 200px;
            }
        }

        & .textos {
            & .link_pdf {
                flex-direction: column;
                align-items: center;
                font-size: 1rem;
            }
        }
    }
`
