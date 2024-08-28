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

import DIGITAL_STORE from '../../../image/imgProjeto/digital-store.png'
import PORTIFOLIO_V2 from '../../../image/imgProjeto/portifolio v2.png'
import FORM_MONGODB from '../../../image/imgProjeto/formulario-mongodb.png'
import FORM_MYSQL from '../../../image/imgProjeto/formulario.png'
import LANDING_BARBEARIA from '../../../image/imgProjeto/landing-page-barbearia.png'
import LANDING_PAGE from '../../../image/imgProjeto/landing page.png'
import PAGINA_RESORTS from '../../../image/imgProjeto/pagina-de-resorts.png'
import PORTIFOLIO_V1 from '../../../image/imgProjeto/portifolio-antigo.png'
import JOGO_PERGUNTA from '../../../image/imgProjeto/jogo de perguntas.png'
import CALCULADORA from '../../../image/imgProjeto/calculadora.png'
import LISTA from '../../../image/imgProjeto/lista.png'

import { FaCode } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'

const projetos = [
    {
        img: DIGITAL_STORE,
        titulo: 'Digital Store',
        descricao: 'E-commerce de sapatos, roupas e acessórios',
        tecnologias: [REACT, SC, JS],
        link_projeto: 'https://renatogomesf.github.io/Digital-Store/',
        link_codigo: 'https://github.com/renatogomesf/Digital-Store'
    },
    {
        img: PORTIFOLIO_V2,
        titulo: 'Portifólio v2',
        descricao: 'Segunda versão do meu portifólio.',
        tecnologias: [REACT, CSS, JS],
        link_projeto: 'https://renatogomesf.github.io/Portifolio-v2/',
        link_codigo: 'https://github.com/renatogomesf/Portifolio-v2'
    },
    {
        img: FORM_MONGODB,
        titulo: 'Formulário Full-Stack (MongoDB Atlas)',
        descricao:
            'Formulário fullstack onde é possível realizar um CRUD (Create, Read, Update e Delete) completo.',
        tecnologias: [REACT, SC, JS, NODE, MONGODB],
        link_projeto: 'https://renatogomesf.github.io/Formulario-MongoDB/',
        link_codigo: 'https://github.com/renatogomesf/Formulario-MongoDB'
    },
    {
        img: FORM_MYSQL,
        titulo: 'Formulário Full-Stack (MySQL)',
        descricao:
            'Formulário fullstack onde é possível realizar um CRUD (Create, Read, Update e Delete) completo.',
        tecnologias: [REACT, SC, JS, NODE, MYSQL],
        link_projeto: 'https://renatogomesf.github.io/Formulario-MySQL/',
        link_codigo: 'https://github.com/renatogomesf/Formulario-MySQL'
    },
    {
        img: LANDING_BARBEARIA,
        titulo: 'Landing page Barbearia',
        descricao:
            'Página destinada a divulgar uma determinada barbearia com cortes de cabelo e barba.',
        tecnologias: [REACT, SC, JS],
        link_projeto: 'https://renatogomesf.github.io/Landing-Page-Barbearia/',
        link_codigo: 'https://github.com/renatogomesf/Landing-Page-Barbearia'
    },
    {
        img: LANDING_PAGE,
        titulo: 'Landing page Restaurante.',
        descricao:
            'Página destinada a divulgar um determinado restaurante com foco em delivery.',
        tecnologias: [REACT, TAILWIND, JS],
        link_projeto: 'https://renatogomesf.github.io/Landing-Page/',
        link_codigo: 'https://github.com/renatogomesf/Landing-Page'
    },
    {
        img: PAGINA_RESORTS,
        titulo: 'Página de Resorts.',
        descricao:
            'Página destinada a facilitar a procura e a reserva de resorts na região desejada pelo usuário.',
        tecnologias: [REACT, TAILWIND, JS],
        link_projeto: 'https://renatogomesf.github.io/Pagina-de-Resorts/',
        link_codigo: 'https://github.com/renatogomesf/Pagina-de-Resorts'
    },
    {
        img: PORTIFOLIO_V1,
        titulo: 'Primeiro Portifólio.',
        descricao:
            'Portifólio criado após o término do curso de HTML e CSS. Posteriormente, foi adicionado JavaScript para dar função de abrir e fechar ao menu mobile.',
        tecnologias: [HTML, CSS, JS],
        link_projeto: 'https://renatogomesf.github.io/Primeiro-Portifolio/',
        link_codigo: 'https://github.com/renatogomesf/Portifolio'
    },
    {
        img: JOGO_PERGUNTA,
        titulo: 'Perguntas e Respostas.',
        descricao:
            'Jogo de conhecimentos gerais de múltiplas escolhas na qual só existe uma correta.',
        tecnologias: [HTML, CSS, JS],
        link_projeto: 'https://renatogomesf.github.io/Perguntas-e-Respostas/',
        link_codigo: 'https://github.com/renatogomesf/Perguntas-e-Respostas'
    },
    {
        img: CALCULADORA,
        titulo: 'Calculadora.',
        descricao: 'Aplicativo para efetuar calculos simples e rápidos.',
        tecnologias: [HTML, CSS, JS],
        link_projeto: 'https://renatogomesf.github.io/Calculadora/',
        link_codigo: 'https://github.com/renatogomesf/Calculadora'
    },
    {
        img: LISTA,
        titulo: 'Lista.',
        descricao:
            'Aplicativo para armazenar informações no geral, em forma de lista.',
        tecnologias: [HTML, CSS, JS],
        link_projeto: 'https://renatogomesf.github.io/Lista/',
        link_codigo: 'https://github.com/renatogomesf/Lista'
    }
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
                            <div className="div_img">
                                <img
                                    className="img_projeto"
                                    src={item.img}
                                    alt={item.titulo}
                                />
                            </div>

                            <div className="açoes">
                                <h4 className="titulo_projeto">
                                    {item.titulo}
                                </h4>
                                <div className="btn_links">
                                    <a href={item.link_projeto} target="blank">
                                        <div>
                                            <GoProjectSymlink className="icon" />
                                            <span>Ver projeto</span>
                                        </div>
                                        <hr />
                                    </a>
                                    <a href={item.link_codigo} target="blank">
                                        <div>
                                            <FaCode className="icon" />
                                            <span>Ver Código</span>
                                        </div>
                                        <hr />
                                    </a>
                                </div>
                            </div>

                            <div className="info">
                                <div>
                                    <p className="descricao">Descrição:</p>
                                    <p>{item.descricao}</p>
                                </div>
                                <p className="tec_usada">Tecnologias usadas:</p>

                                <div className="tecnologias">
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
