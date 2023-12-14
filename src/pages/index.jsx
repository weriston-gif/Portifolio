import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
  StyledIntro,
} from "../../styles/indexStyle";
import Link from "next/link";
import Softskill from "../../components/Softskill";

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <Infos>
            <Name>Desenvolvedor Web Full Stack | PHP | JavaScript | BDD</Name>
            <Intro>
              <p>
                Desenvolvedor Web Full Stack desde 2019, com ênfase em PHP e
                JavaScript. especializado em frameworks como YII2, LARAVEL e
                Next.js. Expertise em desenvolvimento de aplicações web e
                tecnologias AWS.
              </p>
              <br />
              <h3>Principais competências:</h3>
              <StyledIntro>
                <ul>
                  <li>
                    Expertise no back-end com destaque para Laravel (versões 10
                    e 8) e YII 2.
                  </li>
                  <li>
                    Foco no front-end utilizando ReactJS, NextJS e TypeScript
                    para criar interfaces dinâmicas e responsivas.
                  </li>
                  <li>
                    Habilidades sólidas no ciclo de desenvolvimento, incluindo
                    GIT para controle de versão.
                  </li>
                  <li>
                    Experiência em bancos de dados relacionais, incluindo MySQL,
                    e NoSQL, como MongoDB.
                  </li>
                  <li>
                    Conhecimento prático em serviços da AWS, como EC2, RDS e S3,
                    para desenvolver e manter aplicações escaláveis e eficientes
                    na nuvem.
                  </li>
                  <li>
                    Compromisso contínuo com o aprendizado e aplicação de
                    conhecimento para impulsionar projetos web inovadores e de
                    alta qualidade.
                  </li>
                  <li>Participação em equipes ágeis utilizando Scrum.</li>
                </ul>
              </StyledIntro>
            </Intro>

            <Link href="projects">
              <LinkProjects>
                PROJETOS <FaArrowRight />
              </LinkProjects>
            </Link>
            <Link href="timeline">
              <LinkProjects>
                TimeLine Profissional <FaArrowRight />
              </LinkProjects>
            </Link>
          </Infos>
          <Logo>
            <Img
              className="image-container"
              src="https://avatars.githubusercontent.com/u/64429216?v=4"
              alt="logo"
            />
          </Logo>
        </Content>
      </Container>
      {/* <Softskill /> */}
    </>
  );
}
