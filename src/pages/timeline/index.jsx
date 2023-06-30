import React from 'react'
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as StarIcon } from "./school.svg";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function TimeLine() {
    return (
        <>
            <div className='constainer-timeline'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018 - Cursando"

                    >
                        <h3 className="vertical-timeline-element-title">Ciência da Computação</h3>
                        <h4 className="vertical-timeline-element-subtitle">São Paulo, Brasil</h4>
                        <h4 className="vertical-timeline-element-subtitle">Universidade Paulista - UNIP</h4>

                        <p>
                            Inserção no mundo de desenvolvimento aonde tive contato direto com várias informações relacionadas a desenvolvimento e tecnologias
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="abr de 2019 - ago de 2020 · 1 ano 5 meses"

                    >
                        <h3 className="vertical-timeline-element-title">Estágio Analista de Sistema</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cibernet Solutions · Estágio</h4>
                        <h4 className="vertical-timeline-element-subtitle">São Paulo, São Paulo, Brasil</h4>

                        <p>
                            Na minha rotina de trabalho, tive a oportunidade de trabalhar com tecnologias como Visual Basic 6 e JavaScript puro.
                            <br />
                            Utilizando o Visual Basic 6, desenvolvi aplicações desktop para atender às necessidades dos clientes. Essas aplicações abrangiam desde ferramentas internas até sistemas completos, utilizando recursos e funcionalidades disponíveis nessa linguagem de programação.
                            <br />

                            Além disso, também utilizei JavaScript puro em diversos projetos. Essa linguagem é amplamente utilizada para o desenvolvimento de aplicações web, permitindo a criação de interfaces interativas e dinâmicas. Com o JavaScript, pude implementar funcionalidades front-end, manipular elementos da página, validar formulários e realizar requisições assíncronas, entre outras tarefas.
                            <br />

                            Ao trabalhar com Visual Basic 6 e JavaScript puro, adquiri conhecimentos específicos sobre essas linguagens e suas respectivas características e recursos. Essa experiência me proporcionou uma base sólida no desenvolvimento de aplicações desktop e web, além de habilidades na resolução de problemas e no desenvolvimento de soluções eficientes para os clientes.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="abr de 2021 - 1 ano 10 meses"

                    >
                        <h3 className="vertical-timeline-element-title">Desenvolvedor Júnior</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mooven Consulting </h4>
                        <h4 className="vertical-timeline-element-subtitle">São Paulo, São Paulo, Brasil</h4>
                        <p>
                            No meu trabalho, atuo diretamente na criação de sites e blogs, focado em aplicações web. Tenho experiência significativa no desenvolvimento de soluções web usando diversas tecnologias e ferramentas.
                            <br />

                            Trabalhando com sistemas operacionais Linux, adquiri habilidades na configuração e utilização desse ambiente para o desenvolvimento de aplicações web. Além disso, tenho experiência em trabalhar com PHP, especialmente com o framework YII 2, e também com WordPress, uma plataforma popular para a criação de blogs e sites.
                            <br />

                            Ao longo do tempo, tive a oportunidade de aprimorar minha rotina de trabalho, incorporando metodologias ágeis, como Scrum ou Kanban, em squads de desenvolvimento. Essas abordagens permitem uma colaboração mais eficiente e eficaz entre as equipes, resultando em entregas de alta qualidade.
                            <br />

                            Imerso no mundo do desenvolvimento web, estou sempre buscando atualizar meus conhecimentos e aprender novas tecnologias para aprimorar minhas habilidades. Essa dedicação constante me permite entregar soluções inovadoras e eficientes para os projetos em que trabalho.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=" out de 2021 - junho de 2023"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

                    >
                        <h3 className="vertical-timeline-element-title">
                            Desenvolvedor da web
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">Mooven Creative </h4>
                        <h4 className="vertical-timeline-element-subtitle">São Paulo, São Paulo, Brasil</h4>
                        <p>
                            Minha atuação profissional está centrada no desenvolvimento de aplicações web, com expertise em PHP, JavaScript e AWS. Possuo amplo conhecimento técnico em responsividade e utilização de metodologias ágeis.

                            Durante minha trajetória, tive a oportunidade de assumir posições de liderança em projetos, o que me proporcionou um vasto conhecimento em gestão. Desenvolvi habilidades de coordenação, organização e comunicação, garantindo o bom andamento dos projetos e a entrega de resultados de alta qualidade.

                            Além disso, aprimorei meu conhecimento em sistemas operacionais Linux e aprofundei minha experiência no uso do Git como sistema de controle de versão. Essas ferramentas são fundamentais para o desenvolvimento colaborativo e a garantia da integridade do código fonte.

                            No âmbito do desenvolvimento web, minha principal atuação foi como desenvolvedor full stack, utilizando tecnologias como PHP, JavaScript, CSS3, HTML5, MySQL e AWS. Responsável pela gestão do projeto em produção, meu papel envolvia desde a concepção e implementação das funcionalidades até o monitoramento e a manutenção do sistema em ambiente de produção.

                            Minha trajetória profissional me proporcionou uma sólida base técnica, aliada a habilidades de liderança e gestão de projetos. Estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos e contribuir para o sucesso dos projetos em que estou envolvido.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}
