import { ContainerModal, Modal } from "./styles";
import { motion } from "framer-motion";

import { IoCloseCircleOutline } from "react-icons/io5";
import ImgEmail from "../../assets/gmail.png";
import ImgWhats from "../../assets/whatsapp.png";
import ImgLinkedin from "../../assets/linkedin.png";
import ImgGitHub from "../../assets/github (1).png";
import ImgCurriculo from "../../assets/retomar.png";

const Modalcontact = ({ setModal }) => {
  const closeModal = (event) => {
    event.target.tagName === "SECTION" && setModal(false);
  };

  return (
    <ContainerModal onClick={(e) => closeModal(e)}>
      <motion.div
        className="animation-desktop"
        initial={{ x: 0, y: 0, scale: 0, rotate: 0 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 1.8 }}
      >
        <Modal>
          <div>
            <h2>&lt; Contatos /&gt;</h2>
            <IoCloseCircleOutline
              size={"25px"}
              onClick={() => setModal(false)}
            />
          </div>

          <ul>
            <li>
              <a href="https://wa.me/5547996797620?text=" target="_blanck">
                <img src={ImgWhats} alt="WhastApp" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=leonardomarchioro11@gmail.com&tf=cm"
                target="_blanck"
              >
                <img src={ImgEmail} alt=" E-mail" />
                E-mail
              </a>
            </li>
            <li>
              <a href="https://wa.me/5547996797620?text=" target="_blanck">
                <img src={ImgLinkedin} alt="LinkedInd" />
                LinkedInd
              </a>
            </li>
            <li>
              <a href="https://wa.me/5547996797620?text=" target="_blanck">
                <img src={ImgGitHub} alt="GitHub" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://wa.me/5547996797620?text=" target="_blanck">
                <img src={ImgCurriculo} alt="Currículo" />
                Currículo
              </a>
            </li>
          </ul>
        </Modal>
      </motion.div>
    </ContainerModal>
  );
};
export default Modalcontact;
