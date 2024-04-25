import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";
import SeatsPage from "../SeatsPage/SeatsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar"; 

const StartPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/seats" element={<SeatsPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default StartPage;
