import React from 'react'
import { FooterComponent } from './FooterStyle'

import LOGO from '../../../public/logo.png'
import REACT from '../../image/imgHabilidade/react.png'
import SC from '../../image/imgHabilidade/styled-components.png'
import JS from '../../image/imgHabilidade/javascript.png'

const Footer = () => {
    return (
        <FooterComponent>
            <div className="info_portifolio">
                <div className="info">
                    <div className="logo">
                        <img src={LOGO} alt="" />
                        <h1>
                            <span className="R">R</span>
                            <span className="DEV">DEV</span>
                        </h1>
                    </div>
                    <div className="tec_portifolio">
                        <p>Tecnologias utilizadas no portifólio: </p>
                        <div>
                            <img src={REACT} alt="logo react" />
                            <img src={SC} alt="logo styled components" />
                            <img src={JS} alt="logo javascript" />
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="copy">
                <p>&copy; 2024 Renato Gomes</p>
                <p>v3.0.0</p>
            </div>
        </FooterComponent>
    )
}

export default Footer
