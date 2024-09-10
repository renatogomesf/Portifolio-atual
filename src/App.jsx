import React from 'react'
import Header from './components/header/Header'
import styled from 'styled-components'
import Presentation from './components/main/presentation/Presentation'
import About from './components/main/about/About'
import Ability from './components/main/ability/Ability'
import Project from './components/main/project/Project'
import Footer from './components/footer/Footer'

const AppComponent = styled.div`
    & .wraper {
        display: flex;

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
        }
    }
`

const App = () => {
    const links = document.querySelectorAll('.links')
    const sections = document.querySelectorAll('.section')

    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            let top = window.scrollY
            let offset = section.offsetTop - 100
            let heightSection = section.offsetHeight
            let idSection = section.getAttribute('id')

            if (top >= offset && top < offset + heightSection) {
                links.forEach((link) => {
                    link.classList.remove('active')

                    document
                        .querySelector(`header nav a[href*='${idSection}']`)
                        .classList.add('active')
                })
            }
        })
    })

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
