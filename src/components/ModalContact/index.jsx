import { ContainerModal, Modal } from "./styles";
import { motion } from "framer-motion";

import { IoLogoWhatsapp, IoCloseCircleOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Modalcontact = ({ setModal }) => {
  return (
    <ContainerModal>
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
            <h2>Contatos</h2>
            <IoCloseCircleOutline
              size={"25px"}
              onClick={() => setModal(false)}
            />
          </div>

          <ul>
            <li>
              <a href="https://wa.me/5547996797620?text=" target="_blanck">
                <IoLogoWhatsapp size={"30px"} color={"#222831"} />
                Contate-me por WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=leonardomarchioro11@gmail.com&tf=cm"
                target="_blanck"
              >
                <SiGmail size={"30px"} color={"#222831"} />
                Contate-me por e-mail
              </a>
            </li>
          </ul>
        </Modal>
      </motion.div>
    </ContainerModal>
  );
};
export default Modalcontact;
