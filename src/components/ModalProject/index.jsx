import { ContainerModal, Modal } from "./styles";

import { IoCloseCircleOutline } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

const ModalProject = ({ setModal, project }) => {
  return (
    <ContainerModal>
      <Modal>
        <header>
          <IoCloseCircleOutline size={"25px"} onClick={() => setModal(false)} />
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
    </ContainerModal>
  );
};
export default ModalProject;
