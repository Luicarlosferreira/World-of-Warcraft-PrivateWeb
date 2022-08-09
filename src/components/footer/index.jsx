import { FooterContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutubeSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="list_footer">
        <ul>
          <NavLink to="/staff">Staff</NavLink>
          <NavLink to="/aboutUs">Sobre o Infinite</NavLink>
          <NavLink to="/">Contate-nos</NavLink>
        </ul>
      </div>
      <div className="social_media">
        <NavLink to="/">
          <FaFacebookF />
        </NavLink>
        <NavLink to="/">
          <FaInstagram />
        </NavLink>
        <NavLink to="/">
          <FaYoutubeSquare />
        </NavLink>
      </div>
    </FooterContainer>
  );
};
