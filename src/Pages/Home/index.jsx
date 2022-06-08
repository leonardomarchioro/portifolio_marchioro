import { useState } from "react";

import Modalcontact from "../../components/ModalContact";
import Nav from "../../components/Header";
import Infos from "../../components/Infos";
import Description from "../../components/Description";
import ListTechs from "../../components/ListTechs";

import { Container } from "./style";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      {modal && <Modalcontact setModal={setModal} />}

      <Nav setModal={setModal} />
      <div className="Desktop">
        <Infos />
        <Description />
      </div>
      <ListTechs />
    </Container>
  );
};

export default Home;
