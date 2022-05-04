import { useState } from "react";
import Modalcontact from "../../components/ModalContact";
import Header from "../../components/Header";
import Infos from "../../components/Infos";
import Description from "../../components/Description";

import { Container, Body } from "./style";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      {modal && <Modalcontact setModal={setModal} />}

      <Header setModal={setModal} />
      <Body>
        <Infos setModal={setModal} />
        <Description />
      </Body>
    </Container>
  );
};

export default Home;
