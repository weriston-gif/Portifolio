import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'
import Softskill from '../../components/Softskill'

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <Infos>
            <Name>Olá, sou Weriston Carlos</Name>
            <Function>FullStack Developer React JS | PHP | BDD </Function>
            <Intro>Cursando Ciência da Computação 6 / 8 semestres.
              Tenho experiência em desenvolvimento Web
              (React JS,PHP YII 2, GIT e AWS) e mobile.
            </Intro>
            <Link href="projects">
              <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
            </Link>

          </Infos>
          <Logo>
            <Img className='image-container' src="https://avatars.githubusercontent.com/u/64429216?v=4" alt="logo" />
          </Logo>
        </Content>
      </Container>
      <Softskill />
      <Link  href="contact">
        <LinkProjects>CONTATOS <FaArrowRight /></LinkProjects>
      </Link>
    </>
  )
}
