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

            background-color: ${({ theme }) => theme.cor_aux_1};

            & .img_projeto {
                width: 450px;
            }

            & .info {
                & .img_tec {
                    width: 50px;
                }
            }
        }
    }
`
