import LoginPage from "../LoginPage/LoginPage";
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";
import BuyTicketsPage from "../ButTicketsPage/BuyTicketsPage";
import AdminMoviesPage from "../AdminMoviesPage/AdminMoviesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "../../contexts/authContext";

const StartPage = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tickets/:screeningId" element={<BuyTicketsPage />} />
            <Route path="/admin/movies" element={<AdminMoviesPage />} />
          </>
        ) : null}
      </Routes>
    </BrowserRouter>
  );
};

export default StartPage;
