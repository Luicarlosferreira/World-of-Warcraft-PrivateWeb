import { useEffect, useState } from "react";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication.jsx";
import { useAuthValue } from "../../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loading, error: authError } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
      setEmail("");
      setPassword("");
    }
  }, [authError]);

  return (
    <Container>
      <div className="container_form">
        <form onSubmit={handleSubmit}>
          <h2>Faça o seu Login</h2>

          <label>
            <p>Email:</p>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Insira seu email"
              required
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </label>
          <label>
            <p>Senha:</p>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Insira sua senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {!loading && <button type="submit">Entrar</button>}
          {loading && (
            <button type="submit" disabled>
              Aguarde...
            </button>
          )}
        </form>
        <div className="signIn_path">
          <p>Não possui uma conta?</p>
          <NavLink to="/login">
            <span>Registre-se!</span>
          </NavLink>
        </div>

        {error && <p className="error">{error}</p>}
      </div>
    </Container>
  );
};
