import React from 'react'
import { AboutComponent } from './AboutStyle'

import FALA from '../../../image/fala.png'

import Curriculo from './pdf/Currículo_Renato_Gomes_Ferreira.pdf'

import { GoProjectSymlink } from 'react-icons/go'
import { MdOutlineFileDownload } from 'react-icons/md'

const About = () => {
    return (
        <AboutComponent id="about">
            <div className="titulo">
                <img className="img_fala" src={FALA} alt="imagem de fala" />
                <h1>Sobre mim</h1>
            </div>
            <div className='textos'>
                <p>
                    Oi! Sou <strong>Renato Gomes</strong>, tenho 27 anos e moro em
                    Fortaleza - Ceará. Sou
                    <strong>Desenvolverdor Full Stack</strong>, onde possuo 1 ano de
                    estudos em front-end e 3 meses de estudos em
                    <strong>Back-End + Banco de dados</strong>. Tudo o que eu
                    aprendi foi de forma independente e através do YouTube, com o
                    professor Gustavo Guanabara, do canal Curso em Video, onde
                    aprendi <strong>HTML 5, CSS 3</strong> e o básico de
                    <strong>JavaScript</strong> e com o Bruno Campos, do canal
                    CFBCursos, onde aprendi mais a fundo JavaScript e aprendi do
                    zero <strong>React.js, Node.js e MySQL</strong>.
                </p>
                <p>
                    <strong>Gosto muito de tecnologia</strong>, adoro por a mão na
                    massa, sou uma pessoa bem curiosa e gosto muito de saber como as
                    coisas funcionam e aprender como se faz. Com a web não foi
                    diferente, então fui atrás de saber como funcionava e me deparei
                    com o mundo da programação. Foi difícil no começo, mas continuo
                    <strong>evoluindo dia após dia</strong>.
                </p>
                <div className="link_pdf">
                    <a href={Curriculo} target="blank">
                        <div>
                            <GoProjectSymlink className="icon" />
                            <span>Ver currículo</span>
                        </div>
                        <hr />
                    </a>
                    <a
                        href={Curriculo}
                        download="Currículo_Renato_Gomes_Ferreira.pdf"
                    >
                        <div>
                            <MdOutlineFileDownload className="icon" />
                            <span>Baixar currículo</span>
                        </div>
                        <hr />
                    </a>
                </div>
            </div>
        </AboutComponent>
    )
}

export default About
