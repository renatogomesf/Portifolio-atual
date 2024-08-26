import styled from 'styled-components'

export const AboutComponent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 65px;
    margin: 50px 0px;

    & .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-bottom: 40px;

        & h1 {
            font-size: 4rem;
            font-weight: 800;
            color: ${({ theme }) => theme.tertiary};
        }

        & .img_fala {
            width: 300px;
        }
    }
`
