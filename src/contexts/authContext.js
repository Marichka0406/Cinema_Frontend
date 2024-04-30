import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

// Компонент провайдера контексту
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('isAuthenticated'));
  const [isAdmin, setIsAdmin] = useState(!!sessionStorage.getItem('isAdmin'));

  // Функція для встановлення стану автентифікації та ролі користувача
  const handleLogin = (authenticated, admin) => {
    setIsAuthenticated(authenticated);
    setIsAdmin(admin);
    sessionStorage.setItem('isAuthenticated', authenticated);
    sessionStorage.setItem('isAdmin', admin);
  };

  // Функція для виходу з облікового запису (логауту)
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('isAdmin');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Функція для використання значень з контексту
export const useAuth = () => useContext(AuthContext);
