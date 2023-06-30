import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const StyledIntro = styled.div`
  /* Estilos para o componente Intro */

  ul {
    list-style-type: none; /* Remover o ponto padrão da lista */
    padding-left: 0; /* Remover o recuo padrão da lista */
  }

  li {
    margin-top: 0.5em; /* Aumentar o espaçamento superior entre os itens da lista */
    margin-bottom: 0.5em; /* Aumentar o espaçamento inferior entre os itens da lista */
  }

  li:before {
    content: '>'; /* Utilizar um ponto personalizado como marcador */
    display: inline-block;
    width: 1em;
    margin-left: -1em; /* Alinhar o marcador à esquerda */
  }
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const Function = styled.span`
  color:  rgb(156, 225, 234);
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Intro = styled.span`
  color:  rgb(156, 225, 234);
  text-align: justify;
  margin-top: 10px;


  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;

  svg {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80% !important;
      height: 80% !important;
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  @media (max-width: 600px) {

    img {
      width: 100% !important;
      height: 100% !important;
    }
  }
`;

export const Img = styled.img``