import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication.jsx";

//pages
import { Home } from "./pages/home/index";
import { Register } from "./pages/register/index";
import { Login } from "./pages/login/index";
import { AboutUs } from "./pages/information/index";
import { Staff } from "./pages/staff";
import { Armory } from "./pages/armory";
import { RankingPvP } from "./pages/rankingPvP/index";
//Components
import { Header } from "./components/header/index";
import { Footer } from "./components/footer/index";
import { ScrollToTop } from "./components/scrollToTop/ScrollToTop";

//Context

import { AuthProvider } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p style={{ color: "white", padding: 10 }}>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        {user && (
          <div className="ModalLogin">
            <h1>
              Olá, <span>{user.email}</span>
            </h1>
            <p>Seja bem vindo a sua área player em nosso site.</p>
            <br />
            <p>Att, Infinite Staff.</p>
          </div>
        )}
        <BrowserRouter>
          <Header />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/staff" element={<Staff />} />
              <Route
                path="/armory"
                element={user ? <Armory /> : <Navigate to="/" />}
              />
              <Route path="/ranking" element={<RankingPvP />} />
            </Routes>
          </ScrollToTop>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
