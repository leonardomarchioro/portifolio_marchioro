import { ContainerModal, Modal } from "./styles";

import { motion } from "framer-motion";

import { IoCloseCircleOutline } from "react-icons/io5";

import LinkWeb from "../../assets/link-da-web.png";
import LinkGit from "../../assets/github (1).png";

const ModalProject = ({ setModal, project }) => {
  const closeModal = (event) => {
    event.target.tagName === "SECTION" && setModal(false);
  };
  return (
    <ContainerModal onClick={(e) => closeModal(e)}>
      <motion.div
        className="animation-desktop"
        initial={{ x: 0, y: 0, scale: 0.5, rotate: 0 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 1 }}
      >
        <Modal>
          <header>
            <IoCloseCircleOutline
              size={"25px"}
              onClick={() => setModal(false)}
            />
            <h2>{project.name}</h2>
          </header>
          <div className="Infos">
            <div className="Sobre">
              <p>{project.sobre}</p>
            </div>
            <div className="Links">
              <a href={project.link} target="_blanck">
                <img src={LinkWeb} alt="aplicação na web" />
              </a>
              <a href={project.repo} target="_blanck">
                <img src={LinkGit} alt="repositório" />
              </a>
            </div>
            <div className="ListTechs">
              <h3>Tecnologias usadas</h3>
              <ul>
                {project.techs.map((tech, index) => (
                  <li key={index}>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      </motion.div>
    </ContainerModal>
  );
};
export default ModalProject;
