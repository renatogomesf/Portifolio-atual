import React from 'react'
import { FooterComponent } from './FooterStyle'

import REACT from '../../image/imgHabilidade/react.png'
import SC from '../../image/imgHabilidade/styled-components.png'
import JS from '../../image/imgHabilidade/javascript.png'

const Footer = () => {
    return (
        <FooterComponent>
            <hr />

            <div className="info_portifolio">
                <div className="tec_portifolio">
                    <p>Tecnologias utilizadas no portifólio: </p>
                    <div>
                        <img src={REACT} alt="logo react" />
                        <img src={SC} alt="logo styled components" />
                        <img src={JS} alt="logo javascript" />
                    </div>
                </div>

                <div className="copy">
                    <p>&copy; 2024 Renato Gomes</p>
                </div>
            </div>
        </FooterComponent>
    )
}

export default Footer
