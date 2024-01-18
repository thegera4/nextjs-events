"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { login } from '@/utils/api-utils';

interface AuthContextProps {
  userIsLoggedIn: boolean;
  loginAuthCtx: (email: string, password: string) => Promise<void>;
  logoutAuthCtx: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({
  userIsLoggedIn: false,
  loginAuthCtx: async () => {},
  logoutAuthCtx: () => {}
});

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setUserIsLoggedIn(!!token);
  }, []);

  const loginAuthCtx = async (email: string, password: string) => {
    try{
      const response = await login(email, password);
      if(response.token !== '' || response.token !== undefined || response.token !== null){
        localStorage.setItem('token', response.token);
        setUserIsLoggedIn(true);
        return response;
      }
    } catch (error) {
      throw new Error("Could not login user. Please try again later.");
    }
  };

  const logoutAuthCtx = () => {
    localStorage.removeItem('token');
    setUserIsLoggedIn(false);
  };

  const contextValue = {
    userIsLoggedIn,
    loginAuthCtx,
    logoutAuthCtx
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);