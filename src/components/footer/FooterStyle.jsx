import styled from 'styled-components'

export const FooterComponent = styled.section`
    width: 100%;
    background-color: ${({ theme }) => theme.tertiary};

    & hr {
        border: none;
        height: 2px;
        background-color: ${({ theme }) => theme.tertiary};
    }

    & .info_portifolio {
        padding: 40px 20px;
        display: flex;
        justify-content: space-between;

        & .tec_portifolio {
            display: flex;
            flex-direction: column;
            gap: 20px;
            color: white;

            & p {
                font-weight: bold;
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

        & .copy {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-weight: bold;
            color: white;
        }
    }
`
