import { Container, ContainerTechs } from "./styles";

import { motion } from "framer-motion";

const Description = () => {
  return (
    <Container>
      <motion.div
        initial={{ x: 0, y: 500, scale: 1, rotate: 0 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 1.5 }}
      >
        <h1>Desenvolvedor FrontEnd</h1>
        <p>
          Olá eu sou o Leonardo, tenho 20 anos e comecei meu contato com
          tecnologia logo cedo na infância com jogos e depois com a internet
          então sempre tive um contato com a área e um desejo de entrar mais
          nesse mundo. Hoje sou um desenvolvedor frontend, atualmente estudo
          backend na Kenzie Academy Brasil mas procuro sempre continuar me
          desenvolvendo na área.
        </p>
        <ContainerTechs>
          <h3>Tecnologias</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6+</li>
            <li>ReactJS</li>
            <li>Styled-components</li>
            <li>Redux</li>
            <li>ContexAPI</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>NodeJS*</li>
            <li>TypeScript*</li>
            <li>Express*</li>
            <li>PostgreSQL*</li>
            <li>Docker*</li>
          </ul>
          <span>Aprendendo*</span>
        </ContainerTechs>
      </motion.div>
    </Container>
  );
};

export default Description;
