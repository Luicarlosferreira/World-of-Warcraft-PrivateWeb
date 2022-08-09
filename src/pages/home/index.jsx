import { Container } from "./styles";
import { Fade } from "react-awesome-reveal";
import { About } from "../../components/about/index";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication.jsx";
import { useAuthValue } from "../../context/AuthContext";

export const Home = () => {
  const { user } = useAuthValue();
  const { auth } = useAuthentication();

  return (
    <>
      <Container>
        <Fade>
          <div className="Content">
            <div className="title">
              <h1>INFINITE FUNSERVER</h1>
              <h2> WORLD OF WARCRAFT</h2>
            </div>
            <div className="information">
              <p>O melhor servidor Funserver do Brasil</p>
              <p>Venha fazer parte dessa família </p>
            </div>
            {!user && (
              <NavLink to="/login">
                <button>START</button>
              </NavLink>
            )}
          </div>
        </Fade>
      </Container>
      <About />
    </>
  );
};
