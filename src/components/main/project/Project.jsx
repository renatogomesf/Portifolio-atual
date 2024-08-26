import React from 'react'
import { ProjectComponent } from './ProjectStyle'

import PROJETO from '../../../image/projeto.png'

import HTML from '../../../image/imgHabilidade/html.png'
import CSS from '../../../image/imgHabilidade/css.png'
import JS from '../../../image/imgHabilidade/javascript.png'
import REACT from '../../../image/imgHabilidade/react.png'
import SC from '../../../image/imgHabilidade/styled-components.png'
import NODE from '../../../image/imgHabilidade/node-js.png'
import MYSQL from '../../../image/imgHabilidade/mysql.png'
import MONGODB from '../../../image/imgHabilidade/mongodb.png'
import TAILWIND from '../../../image/imgHabilidade/tailwind.png'

import FORM_MONGODB from '../../../image/imgProjeto/formulario-mongodb.png'
import FORM_MYSQL from '../../../image/imgProjeto/formulario.png'
import LANDING_BARBEARIA from '../../../image/imgProjeto/landing-page-barbearia.png'
import LANDING_PAGE from '../../../image/imgProjeto/landing page.png'
import PAGINA_RESORTS from '../../../image/imgProjeto/pagina-de-resorts.png'
import PORTIFOLIO_ANTIGO from '../../../image/imgProjeto/portifolio-antigo.png'
import JOGO_PERGUNTA from '../../../image/imgProjeto/jogo de perguntas.png'
import CALCULADORA from '../../../image/imgProjeto/calculadora.png'
import LISTA from '../../../image/imgProjeto/lista.png'

const projetos = [
    {
        img: FORM_MONGODB,
        titulo: 'Formulário Full-Stack (MongoDB Atlas)',
        descricao:
            'Formulário fullstack onde é possível cadastrar pessoas, realizar consultas por filtro, ver todos os cadastros, atualizar e deletar os cadastros. Ou seja, é possível realizar um CRUD completo.',
        tecnologias: [REACT, SC, JS, NODE, MONGODB]
    },
    {
        img: FORM_MYSQL,
        titulo: 'Formulário Full-Stack (MySQL)',
        descricao:
            'Formulário fullstack onde é possível cadastrar pessoas, realizar consultas por filtro, ver todos os cadastros, atualizar e deletar os cadastros. Ou seja, é possível realizar um CRUD completo.',
        tecnologias: [REACT, SC, JS, NODE, MYSQL]
    },
    {
        img: LANDING_BARBEARIA,
        titulo: 'Landing page Barbearia',
        descricao:
            'Página destinada a divulgar uma determinada barbearia com cortes de cabelo e barba.',
        tecnologias: [REACT, SC, JS]
    },
    {
        img: LANDING_PAGE,
        titulo: 'Landing page Restaurante.',
        descricao:
            'Página destinada a divulgar um determinado restaurante com foco em delivery.',
        tecnologias: [REACT, TAILWIND, JS]
    },
    {
        img: PAGINA_RESORTS,
        titulo: 'Página de Resorts.',
        descricao:
            'Página destinada a facilitar a procura e a reserva de resorts na região desejada pelo usuário.',
        tecnologias: [REACT, TAILWIND, JS]
    },
    {
        img: PORTIFOLIO_ANTIGO,
        titulo: 'Primeiro Portifólio.',
        descricao:
            'Portifólio criado após o término do curso de HTML e CSS. Posteriormente, foi adicionado JavaScript para dar função de abrir e fechar ao menu mobile.',
        tecnologias: [HTML, CSS, JS]
    },
    {
        img: JOGO_PERGUNTA,
        titulo: 'Perguntas e Respostas.',
        descricao:
            'Jogo de conhecimentos gerais de múltiplas escolhas na qual só existe uma correta.',
        tecnologias: [HTML, CSS, JS]
    },
    {
        img: CALCULADORA,
        titulo: 'Calculadora.',
        descricao:
            'Aplicativo para efetuar calculos simples e rápidos.',
        tecnologias: [HTML, CSS, JS]
    },
    {
        img: LISTA,
        titulo: 'Lista.',
        descricao:
            'Aplicativo para armazenar informações no geral, em forma de lista.',
        tecnologias: [HTML, CSS, JS]
    },
]

const Project = () => {
    return (
        <ProjectComponent id="project">
            <div className="titulo">
                <img
                    className="img_projeto"
                    src={PROJETO}
                    alt="imagem de projeto"
                />
                <h1>Projetos</h1>
            </div>

            <div className="projetos">
                {projetos.map((item, index) => {
                    return (
                        <div className="projeto" key={index}>
                            <img
                                className="img_projeto"
                                src={item.img}
                                alt={item.titulo}
                            />

                            <div className="info">
                                <h4>{item.titulo}</h4>
                                <p>{item.descricao}</p>
                                <p>Tecnologias usadas:</p>

                                <div>
                                    {item.tecnologias.map((img, i) => {
                                        return (
                                            <img
                                                className="img_tec"
                                                key={i}
                                                src={img}
                                                alt=""
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </ProjectComponent>
    )
}

export default Project
