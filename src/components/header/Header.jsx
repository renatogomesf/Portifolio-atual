import React from 'react'
import { HeaderComponent } from './HeaderStyle'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
// import { FaExternalLinkAlt } from 'react-icons/fa'
// import { IoPersonSharp } from 'react-icons/io5'
// import { GrVulnerability } from 'react-icons/gr'
// import { FaDiagramProject } from 'react-icons/fa6'
// import { FaHome } from 'react-icons/fa'

import LOGO from '../../../public/logo.png'

// import { NavLink } from 'react-router-dom'

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
            // topo.style.backgroundColor = 'white'
        } else {
            topo.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.2)'
            // topo.style.backgroundColor = 'transparent'
        }
    })

    return (
        <HeaderComponent className="topo">
            <div className="header">
                <div className="logo">
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
                            className="links active"
                            onClick={Menu}
                        >
                            <div>
                                {/* <FaHome className="icon" /> */}
                                <li>Home</li>
                            </div>
                            <hr />
                        </a>
                        <a href="#about" className="links" onClick={Menu}>
                            <div>
                                {/* <IoPersonSharp className="icon" /> */}
                                <li>Sobre mim</li>
                            </div>
                            <hr />
                        </a>
                        <a href="#ability" className="links" onClick={Menu}>
                            <div>
                                {/* <GrVulnerability className="icon" /> */}
                                <li>Habilidades</li>
                            </div>
                            <hr />
                        </a>
                        <a href="#project" className="links" onClick={Menu}>
                            <div>
                                {/* <FaDiagramProject className="icon" /> */}
                                <li>Projetos</li>
                            </div>
                            <hr />
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
                                {/* <button className="btn_redes">
                                    <FaExternalLinkAlt />
                                </button> */}
                            </div>
                            <hr />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/renato-gomes-22b759236/"
                            target="blanck"
                        >
                            <div>
                                <FaLinkedin className="icon" />
                                <p>linkedin.com</p>
                                {/* <button className="btn_redes">
                                    <FaExternalLinkAlt />
                                </button> */}
                            </div>
                            <hr />
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
                                <hr />
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
                                <hr />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderComponent>
    )
}

export default Header
