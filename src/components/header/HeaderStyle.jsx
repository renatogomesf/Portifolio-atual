import styled from 'styled-components'
// import imagem from  '../../image/common-bg.svg'

export const HeaderComponent = styled.header`
    position: fixed;
    top: 0px;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;

    background-color: ${({ theme }) => theme.quaternary};
    width: 100%;
    height: 70px;
    /* height: 100vh; */
    /* max-width: 270px; */
    z-index: 1111111111;
    transition: 0.3s;

    .active {
        transform: translate(-5px, -5px);
        transition: 0.3s;
        box-shadow: 5px 5px 0px black;
        background-color: ${({ theme }) => theme.light_green};
        background-color: #00c1cf;
        color: white;
    }

    a {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.light_green};
        /* color: #00c1cf; */
        /* width: min-content; */
        font-weight: bold;
        gap: 4px;
        padding: 10px 20px;
        border-radius: 10px 0px 10px 0px;
        transition: 0.3s;

        border: 2px solid black;

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
            color: ${({ theme }) => theme.quaternary};
            font-size: 1.7rem;
            transition: 0.2s;
        }

        .btn_redes {
            background-color: ${({ theme }) => theme.tertiary};
            transition: 0.2s;
            border: 2px solid ${({ theme }) => theme.tertiary};
        }

        &:hover {
            transform: translate(-5px, -5px);
            transition: 0.3s;
            box-shadow: 5px 5px 0px black;

            .icon {
                color: ${({ theme }) => theme.light_green};
            }

            hr {
                width: 100%;
            }

            .btn_redes {
                background-color: ${({ theme }) => theme.secondary};
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

    & .header {
        & .logo {
            display: flex;
            align-items: center;
            justify-content: center;

            & h1 {
                opacity: 0;
                width: 0px;
                margin-left: 5px;
                font-weight: 800;

                animation: logo 2s forwards;
                animation-delay: 2s;

                color: ${({ theme }) => theme.light_green};

                & .R {
                    /* color: #000113; */
                }
            }

            & img {
                height: 50px;
                /* filter: drop-shadow(2px 2px 0px black); */
            }

            @keyframes logo {
                0% {
                    opacity: 0;
                    width: 0px;
                }
                25% {
                    opacity: 0;
                }
                50% {
                    opacity: 0;
                }
                75% {
                    opacity: 0;
                    width: 75%;
                }
                100% {
                    opacity: 1;
                    width: 100%;
                }
            }
        }

        & #menuMobile {
            display: none;
        }
    }

    & .navegaçao {
        display: flex;
        /* flex-direction: column; */
        justify-content: space-around;
        align-items: center;
        height: 80%;

        & nav {
            /* padding: 30px; */
            /* background-color: ${({ theme }) => theme.tertiary}; */
            border-radius: 10px;

            & ul {
                display: flex;
                /* flex-direction: column; */
                gap: 20px;
                list-style: none;
            }
        }

        & .contatos {
            display: none;
            flex-direction: column;
            gap: 15px;
            font-weight: bold;

            /* & .redes_sociais {
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
            } */
        }
    }

    @media (max-width: 915px) {
        /* flex-direction: row;
        height: 100px;
        max-width: 100%;
        z-index: 100; */

        & .header {
            & .logo {
                & img {
                    height: 40px;
                }

                & h1 {
                    font-size: 2rem;
                }
            }
        }

        & .navegaçao {
            & nav {
                /* padding: 15px; */
                /* background-color: ${({ theme }) => theme.secondary}; */

                /* & ul {
                    flex-direction: row;
                } */
            }

            /* & .contatos {
                display: none;
            } */
        }
    }

    @media (max-width: 690px) {
        background-color: transparent;

        & .header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: ${({ theme }) => theme.primary};

            & #menuMobile {
                display: flex;
            }

            & .menuMobileOpen {
                position: relative;
                display: flex;
                align-items: center;
                width: 26px;
                height: 27px;

                &::before {
                    position: absolute;
                    top: 4px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: center;

                    animation: AbrirMenuBefore 0.3s forwards;

                    @keyframes AbrirMenuBefore {
                        from {
                            transform: rotate(0deg);
                            top: 4px;
                        }
                        to {
                            transform: rotate(-45deg);
                            top: 50%;
                        }
                    }
                }

                &::after {
                    position: absolute;
                    top: 20px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: center;

                    animation: AbrirMenuAfter 0.3s forwards;

                    @keyframes AbrirMenuAfter {
                        from {
                            transform: rotate(0deg);
                            top: 20px;
                        }
                        to {
                            transform: rotate(45deg);
                            top: 50%;
                        }
                    }
                }

                & .menuOpen {
                    display: block;
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;

                    animation: AbrirMenu 0.3s forwards;

                    @keyframes AbrirMenu {
                        from {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                        }
                    }
                }
            }

            & .menuMobileClose {
                position: relative;
                display: flex;
                align-items: center;
                width: 26px;
                height: 27px;

                &::before {
                    position: absolute;
                    top: 4px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: center;

                    animation: FecharMenuBefore 0.3s forwards;

                    @keyframes FecharMenuBefore {
                        from {
                            transform: rotate(-45deg);
                            top: 50%;
                        }
                        to {
                            transform: rotate(0deg);
                            top: 4px;
                        }
                    }
                }

                &::after {
                    position: absolute;
                    top: 20px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;
                    transform-origin: center;

                    animation: FecharMenuAfter 0.3s forwards;

                    @keyframes FecharMenuAfter {
                        from {
                            transform: rotate(45deg);
                            top: 50%;
                        }
                        to {
                            transform: rotate(0deg);
                            top: 20px;
                        }
                    }
                }

                & .menuClose {
                    display: block;
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: black;

                    animation: FecharMenu 0.3s forwards;

                    @keyframes FecharMenu {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        & .navegaçaoOpen {
            position: absolute;
            top: 69px;
            right: 0px;
            display: flex;
            flex-direction: column;
            background-color: ${({ theme }) => theme.primary};
            height: min-content;
            padding: 20px;
            gap: 20px;
            border-radius: 0px 0px 0px 10px;

            transition: 0.5s;
            z-index: -1;

            & .icon {
                color: ${({ theme }) => theme.light_green};
            }

            & nav {
                display: flex;
                /* padding: 30px 45px; */
                /* background-color: ${({ theme }) => theme.tertiary}; */
                border-radius: 10px;
                /* width: 100%; */

                & ul {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    list-style: none;
                    width: 100%;
                }
            }

            & .contatos {
                display: flex;
                flex-direction: column;
                gap: 15px;
                font-weight: bold;

                & .redes_sociais {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;

                    /* & .btn_redes {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 30px;
                        height: 30px;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                    } */
                }

                & .emails {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
            }
        }

        & .navegaçao {
            position: absolute;
            top: -530px;
            right: 0px;
            display: flex;
            flex-direction: column;
            background-color: ${({ theme }) => theme.primary};
            height: min-content;
            padding: 20px;
            /* gap: 20px; */
            border-radius: 0px 0px 0px 10px;

            transition: 0.5s;
            z-index: -1;

            & .icon {
                color: ${({ theme }) => theme.light_green};
            }

            & nav {
                /* display: flex; */
                /* padding: 30px 45px; */
                /* background-color: ${({ theme }) => theme.tertiary}; */
                /* border-radius: 10px; */
                width: 100%;

                & ul {
                    display: flex;
                    flex-direction: column;
                    /* gap: 20px; */
                    /* list-style: none; */
                    width: 100%;
                }
            }

            & .contatos {
                display: flex;
                flex-direction: column;
                gap: 15px;
                font-weight: bold;

                & .redes_sociais {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;

                    /* & .btn_redes {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 30px;
                        height: 30px;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                    } */
                }

                & .emails {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
            }
        }
    }
`
