import React from 'react'
import { HeaderComponent } from './HeaderStyle'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IoPersonSharp } from 'react-icons/io5'
import { GrVulnerability } from 'react-icons/gr'
import { FaDiagramProject } from 'react-icons/fa6'
import { FaHome } from 'react-icons/fa'

import LOGO from '../../../public/logo.png'

const Header = () => {

    return (
        <HeaderComponent>
            <div className="logo">
                <img src={LOGO} alt="" />
                <h1>RDEV</h1>
            </div>

            <nav>
                <ul>
                    <a href="#">
                        <div>
                            <FaHome className="icon" />
                            <li>Home</li>
                        </div>
                        <hr />
                    </a>
                    <a href="#about">
                        <div>
                            <IoPersonSharp className="icon" />
                            <li>Sobre mim</li>
                        </div>
                        <hr />
                    </a>
                    <a href="#ability">
                        <div>
                            <GrVulnerability className="icon" />
                            <li>Habilidades</li>
                        </div>
                        <hr />
                    </a>
                    <a href="#project">
                        <div>
                            <FaDiagramProject className="icon" />
                            <li>Projetos</li>
                        </div>
                        <hr />
                    </a>
                </ul>
            </nav>

            <div className="contatos">
                <div className="redes_sociais">
                    <a href="https://github.com/renatogomesf" target="blanck">
                        <div>
                            <FaGithub className="icon" />
                            <p>github.com</p>

                            <button className="btn_redes">
                                <FaExternalLinkAlt />
                            </button>
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

                            <button className="btn_redes">
                                <FaExternalLinkAlt />
                            </button>
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
        </HeaderComponent>
    )
}

export default Header
