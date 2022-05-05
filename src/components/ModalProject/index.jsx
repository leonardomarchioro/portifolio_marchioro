import { ContainerModal, Modal } from "./styles";

import { motion } from "framer-motion";

import { IoCloseCircleOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

const ModalProject = ({ setModal, project }) => {
  return (
    <ContainerModal>
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
          <div>
            <div className="Img">
              <img src={project.img} alt={project.name} />
              <a href={project.link} target="_blanck">
                <GoLinkExternal size={"25px"} />
              </a>
            </div>
            <div className="Infos">
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
