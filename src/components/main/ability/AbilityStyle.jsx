import styled from 'styled-components'

export const AbilityComponent = styled.section`
    padding: 65px;
    margin: 50px 0px;
    scroll-margin-top: 70px;

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
        grid-template-columns: repeat(4, 1fr);
        gap: 50px;

        & #tecnologia {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #000113;
            margin: auto;
            padding: 10px;
            border-radius: 20px;
            width: 190px;
            height: 190px;
            overflow: hidden;

            & img {
                margin: 20px;
                width: 100px;
                filter: drop-shadow(1px 1px 0px black);
                z-index: 10;
            }

            & p {
                font-weight: bold;
                z-index: 10;
            }

            &::before {
                position: absolute;
                content: '';
                width: 180px;
                height: 180px;
                background-color: ${({ theme }) => theme.quaternary};
                border-radius: 15px;
                z-index: 1;
            }

            &::after {
                position: absolute;
                content: '';
                width: 320px;
                height: 100px;
                transform: rotate(45deg);
                animation: rotate 10s infinite linear;
            }
        }

        & .html::after {
            background-color: #e34f26;
        }
        & .css::after {
            background-color: #264de4;
        }
        & .js::after {
            background-color: #f0dc4e;
        }
        & .ts::after {
            background-color: #007acc;
        }
        & .react::after {
            background-color: #61dafb;
        }
        & .next::after {
            background-color: #ffffff;
        }
        & .sc::after {
            background-color: #ce6dba;
        }
        & .node::after {
            background-color: #529f41;
        }
        & .mysql::after {
            background-color: #ffa518;
        }
        & .cypress::after {
            /* background-color: #1b1e2e; */
            background-color: #69d3a7;
        }
        & .jest::after {
            background-color: #99425b;
        }
        & .vitest::after {
            background-color: #729b1b;
        }
        & .mongo::after {
            background-color: #00684a;
        }
        & .tailwind::after {
            background-color: #35bef8;
        }
        & .insomnia::after {
            background-color: #5c00d1;
        }
        & .vite::after {
            background-image: linear-gradient(#46caff, #bd34ff);
        }
        & .git::after {
            background-color: #f05033;
        }
        & .github::after {
            /* background-color: #000000; */
            background-color: #fff;
        }
        & .vscode::after {
            background-color: #3c99d4;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 30px;

        & .tecnologias {
            grid-template-columns: repeat(3, 1fr);
        }

        & .titulo {
            flex-wrap: wrap-reverse;
        }
    }

    @media (max-width: 915px) {
        scroll-margin-top: 70px;
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

        & .tecnologias {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
        }
    }

    @media (max-width: 690px) {
        padding: 0px;
        & .tecnologias {
            grid-template-columns: repeat(2, 0.8fr);
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

        & .tecnologias {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 430px) {
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
