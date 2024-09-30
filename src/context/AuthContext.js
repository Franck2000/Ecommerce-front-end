// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    if (email === 'test@example.com' && password === 'password') {
      const mockUser = { id: 1, name: 'John Doe', email: 'test@example.com' };
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const signUp = (name, email, password) => {
    const mockUser = { id: 2, name, email };
    setUser(mockUser);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
