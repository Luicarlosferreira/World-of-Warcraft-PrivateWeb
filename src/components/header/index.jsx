import { NavBar } from "./styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication.jsx";
import { useAuthValue } from "../../context/AuthContext";

export const Header = () => {
  const [mobileButton, setMobileButton] = useState(false);
  const { logout, auth } = useAuthentication();
  const { user } = useAuthValue();

  return (
    <NavBar>
      <NavLink to="/">
        <span>Infinite-Funserver</span>
      </NavLink>
      {user && <span className="spanAccount">Logado em: {user.email}</span>}
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/aboutUs">SOBRE O INFINITE</NavLink>
        <NavLink to="/ranking">RANKING</NavLink>
        {!user && (
          <>
            <NavLink to="/register">REGISTRAR</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/armory">ARMORY</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/login" onClick={logout}>
              LOGOUT
            </NavLink>
          </>
        )}
      </ul>
      <button>BTN MOBILE</button>
    </NavBar>
  );
};
