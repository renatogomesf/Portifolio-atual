import React from 'react'
import { PresentationComponent } from './PresentationStyle'
import DEV from '../../../image/dev.png'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Presentation = () => {
    return (
        <PresentationComponent id="presentation">
            <div>
                <p>Olá! Meu nome é</p>
                <h1>Renato Gomes</h1>
                <h2>Desenvolvedor Full Stack</h2>
            </div>
            <img className="img_dev" src={DEV} alt="Desenvolvedor" />

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
        </PresentationComponent>
    )
}

export default Presentation
