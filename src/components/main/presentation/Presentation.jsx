import React from 'react'
import { PresentationComponent } from './PresentationStyle'
import DEV from '../../../image/dev.png'

const Presentation = () => {
    return (
        <PresentationComponent id="presentation">
            <div>
                <p>Olá! Meu nome é</p>
                <h1>Renato Gomes</h1>
                <h2>Desenvolvedor Full Stack</h2>
            </div>
            <img className="img_dev" src={DEV} alt="Desenvolvedor" />
        </PresentationComponent>
    )
}

export default Presentation
