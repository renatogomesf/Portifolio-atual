import styled from 'styled-components'

export const HeaderComponent = styled.header`
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.quaternary};
    width: 100%;
    height: 70px;
    padding: 0px 60px;
    z-index: 1111111111;
    transition: 0.3s;

    .active {
        transform: translate(-5px, -5px);
        transition: 0.3s;
        box-shadow: 5px 5px 0px black;
        background-color: ${({ theme }) => theme.light_green};
        color: white;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.light_green};
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

            .btn_redes {
                background-color: ${({ theme }) => theme.secondary};
                border: 2px solid ${({ theme }) => theme.light_green};
            }
        }
    }

    & .header {
        opacity: 0;

        & .logo {
            display: flex;
            align-items: center;
            justify-content: center;

            & h1 {
                margin-left: 5px;
                font-weight: 800;
                color: ${({ theme }) => theme.light_green};
            }

            & img {
                height: 50px;
            }
        }

        & #menuMobile {
            display: none;
        }
    }

    & .navegaçao {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80%;

        & nav {
            border-radius: 10px;

            & ul {
                display: flex;
                gap: 20px;
                list-style: none;

                & .links {
                    opacity: 0;
                }
            }
        }

        & .contatos {
            display: none;
            flex-direction: column;
            gap: 15px;
            font-weight: bold;
        }
    }

    @media (max-width: 915px) {
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
    }

    @media (max-width: 690px) {
        padding: 0px;

        & .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
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
                border-radius: 10px;

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
            border-radius: 0px 0px 0px 10px;

            transition: 0.5s;
            z-index: -1;

            & .icon {
                color: ${({ theme }) => theme.light_green};
            }

            & nav {
                width: 100%;

                & ul {
                    display: flex;
                    flex-direction: column;
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
