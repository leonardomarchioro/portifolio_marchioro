import { ContainerTechs } from "./styles";
import { motion } from "framer-motion";

const ListTechs = () => {
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
      <ContainerTechs>
        <h2>Tecnologias</h2>
        <div className="ListsContainer">
          <ul>
            <h3>Front-end: </h3>
            {techs.Frontend.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <ul>
            <h3>Back-end: </h3>
            {techs.Backend.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <ul>
            <h3>Versionamento: </h3>
            {techs.Versionamento.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <ul>
            <h3>Aprendendo: </h3>
            {techs.Aprendendo.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </ContainerTechs>
    </motion.div>
  );
};

export default ListTechs;
