import { Container } from "./styles";

import ModalProject from "../ModalProject";

import { useState } from "react";

const CardProjeto = ({ project }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <ModalProject setModal={setModal} project={project} />}

      <Container onClick={() => setModal(true)}>
        <h2>{project.name}</h2>
        <div>
          <img src={project.img} alt={project.name} />
        </div>
      </Container>
    </>
  );
};

export default CardProjeto;
