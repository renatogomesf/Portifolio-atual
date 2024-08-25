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
            color: ${({ theme }) => theme.tertiary};
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

            background-color: ${({ theme }) => theme.secondary};
            padding: 10px;
            border-radius: 10px;

            & img {
                margin: 20px;
                width: 100px;
                filter: drop-shadow(1.5px 1.5px 1px black);
            }

            & p {
                font-weight: bold;
            }
        }
    }
`
