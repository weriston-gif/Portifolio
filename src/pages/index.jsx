import { FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img, StyledIntro } from '../../styles/indexStyle'
import Link from 'next/link'
import Softskill from '../../components/Softskill'

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <Infos>
            <Name>Desenvolvedor Web Full Stack | PHP | JavaScript | BDD</Name>
            <Intro>
              <p>
                Desenvolvedor Web Full Stack com mais de 3 anos de experiência, especializado em frameworks como YII2, LARAVEL e Next.js. Expertise em desenvolvimento de aplicações web e tecnologias AWS.
              </p>
              <br />
              <h3>Principais competências:</h3>
              <StyledIntro>
                <ul>
                  <li>Desenvolvimento e manutenção de aplicações web com YII2 e LARAVEL.</li>
                  <li>Criação de APIs RESTful para integração de sistemas.</li>
                  <li>Implementação de funcionalidades front-end com HTML, CSS e JavaScript.</li>
                  <li>Utilização de bancos de dados MySQL e MongoDB.</li>
                  <li>Implantação e gerenciamento de aplicações na AWS.</li>
                  <li>Colaboração em equipes ágeis com Scrum.</li>
                </ul>
              </StyledIntro>

            </Intro>

            <Link href="projects">
              <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
            </Link>
            <Link href="timeline">
              <LinkProjects>TimeLine Profissional <FaArrowRight /></LinkProjects>
            </Link>

          </Infos>
          <Logo>
            <Img className='image-container' src="https://avatars.githubusercontent.com/u/64429216?v=4" alt="logo" />
          </Logo>
        </Content>
      </Container>
      {/* <Softskill /> */}

    </>
  )
}
