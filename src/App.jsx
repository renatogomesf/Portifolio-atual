import React, { useEffect } from 'react'
import Header from './components/header/Header'
import styled from 'styled-components'
import Presentation from './components/main/presentation/Presentation'
import About from './components/main/about/About'
import Ability from './components/main/ability/Ability'
import Project from './components/main/project/Project'
import Footer from './components/footer/Footer'
import Contact from './components/main/contact/Contact'

const AppComponent = styled.div`
    & .wraper {
        display: flex;

        & .main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            & .quemsou {
                position: relative;
                background-image: url('https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
                padding: 0px 0px 100px 0px;

                & .curva {
                    position: absolute;
                    bottom: -1px;
                    left: 0px;
                    right: 0px;
                    transform: rotateX(180deg);
                    fill: #fafafa;
                }
            }
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
    useEffect(() => {
        const links = document.querySelectorAll('.links')
        const sections = document.querySelectorAll('.section')

        window.addEventListener('scroll', () => {
            sections.forEach((section) => {
                let top = window.scrollY
                let offset = section.offsetTop - 180
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
    }, [])

    return (
        <AppComponent>
            <div className="wraper">
                <Contact />
                <div className="main">
                    <div className="quemsou">
                        <Header />
                        <Presentation />
                        <About />
                        <svg
                            className="curva"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 100"
                            fill="#000"
                        >
                            <path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path>
                        </svg>
                    </div>
                    <Ability />
                    <Project />
                    <Footer />
                </div>
            </div>
        </AppComponent>
    )
}

export default App
