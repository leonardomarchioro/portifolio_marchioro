import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoReader,
} from "react-icons/io5";

import gifCode from "../../assets/gifcode.gif";
import { Container } from "./styles";
import { motion } from "framer-motion";

const Infos = ({ setModal }) => {
  return (
    <Container>
      <motion.div
        initial={{ x: -500, y: 0, scale: 1, rotate: 0 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 1.5 }}
      >
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
      </motion.div>
    </Container>
  );
};

export default Infos;
