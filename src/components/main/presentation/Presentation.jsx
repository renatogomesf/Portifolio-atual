import React, { useEffect } from 'react'
import { PresentationComponent } from './PresentationStyle'

import { gsap } from 'gsap'

const Presentation = () => {
    useEffect(() => {
        gsap.fromTo(
            '.nome',
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, delay: 0.5 }
        )
    }, [])

    return (
        <PresentationComponent id="presentation" className="section">
            <div className="nome">
                <h1>Olá! Meu nome é Renato Gomes</h1>
                <h2>Desenvolvedor Full Stack</h2>
            </div>
        </PresentationComponent>
    )
}

export default Presentation
