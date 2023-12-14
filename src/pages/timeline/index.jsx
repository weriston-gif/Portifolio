import React from "react";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { ReactComponent as StarIcon } from "./school.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimeLine() {
  return (
    <>
      <div className="constainer-timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - Cursando"
          >
            <h3 className="vertical-timeline-element-title">
              Ciência da Computação
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              São Paulo, Brasil
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Universidade Paulista - UNIP
            </h4>

            <p>
              Inserção no mundo de desenvolvimento aonde tive contato direto com
              várias informações relacionadas a desenvolvimento e tecnologias
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="abr de 2019 - ago de 2020 · 1 ano 5 meses"
          >
            <h3 className="vertical-timeline-element-title">
              Estágio Analista de Sistema
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cibernet Solutions · Estágio
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              São Paulo, São Paulo, Brasil
            </h4>

            <p>
              Profissional com vasta experiência como Analista de Sistemas e
              Suporte em um software de planos de saúde validado pela ANS,
              operando em um ambiente SAP. Minhas responsabilidades incluíam a
              avaliação e resolução de questões apresentadas pelos usuários,
              demandando habilidades analíticas e capacidade de simulação para
              compreender e solucionar desafios complexos. O ambiente dinâmico
              exigiu a aplicação de conhecimentos técnicos sólidos para garantir
              a eficiência operacional e a satisfação do usuário. Destaco minha
              capacidade de avaliar, simular e resolver problemas de forma
              eficiente, o que contribuiu diretamente para a melhoria contínua
              do software. A expertise no ambiente SAP, aliada ao uso do Visual
              Basic e banco de dados Oracle, solidificou minha competência em
              ambientes empresariais complexos. Minha abordagem proativa e
              orientada para resultados me permitiu destacar-me na análise
              crítica de requisitos e na implementação de soluções eficazes,
              demonstrando comprometimento com a excelência e eficiência
              operacional. Estou pronto para enfrentar novos desafios e
              contribuir para o sucesso de projetos inovadores no campo da saúde
              e tecnologia.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" out de 2021 - junho de 2023"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          >
            <h3 className="vertical-timeline-element-title">
              Desenvolvedor da web
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mooven Creative{" "}
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              São Paulo, São Paulo, Brasil
            </h4>
            <p>
              Sou um desenvolvedor apaixonado por criar soluções inovadoras para
              os desafios complexos do setor de Recursos Humanos. Minha
              experiência centraliza-se no desenvolvimento de uma ferramenta
              revolucionária para recrutamento e seleção, gestão de desempenho e
              capacitação de profissionais. Ao longo do meu percurso, utilizei
              tecnologias de ponta, incluindo PHP com framework YII2 e
              JavaScript puro e com Jquery, para construir uma plataforma
              robusta e eficiente. Minha especialização em AWS contribuiu para a
              criação de uma infraestrutura escalável e confiável, garantindo
              que a ferramenta possa crescer e evoluir com as demandas do
              mercado. Destaco minha proficiência no desenvolvimento de
              interfaces responsivas, utilizando Bootstrap para criar
              experiências de usuário intuitivas e acessíveis em qualquer
              dispositivo. Isso resultou em uma interação fluida e eficaz para
              os usuários da ferramenta, independentemente do dispositivo que
              estão utilizando. Minha competência em bancos de dados MySQL foi
              fundamental para garantir o armazenamento e recuperação eficientes
              de dados críticos relacionados ao recrutamento, desempenho e
              capacitação de profissionais. Para otimizar tarefas diárias, adoto
              o sistema operacional Linux, aproveitando seus recursos avançados
              para garantir um ambiente de desenvolvimento eficiente e seguro.
              Estou comprometido em continuar inovando no campo do Recrutamento
              e Seleção, buscando constantemente melhorias e atualizações para
              oferecer soluções de ponta que atendam às necessidades em
              constante evolução do mercado de Recursos Humanos. Minha abordagem
              centrada no usuário, combinada com minha expertise técnica, me
              posiciona como um profissional capaz de impulsionar o sucesso e a
              eficiência em ambientes corporativos.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Atual"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          >
            <h3 className="vertical-timeline-element-title">
              Desenvolvedor da web
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              IP4Y Instituição de pagamentos{" "}
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Guarulhos, São Paulo, Brasil
            </h4>
            <p>
              Profissional Full Stack Pleno com expertise em diversas
              tecnologias para desenvolvimento web. Possuo conhecimento avançado
              em PHP, com experiência nas versões 7.4 e 8.1, e especialização no
              framework Laravel, versões 10 e 8. Minha habilidade em PHP se
              estende desde a construção de robustas aplicações back-end até a
              implementação de lógicas complexas. Além disso, destaco minha
              proficiência no desenvolvimento front-end utilizando NextJS 13 e
              TypeScript. Minha experiência inclui a criação de interfaces
              responsivas e dinâmicas, utilizando as melhores práticas de
              desenvolvimento e mantendo-me atualizado com as últimas tendências
              em tecnologia web. Com sólido conhecimento em sistemas de controle
              de versão, destaco meu domínio em GIT, garantindo eficiência no
              gerenciamento do código fonte e colaboração efetiva em equipes de
              desenvolvimento. Adicionalmente, possuo experiência em integração
              de serviços utilizando a infraestrutura da Amazon Web Services
              (AWS), garantindo o desenvolvimento de soluções escaláveis e
              confiáveis. Minha habilidade em trabalhar com serviços da AWS
              contribui para a criação de aplicações robustas e de alto
              desempenho.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
