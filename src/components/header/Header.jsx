import React, { useEffect } from 'react'
import { HeaderComponent } from './HeaderStyle'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import LOGO from '../../../public/logo.png'

import { gsap } from 'gsap'

const Header = () => {
    const Menu = () => {
        const windowWidth = window.innerWidth

        if (windowWidth <= 690) {
            const menuMobile = document.querySelector('#menuMobile')
            const menu = document.querySelector('#menu')

            menuMobile.classList.toggle('menuMobileOpen')
            menu.classList.toggle('menuOpen')

            menuMobile.classList.toggle('menuMobileClose')
            menu.classList.toggle('menuClose')

            const navegaçao = document.querySelector('#navegaçaoMobile')

            navegaçao.classList.toggle('navegaçaoOpen')
            navegaçao.classList.toggle('navegaçao')
        }
    }

    window.addEventListener('scroll', () => {
        let top = window.scrollY
        const topo = document.querySelector('.topo')

        if (top > 0) {
            topo.style.boxShadow = '0px 0px 50px rgba(0, 0, 0, 0.2)'
        } else {
            topo.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.2)'
        }
    })

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { delay: 0.4 } })

        gsap.fromTo(
            '.header',
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.5 }
        )

        gsap.fromTo(
            '#menuMobile',
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.5 }
        )

        tl.fromTo('.link01', { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(
                '.link02',
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1 },
                '-=0.8'
            )
            .fromTo(
                '.link03',
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1 },
                '-=0.8'
            )
            .fromTo(
                '.link04',
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1 },
                '-=0.8'
            )
    }, [])

    return (
        <HeaderComponent className="topo">
            <div className="header">
                <div id="logo" className="logo">
                    <img src={LOGO} alt="" />
                    <h1>
                        <span className="R">R</span>
                        <span className="DEV">DEV</span>
                    </h1>
                </div>
                <div id="menuMobile" className="menuMobileClose" onClick={Menu}>
                    <span id="menu" className="menuClose"></span>
                </div>
            </div>

            <div id="navegaçaoMobile" className="navegaçao">
                <nav>
                    <ul>
                        <a
                            href="#presentation"
                            className="links active link01"
                            onClick={Menu}
                        >
                            <div>
                                <li>Home</li>
                            </div>
                        </a>
                        <a
                            href="#about"
                            className="links link02"
                            onClick={Menu}
                        >
                            <div>
                                <li>Sobre mim</li>
                            </div>
                        </a>
                        <a
                            href="#ability"
                            className="links link03"
                            onClick={Menu}
                        >
                            <div>
                                <li>Habilidades</li>
                            </div>
                        </a>
                        <a
                            href="#project"
                            className="links link04"
                            onClick={Menu}
                        >
                            <div>
                                <li>Projetos</li>
                            </div>
                        </a>
                    </ul>
                </nav>
                <div className="contatos">
                    <div className="redes_sociais">
                        <a
                            href="https://github.com/renatogomesf"
                            target="blanck"
                        >
                            <div>
                                <FaGithub className="icon" />
                                <p>github.com</p>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/renato-gomes-22b759236/"
                            target="blanck"
                        >
                            <div>
                                <FaLinkedin className="icon" />
                                <p>linkedin.com</p>
                            </div>
                        </a>
                    </div>
                    <div className="emails">
                        <div className="gmail">
                            <a href="mailto:renato.gfe.dev@gmail.com">
                                <div>
                                    <MdEmail className="icon" />
                                    <p className="texto_email">
                                        renato.gfe.dev@gmail.com
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="hotmail">
                            <a href="mailto:renato_s5s@hotmail.com">
                                <div>
                                    <MdEmail className="icon" />
                                    <p className="texto_email">
                                        renato_s5s@hotmail.com
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderComponent>
    )
}

export default Header
