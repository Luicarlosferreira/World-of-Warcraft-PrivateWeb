import { useState, useEffect } from "react";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication.jsx";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log(user);

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }
    const res = await createUser(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <Container>
      <div className="container_form">
        <form onSubmit={handleSubmit}>
          <h2>REGISTRE-SE</h2>
          <label>
            <p>Insira seu nome</p>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Insira seu nome"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <p>Insira seu E-mail</p>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Insira seu email"
              required
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </label>
          <label>
            <p>Senha</p>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Insira sua senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            <p>Confirme a Senha</p>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirme sua senha"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {!loading && <button type="submit">Registrar</button>}
          {loading && (
            <button type="submit" disabled>
              Aguarde...
            </button>
          )}
        </form>
        <div className="signIn_path">
          <p>Já possui uma conta?</p>
          <NavLink to="/login">
            <span>Faça o login!</span>
          </NavLink>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </Container>
  );
};
