import React from 'react'
import Header from './components/header/Header'
import styled from 'styled-components'
import Presentation from './components/main/presentation/Presentation'

const AppComponent = styled.div`
    & .wraper {
        display: flex;

        & .main{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }
`

const App = () => {
    return (
        <AppComponent>
            <div className='wraper'>
                <Header />
                <div className='main'>
                    <Presentation />
                </div>
            </div>
        </AppComponent>
    )
}

export default App
