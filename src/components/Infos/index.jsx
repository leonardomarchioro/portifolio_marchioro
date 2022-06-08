import { Container } from "./styles";
import { motion } from "framer-motion";
import imgHome from "../../assets/homeImg.svg";

const Infos = () => {
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
          <h1>Desenvolvedor Front-end</h1>
          <figure className="Img">
            <img src={imgHome} alt="Gif Coding" />
          </figure>
        </div>
      </motion.div>
    </Container>
  );
};

export default Infos;
