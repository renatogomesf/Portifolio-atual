import React from 'react'
import { AbilityComponent } from './AbilityStyle'

import HABILIDADE from '../../../image/habilidade.png'

import HTML from '../../../image/imgHabilidade/html.png'
import CSS from '../../../image/imgHabilidade/css.png'
import JS from '../../../image/imgHabilidade/javascript.png'
import REACT from '../../../image/imgHabilidade/react.png'
import SC from '../../../image/imgHabilidade/styled-components.png'
import NODE from '../../../image/imgHabilidade/node-js.png'
import MYSQL from '../../../image/imgHabilidade/mysql.png'
import MONGODB from '../../../image/imgHabilidade/mongodb.png'
import TAILWIND from '../../../image/imgHabilidade/tailwind.png'
import VITE from '../../../image/imgHabilidade/vite.png'
import GIT from '../../../image/imgHabilidade/git.png'
import GITHUB from '../../../image/imgHabilidade/github.png'
import VSCODE from '../../../image/imgHabilidade/vscode.png'
import CYPRESS from '../../../image/imgHabilidade/cypress.png'
import JEST from '../../../image/imgHabilidade/jest.png'
import VITEST from '../../../image/imgHabilidade/vitest.png'

const habilidades = [
    { img: HTML, title: 'HTML' },
    { img: CSS, title: 'CSS' },
    { img: JS, title: 'JavaScript' },
    { img: REACT, title: 'React.js' },
    { img: SC, title: 'Styled Componts' },
    { img: NODE, title: 'Node.js' },
    { img: MYSQL, title: 'MySQL' },
    { img: CYPRESS, title: 'Cypress' },
    { img: JEST, title: 'Jest' },
    { img: VITEST, title: 'Vitest' },
    { img: MONGODB, title: 'MongoDB Atlas' },
    { img: TAILWIND, title: 'Tailwind' },
    { img: VITE, title: 'Vite' },
    { img: GIT, title: 'Git' },
    { img: GITHUB, title: 'GitHub' },
    { img: VSCODE, title: 'VS Code' }
]

const Ability = () => {
    return (
        <AbilityComponent id='ability'>
            <div className="titulo">
                <h1>Habilidades</h1>
                <img
                    className="img_habilidade"
                    src={HABILIDADE}
                    alt="imagem de habilidade"
                />
            </div>

            <div className="tecnologias">
                {habilidades.map((item, index) => {
                    return (
                        <div className="tecnologia" key={index}>
                            <img src={item.img} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </AbilityComponent>
    )
}

export default Ability
