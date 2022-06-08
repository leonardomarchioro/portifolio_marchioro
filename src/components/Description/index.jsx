import { Container, ContainerTechs } from "./styles";

import { motion } from "framer-motion";

const Description = () => {
  const techs = {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "ReactJS",
      "Styled-components",
      "Redux",
      "ContexAPI",
    ],
    Versionamento: ["Git", "GitHub"],
    Backend: [
      "NodeJS",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Docker",
      "Prisma",
    ],
    Aprendendo: ["Python", "Django"],
  };

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
        <h2>Sobre</h2>
        <p>
          Olá eu sou o Leonardo, tenho 20 anos e comecei meu contato com
          tecnologia logo cedo na infância com jogos e depois com a internet
          então sempre tive um contato com a área e um desejo de entrar mais
          nesse mundo. Hoje sou um desenvolvedor frontend, atualmente estudo
          backend na Kenzie Academy Brasil mas procuro sempre continuar me
          desenvolvendo na área.
        </p>
        <ContainerTechs>
          <h2>Tecnologias</h2>
          <ul>
            <h3>Front-end: </h3>
            {techs.Frontend.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
          <ul>
            <h3>Back-end: </h3>
            {techs.Backend.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
          <ul>
            <h3>Versionamento: </h3>
            {techs.Versionamento.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
          <ul>
            <h3>Aprendendo: </h3>
            {techs.Aprendendo.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </ContainerTechs>
      </motion.div>
    </Container>
  );
};

export default Description;
