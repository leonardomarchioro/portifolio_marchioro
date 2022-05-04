import { Link } from "react-router-dom";
import { Container } from "./styles";

const Header = ({ setModal }) => {
  return (
    <Container>
      <Link to={"/projetos"}>Projetos</Link>
      <button onClick={() => setModal(true)}>Contato</button>
    </Container>
  );
};

export default Header;
