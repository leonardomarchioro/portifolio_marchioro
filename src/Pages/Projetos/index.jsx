import { Container, Body } from "./styles";
import { TiArrowBackOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";

import { projects } from "../../assets/projects";

import CardProjeto from "../../components/CardProjeto";

const Projetos = () => {
  const history = useHistory();

  return (
    <Container>
      <header>
        <TiArrowBackOutline size={"30px"} onClick={() => history.push("/")} />
      </header>
      <h1>Projetos</h1>
      <Body>
        {projects.map((project, index) => (
          <CardProjeto key={index} project={project} />
        ))}
      </Body>
    </Container>
  );
};

export default Projetos;
