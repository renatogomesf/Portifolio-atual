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
    { img: HTML, title: 'HTML', class: 'html' },
    { img: CSS, title: 'CSS', class: 'css' },
    { img: JS, title: 'JavaScript', class: 'js' },
    { img: REACT, title: 'React.js', class: 'react' },
    { img: SC, title: 'Styled Components', class: 'sc' },
    { img: NODE, title: 'Node.js', class: 'node' },
    { img: MYSQL, title: 'MySQL', class: 'mysql' },
    { img: CYPRESS, title: 'Cypress', class: 'cypress' },
    { img: JEST, title: 'Jest', class: 'jest' },
    { img: VITEST, title: 'Vitest', class: 'vitest' },
    { img: MONGODB, title: 'MongoDB Atlas', class: 'mongo' },
    { img: TAILWIND, title: 'Tailwind', class: 'tailwind' },
    { img: VITE, title: 'Vite', class: 'vite' },
    { img: GIT, title: 'Git', class: 'git' },
    { img: GITHUB, title: 'GitHub', class: 'github' },
    { img: VSCODE, title: 'VS Code', class: 'vscode' }
]

const Ability = () => {
    return (
        <AbilityComponent id="ability" className='section'>
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
                        <div id="tecnologia" className={item.class} key={index}>
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
