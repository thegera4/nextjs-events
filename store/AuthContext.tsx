"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    userIsLoggedIn: false,
    //login: () => {},
    logout: () => {}
});

export const AuthProvider = ({ children }:any) => {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setUserIsLoggedIn(!!token);
  }, []);

  const login = () => {
    // Implement your login logic here
    // Update the token in localStorage and setUserIsLoggedIn(true)
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUserIsLoggedIn(false);
  };

  const contextValue = {
    userIsLoggedIn,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);