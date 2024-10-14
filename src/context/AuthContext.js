// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import { login, signup, fetchUserProfile } from '../services/api';  // Importer l'API login

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);  // Ajout du token

  const signIn = async (email, password) => {
    try {
      // Utiliser l'API login pour authentifier l'utilisateur
      const token = await login(email, password);
      setToken(token);

      // Vous pouvez utiliser le token pour obtenir plus d'informations sur l'utilisateur
      // Par exemple, appeler une API qui retourne les détails de l'utilisateur
      const user =  await fetchUserProfile(token);
      setUser(user);

      return true;
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return false;
    }
  };

  const signUp = async (name, email, password) => {
    try {
      const token = await signup(name, email, password);  // Inscription et retour du token
      setToken(token);

      // Simuler un utilisateur après l'inscription
      const newUser =  await fetchUserProfile(token);
      setUser(newUser);

      return true;
    } catch (error) {
      console.error('Erreur lors de l’inscription:', error);
      throw error;
    }
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');  // Supprimer le token de localStorage
  };

  return (
    <AuthContext.Provider value={{ user,signUp, signIn, signOut, token }}>
      {children}
    </AuthContext.Provider>
  );
};
