import React, { useEffect } from 'react'
import { PresentationComponent } from './PresentationStyle'
// import DEV from '../../../image/dev.png'

// import svg from '../../../../public/arc-divider.svg'

// import { FaGithub } from 'react-icons/fa'
// import { FaLinkedin } from 'react-icons/fa'
// import { MdEmail } from 'react-icons/md'
// import { FaExternalLinkAlt } from 'react-icons/fa'

import { gsap } from 'gsap'

const Presentation = () => {

    useEffect(()=>{
        // const tl = gsap.timeline({defaults: {delay: 0.4}})

        gsap.fromTo(".nome",
            {y: 100, opacity: 0},
            {y: 0, opacity: 1, delay: 0.5}
        )
    }, [])

    return (
        <PresentationComponent id="presentation" className="section">
            <div className='nome'>
                {/* <p>Olá! Meu nome é</p> */}
                <h1>Olá! Meu nome é Renato Gomes</h1>
                <h2>Desenvolvedor Full Stack</h2>
            </div>
            {/* <img className="img_dev" src={DEV} alt="Desenvolvedor" /> */}

            {/* <div className="contatos">
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
            </div> */}
        </PresentationComponent>
    )
}

export default Presentation
