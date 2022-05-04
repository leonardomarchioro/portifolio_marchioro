import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoReader,
} from "react-icons/io5";

import gifCode from "../../assets/animation.gif";
import { Container } from "./styles";

const Infos = ({ setModal }) => {
  return (
    <Container>
      <div className="Infos">
        <h1>Leonado Marchioro</h1>
        <div>
          <a href="https://github.com/leonardomarchioro" target="_blanck">
            <IoLogoGithub size={"30px"} color={"#EEEEEE"} />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-marchioro/"
            target="_blanck"
          >
            <IoLogoLinkedin size={"30px"} color={"#EEEEEE"} />
          </a>

          <IoLogoWhatsapp
            size={"30px"}
            color={"#EEEEEE"}
            onClick={() => setModal(true)}
          />

          <a
            href="https://docs.google.com/document/d/1dQY83Ov6R0esQu-IniqmNhrBFRMqTWmK_EuLUor3npY/edit?usp=sharing"
            target="_blanck"
          >
            <IoReader size={"30px"} color={"#EEEEEE"} />
          </a>
        </div>
      </div>
      <div className="Img">
        <img src={gifCode} alt="Gif Coding" />
      </div>
    </Container>
  );
};

export default Infos;
