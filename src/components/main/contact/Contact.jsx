import React from "react";

import { ContactComponent } from "./ContactStyle";

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
// import { FaExternalLinkAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <ContactComponent>
            <div className="contatos">
                <div className="linkss">
                    <a href="https://github.com/renatogomesf" target="blanck">
                        <div>
                            <FaGithub className="icon" />
                            <p>github.com</p>

                            {/* <button className="btn_redes">
                                <FaExternalLinkAlt />
                            </button> */}
                        </div>
                        {/* <hr /> */}
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
                        {/* <hr /> */}
                    </a>
                </div>

                <div className="linkss">
                    <div className="gmail">
                        <a href="mailto:renato.gfe.dev@gmail.com">
                            <div>
                                <MdEmail className="icon" />
                                <p className="texto_email">
                                    renato.gfe.dev@gmail.com
                                </p>
                            </div>
                            {/* <hr /> */}
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
                            {/* <hr /> */}
                        </a>
                    </div>
                </div>
            </div>
        </ContactComponent>
    );
}
 
export default Contact;