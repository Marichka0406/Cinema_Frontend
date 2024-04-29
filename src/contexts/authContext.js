import { createContext, useContext, useState } from 'react';

// Створюємо контекст автентифікації
const AuthContext = createContext();

// Компонент провайдера контексту
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Функція для встановлення стану автентифікації та ролі користувача
  const handleLogin = (authenticated, admin) => {
    setIsAuthenticated(authenticated);
    setIsAdmin(admin);
  };

  // Функція для виходу з облікового запису (логауту)
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Функція для використання значень з контексту
export const useAuth = () => useContext(AuthContext);
