import { Container, Body } from "./styles";
import { TiArrowBackOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";
import { projects } from "../../assets/projects";

import CardProjeto from "../../components/CardProjeto";
import { motion } from "framer-motion";

const Projetos = () => {
  const history = useHistory();

  return (
    <Container>
      <header>
        <TiArrowBackOutline size={"30px"} onClick={() => history.push("/")} />
      </header>
      <motion.div
        initial={{ x: 0, y: 0, scale: 0.5, rotate: 0 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 1.8 }}
      >
        <h1>Projetos</h1>
        <Body>
          {projects.map((project, index) => (
            <CardProjeto key={index} project={project} />
          ))}
        </Body>
      </motion.div>
    </Container>
  );
};

export default Projetos;
