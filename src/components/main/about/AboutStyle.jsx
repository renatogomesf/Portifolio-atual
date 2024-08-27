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

    & .textos {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.cor_aux_0};
        
        & p {
            text-indent: 15px;
        }

        & .link_pdf {
            display: flex;
            gap: 20px;
            margin-top: 30px;
            font-size: 1.2rem;
    
            & a {
                color: ${({ theme }) => theme.tertiary};
    
                &:hover {
                    color: ${({ theme }) => theme.light_blue};
                }
    
                & div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
    
                    & .icon {
                        font-size: 1.5rem;
                        color: ${({ theme }) => theme.tertiary};
                    }
                }
    
                & hr {
                    border: none;
                    height: 2px;
                    background-color: ${({ theme }) => theme.tertiary};
                }
            }
        }
    }

`
