import styled from 'styled-components'

export const HeaderComponent = styled.header`
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: ${({ theme }) => theme.secondary};
    width: 100%;
    height: 100vh;
    max-width: 270px;

    color: white;

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
            }

            & img {
                height: 50px;
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
        flex-direction: column;
        justify-content: space-around;
        height: 80%;

        & nav {
            padding: 30px 45px;
            background-color: ${({ theme }) => theme.tertiary};
            border-radius: 10px;

            & ul {
                display: flex;
                flex-direction: column;
                gap: 20px;
                list-style: none;
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
    }

    @media (max-width: 915px) {
        flex-direction: row;
        height: 100px;
        max-width: 100%;
        z-index: 100;

        & .header {
            & .logo {
                & img {
                    height: 40px;
                }
            }
        }

        & .navegaçao {
            & nav {
                padding: 15px;
                background-color: ${({ theme }) => theme.secondary};

                & ul {
                    flex-direction: row;
                }
            }

            & .contatos {
                display: none;
            }
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
            background-color: ${({ theme }) => theme.secondary};

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
                    top: 18px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: white;
                    transform-origin: left;

                    animation: AbrirMenuBefore 0.3s forwards;

                    @keyframes AbrirMenuBefore {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(-33deg);
                        }
                    }
                }

                &::after {
                    position: absolute;
                    top: 4px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: white;
                    transform-origin: left;

                    animation: AbrirMenuAfter 0.3s forwards;

                    @keyframes AbrirMenuAfter {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(33deg);
                        }
                    }
                }

                & .menuOpen {
                    display: block;
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: white;

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
                    top: 20px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: white;
                    transform-origin: left;

                    animation: FecharMenuBefore 0.3s forwards;

                    @keyframes FecharMenuBefore {
                        from {
                            transform: rotate(-37deg);
                        }
                        to {
                            transform: rotate(0deg);
                        }
                    }
                }

                &::after {
                    position: absolute;
                    top: 4px;
                    content: '';
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: white;
                    transform-origin: left;

                    animation: FecharMenuAfter 0.3s forwards;

                    @keyframes FecharMenuAfter {
                        from {
                            transform: rotate(37deg);
                        }
                        to {
                            transform: rotate(0deg);
                        }
                    }
                }

                & .menuClose {
                    display: block;
                    width: 26px;
                    height: 2px;
                    border-radius: 1px;
                    background-color: white;

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
            top: 100px;
            right: 0px;
            display: flex;
            flex-direction: column;
            background-color: ${({ theme }) => theme.secondary};
            height: min-content;
            padding: 20px;
            gap: 20px;
            border-radius: 0px 0px 0px 10px;

            transition: 0.5s;
            z-index: -1;

            & nav {
                display: flex;
                padding: 30px 45px;
                background-color: ${({ theme }) => theme.tertiary};
                border-radius: 10px;

                & ul {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    list-style: none;
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
        }

        & .navegaçao {
            position: absolute;
            top: -430px;
            right: 0px;
            display: flex;
            background-color: ${({ theme }) => theme.secondary};
            height: min-content;
            padding: 20px;
            gap: 20px;
            border-radius: 0px 0px 0px 10px;

            transition: 0.5s;
            z-index: -1;

            & nav {
                display: flex;
                padding: 30px 45px;
                background-color: ${({ theme }) => theme.tertiary};
                border-radius: 10px;

                & ul {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    list-style: none;
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
        }
    }
`
