import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isAuthModalOpen, openAuthModal, closeAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
};
