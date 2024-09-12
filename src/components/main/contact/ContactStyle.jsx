import styled from 'styled-components'

export const ContactComponent = styled.section`
    position: fixed;
    top: 300px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    z-index: 100;
    width: 47px;
    height: 200px;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    box-shadow: 3px 3px 0px black;
    overflow: hidden;
    transition: 0.5s;

    &:hover{
        width: 260px;
    }

    & .contatos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;

        & .linkss {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 0px 10px;

            & a {
                color: black;

                & div {
                    display: flex;
                    align-items: center;
                    gap: 7px;

                    & .icon {
                        color: #000113;
                        font-size: 30px;
                    }
                }
            }
        }
    }
`
