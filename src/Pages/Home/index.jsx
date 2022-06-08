import { useState } from "react";
import Modalcontact from "../../components/ModalContact";
import Nav from "../../components/Header";
import Infos from "../../components/Infos";
import Description from "../../components/Description";

import { Container } from "./style";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      {modal && <Modalcontact setModal={setModal} />}

      <Nav setModal={setModal} />
      <Infos setModal={setModal} />
      <Description />
      
    </Container>
  );
};

export default Home;
