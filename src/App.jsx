import React from 'react'
import Header from './components/header/Header'
import styled from 'styled-components'
import Presentation from './components/main/presentation/Presentation'
import About from './components/main/about/About'
import Ability from './components/main/ability/Ability'
import Project from './components/main/project/Project'
import Footer from './components/footer/Footer'

const AppComponent = styled.div`
    /* width: 100%; */
    & .wraper {
        display: flex;
        /* width: 100%; */

        & .main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    }

    @media (max-width: 915px) {
        & .wraper {
            display: flex;
            flex-direction: column;
            /* width: 100vw; */
        }
    }
`

const App = () => {
    return (
        <AppComponent>
            <div className="wraper">
                <Header />
                <div className="main">
                    <Presentation />
                    <About />
                    <Ability />
                    <Project />
                    <Footer />
                </div>
            </div>
        </AppComponent>
    )
}

export default App
