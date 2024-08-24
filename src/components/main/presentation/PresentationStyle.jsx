import styled from 'styled-components'

export const PresentationComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & div {

        & p{
            font-weight: bold;
        }

        & h1 {
            font-size: 5rem;
            font-weight: 800;
            color: ${({ theme }) => theme.tertiary};
        }

        & h2 {
            color: ${({ theme }) => theme.light_blue};
        }
    }

    & .dev {
        width: 400px;
    }
`
