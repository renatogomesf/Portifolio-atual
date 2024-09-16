import React, { useEffect } from 'react'
import { AboutComponent } from './AboutStyle'

import FALA from '../../../image/fala.png'

import Curriculo from './pdf/Currículo_Renato_Gomes_Ferreira.pdf'

import { GoProjectSymlink } from 'react-icons/go'
import { MdOutlineFileDownload } from 'react-icons/md'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Tween } from 'gsap/gsap-core'

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            delay: 0.3,
            scrollTrigger: {
                trigger: '#about',
                start: 'top 150px',
                animation: Tween
                // markers: true
            }
        })

        tl.fromTo('.img_fala', { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.sobre', { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.textos', { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
    }, [])

    return (
        <AboutComponent id="about" className="section">
            <div className="titulo">
                <img className="img_fala" src={FALA} alt="imagem de fala" />
                <h1 className="sobre">Sobre mim</h1>
            </div>
            <div className="textos">
                <p>
                    Oi! Sou <strong>Renato Gomes</strong>, tenho 27 anos e moro
                    em Fortaleza - Ceará. Sou{' '}
                    <strong>Desenvolvedor Full Stack</strong> em início de
                    carreira, apaixonado por tecnologia e por transformar ideias
                    em soluções funcionais. Possuo mais de 1 ano de estudo
                    independentes na área, neste ano fiz o curso full stack da{' '}
                    <span>
                        <a
                            href="https://geracaotech.iel-ce.org.br/"
                            target="blanck"
                        >
                            Geração Tech <FaExternalLinkAlt className="icon" />
                        </a>
                    </span>
                    e, também neste ano, me tornei aluno de{' '}
                    <strong>Engenharia de Software</strong> no Centro
                    Universitário União das Américas Descomplica.
                </p>

                <p>
                    Ao longo do meu aprendizado, desenvolvi projetos pessoais
                    que me permitiram adquirir habilidades em{' '}
                    <strong>
                        React.js, Styled Components, Cypress, Node.js, Jest
                    </strong>{' '}
                    e bancos de dados como <strong>MySQL</strong>, entre outras
                    tecnologias. Estou constantemente buscando aprimorar meu
                    conhecimento, seja através de cursos, estudos autodidatas ou
                    experimentando novas ferramentas. Estou animado para aplicar
                    minhas habilidades em projetos do mundo real e continuar
                    crescendo como desenvolvedor. Meu objetivo é contribuir para
                    equipes que valorizem inovação e aprendizado contínuo.
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
