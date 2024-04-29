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
import { useEffect, useState } from "react";
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>;

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento assíncrono
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container p-3">
        <div className="block lg:flex justify-between items-start m-auto">
          <Infos>
            <h1 className="font-bold text-3xl">Desenvolvedor Web Full Stack</h1>
            <Intro>
              <p>
                Desenvolvedor Web Full Stack desde 2019, com ênfase em PHP e
                JavaScript. especializado em frameworks como YII2, LARAVEL e
                Next.js. Expertise em desenvolvimento de aplicações web e
                tecnologias AWS.
              </p>
              <br />
              <h3 className="font-semibold">Principais competências:</h3>
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

            <a
              className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300"
              href="projects"
            >
              <p className="flex items-center justify-between p-4 text-white">
                PROJETOS <FaArrowRight />
              </p>
            </a>
            <a
              className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300"
              href="timeline"
            >
              <p className="flex items-center justify-between p-4 text-white">
                TimeLine Profissional <FaArrowRight />
              </p>
            </a>
          </Infos>
          <div
            className={`hidden sm:block lg:flex justify-center items-center`}
          >
            {" "}
            <Img
              className="image-container transition duration-700 ease-in-out transform hover:scale-110"
              src="https://avatars.githubusercontent.com/u/64429216?v=4"
              alt="logo"
            />
          </div>
        </div>
      </div>
      {/* <Softskill /> */}
    </>
  );
}
