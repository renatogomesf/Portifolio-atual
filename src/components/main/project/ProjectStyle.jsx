import styled from 'styled-components'

export const ProjectComponent = styled.section`
    padding: 65px;

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
`
