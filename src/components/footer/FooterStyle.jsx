import styled from 'styled-components'

export const FooterComponent = styled.section`
    width: 100%;
    /* background-color: ${({ theme }) => theme.secondary}; */
    background-color: #1f1f1f;

    & .info_portifolio {
        padding: 40px 60px;
        /* display: flex; */
        /* flex-direction: row; */
        /* justify-content: space-between; */

        & .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            & .logo {
                display: flex;
                align-items: center;
                justify-content: center;

                & h1 {
                    opacity: 1;
                    width: 0px;
                    margin-left: 5px;
                    font-weight: 800;
                    font-size: 3rem;

                    color: ${({ theme }) => theme.light_green};

                    & .R {
                        /* color: #000113; */
                    }
                }

                & img {
                    height: 80px;
                    /* filter: drop-shadow(2px 2px 0px black); */
                }
            }

            & .tec_portifolio {
                display: flex;
                flex-direction: column;
                gap: 20px;
                color: white;

                & p {
                    /* font-weight: bold; */
                }

                & div {
                    display: flex;
                    gap: 10px;

                    & img {
                        width: 40px;
                        filter: drop-shadow(1px 1px 0px black);
                    }
                }
            }
        }

        & hr {
            border: none;
            height: 1px;
            margin-top: 50px;
            /* background-color: ${({ theme }) => theme.secondary}; */
            background-color: #fff;
        }
    }

    & .copy {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        gap: 10px;
        /* font-weight: bold; */
        color: white;
        margin-bottom: 50px;
    }

    @media (max-width: 690px) {
        & .info_portifolio {
            & .info {
                /* display: flex; */
                align-items: start;
                /* justify-content: start; */
                flex-direction: column;
                gap: 30px;

                & .logo {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    & h1 {
                        font-size: 2rem;
                    }

                    & img {
                        height: 50px;
                    }
                }
            }
        }

        & .copy {
            gap: 10px;
        }
    }
`
