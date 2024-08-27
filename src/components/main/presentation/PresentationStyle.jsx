import styled from 'styled-components'

export const PresentationComponent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 65px;
    margin: 50px 0px;
    flex-wrap: wrap;

    & div {
        & p {
            font-weight: bold;
            color: ${({ theme }) => theme.secondary};
        }

        & h1 {
            font-size: 5rem;
            font-weight: 800;
            color: ${({ theme }) => theme.secondary};
            white-space: nowrap;
        }

        & h2 {
            color: ${({ theme }) => theme.light_green};
            text-shadow: 1px 1px 0px black;
        }
    }

    & .img_dev {
        width: 100%;
        max-width: 400px;
    }
`
