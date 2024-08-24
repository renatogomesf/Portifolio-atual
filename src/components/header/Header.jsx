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

const Header = () => {
    return (
        <HeaderComponent>
            <h1>&lt;RDEV/&gt;</h1>

            <nav>
                <ul>
                    <a href="">
                        <div>
                            <FaHome />
                            <li>Home</li>
                        </div>
                        <hr />
                    </a>
                    <a href="">
                        <div>
                            <IoPersonSharp />
                            <li>Sobre mim</li>
                        </div>
                        <hr />
                    </a>
                    <a href="">
                        <div>
                            <GrVulnerability />
                            <li>Habilidades</li>
                        </div>
                        <hr />
                    </a>
                    <a href="">
                        <div>
                            <FaDiagramProject />
                            <li>Projetos</li>
                        </div>
                        <hr />
                    </a>
                </ul>
            </nav>

            <div className="contatos">
                <div className="redes_sociais">
                    <div>
                        <a
                            href="https://github.com/renatogomesf"
                            target="blanck"
                        >
                            <FaGithub />
                            <p>github.com</p>

                            <button>
                                <FaExternalLinkAlt />
                            </button>
                        </a>
                        <hr />
                    </div>

                    <div>
                        <a
                            href="https://www.linkedin.com/in/renato-gomes-22b759236/"
                            target="blanck"
                        >
                            <FaLinkedin />
                            <p>linkedin.com</p>

                            <button>
                                <FaExternalLinkAlt />
                            </button>
                        </a>
                        <hr />
                    </div>
                </div>

                <div className="emails">
                    <div className="gmail">
                        <div className="conteudo">
                            <a href="mailto:renato.gfe.dev@gmail.com">
                                <MdEmail />
                                <p className="texto_email">
                                    renato.gfe.dev@gmail.com
                                </p>
                            </a>
                        </div>
                        <hr />
                    </div>

                    <div className="hotmail">
                        <div className="conteudo">
                            <a href="mailto:renato_s5s@hotmail.com">
                                <MdEmail />
                                <p className="texto_email">
                                    renato_s5s@hotmail.com
                                </p>
                            </a>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </HeaderComponent>
    )
}

export default Header
