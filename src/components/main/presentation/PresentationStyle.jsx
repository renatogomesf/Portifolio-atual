import styled from 'styled-components'

export const PresentationComponent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 65px;
    margin: 50px 0px;
    flex-wrap: wrap;

    & div {

        & p{
            font-weight: bold;
        }

        & h1 {
            font-size: 5rem;
            font-weight: 800;
            color: ${({ theme }) => theme.tertiary};
            white-space: nowrap;
        }

        & h2 {
            color: ${({ theme }) => theme.light_blue};
        }
    }

    & .img_dev {
        width: 100%;
        max-width: 400px;
    }
`
