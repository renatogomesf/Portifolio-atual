import styled from 'styled-components'

export const AbilityComponent = styled.section`
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

        & .img_habilidade {
            width: 300px;
        }
    }

    & .tecnologias {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 70px;

        & .tecnologia {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: ${({ theme }) => theme.quaternary};
            padding: 10px;
            border-radius: 10px;

            & img {
                margin: 20px;
                width: 100px;
                filter: drop-shadow(1px 1px 0px black);
            }

            & p {
                font-weight: bold;
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 30px;

        & .titulo {
            display: flex;
            flex-wrap: wrap-reverse;
        }

        & .tecnologias {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 915px) {
        scroll-margin-top: 100px;
    }

    @media (max-width: 768px) {
        & .titulo {
            flex-direction: column-reverse;
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
        & .tecnologias {
            grid-template-columns: repeat(2, 0.8fr);
            gap: 40px;
        }
    }

    @media (max-width: 520px) {
        & .titulo {
            & h1 {
                font-size: 3rem;
            }

            & .img_habilidade {
                width: 250px;
            }
        }
    }

    @media (max-width: 425px) {
        & .tecnologias {
            grid-template-columns: repeat(1, 1fr);
            gap: 40px;
        }
    }

    @media (max-width: 375px) {
        padding: 10px;
        & .titulo {
            & h1 {
                font-size: 2rem;
            }

            & .img_habilidade {
                width: 200px;
            }
        }
    }
`
