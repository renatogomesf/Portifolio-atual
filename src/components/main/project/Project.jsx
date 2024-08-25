import React from 'react'
import { ProjectComponent } from './ProjectStyle'

import PROJETO from '../../../image/projeto.png'

const Project = () => {
    return (
        <ProjectComponent id='project'>
            <div className="titulo">
                <img
                    className="img_projeto"
                    src={PROJETO}
                    alt="imagem de projeto"
                />
                <h1>Projetos</h1>
            </div>
        </ProjectComponent>
    )
}

export default Project
