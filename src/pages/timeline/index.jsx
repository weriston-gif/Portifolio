import React from 'react'
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as StarIcon } from "./school.svg";


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
                        date="2018 - present"

                    >
                        <h3 className="vertical-timeline-element-title">Ciência da Computação</h3>
                        <h4 className="vertical-timeline-element-subtitle">São Paulo, São Paulo, Brasil</h4>
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
                            Minha rotina de trabalho era diretamente em contato com cliente via ferramentas digitais, como Skype, e-mail e uma ferramenta de acompanhamento de chamados(Jira).
                            Ao conversa com os clientes ou nas demandas enviadas por eles informando algum "bug" ou melhoramento da ferramenta, meu trabalho era analisar via código o que foi passado pelo cliente para verificar se existia um problema ou um uso errado da ferramenta pelo cliente, caso tenha algum problema tanto lógico como de funcionalidade teria que ser corrigido, se fosse alguma melhoria teria que ser feito uma mapeamento das exigências do cliente e passa para analise de projeto, que seria confirmado a melhoria ou não. Na prática de melhorias do sistema tinha auxílio de um Dev mais experiente, caso fosse algo muito complexo.
                            Prestávamos suporte remotamente aos clientes utilizando Anydesk, VPN e TeamViwer, também tinham alguns treinamentos presenciais que eram feitos, tanto para clientes novos quanto para os mais antigos.                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="abr de 2021 - 1 ano 10 meses"

                    >
                        <h3 className="vertical-timeline-element-title">Desenvolvedor Júnior</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mooven Consulting </h4>
                        <h4 className="vertical-timeline-element-subtitle">São Paulo, São Paulo, Brasil</h4>
                        <p>
                            Trabalho diretamente com aplicações WEB. Criação de sites e blogs. Trabalho diretamente com aplicações WEB. Criação de sites e blogs.
                            Competências: Metodologias Agile · Git · Aplicativos web
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date=" out de 2021 - Atual"

                    >
                        <h3 className="vertical-timeline-element-title">
                            Desenvolvedor da web
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">Mooven Creative </h4>
                        <h4 className="vertical-timeline-element-subtitle">São Paulo, São Paulo, Brasil</h4>
                        <p>
                            Atuação em desenvolvimento de aplicações WEB, em PHP, Javascript e AWS. Conhecimento técnico em responsividade e modelos ágeis.Atuação em desenvolvimento de aplicações WEB, em PHP, Javascript e AWS. Conhecimento técnico em responsividade e modelos ágeis.
                            Competências: Desenvolvimento aplicativos da web · Metodologias Agile
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}
