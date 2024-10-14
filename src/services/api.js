//services/api
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';  // URL de l'API backend
var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
 
// Authentificatio
export const login = async (username, password) => {
  try {
  
    const response = await fetch(`${API_URL}/authentification/login`, {
    
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ username, password }),  // Convertir les données en JSON
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP ! Statut: ${response.status}`);
    }

    const data = await response.json();  // Obtenir la réponse JSON
    localStorage.setItem('token', data.token);  // Stocker le token JWT
    return data.token;
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    throw error;
  }
};

 

// Inscription avec `fetch`
export const signup = async (username, email, password) => {
    try {

      const response = await fetch(`${API_URL}/authentification/register`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ username, email, password }),  // Convertir les données en JSON
      });
  
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('L’adresse e-mail est déjà utilisée');
        }
        throw new Error(`Erreur HTTP ! Statut: ${response.status}`);
      }
  
      const data = await response.json();  // Obtenir la réponse JSON
      localStorage.setItem('token', data.token);  // Stocker le token JWT après inscription
      return data.token;
    } catch (error) {
      console.error('Erreur lors de l’inscription', error);
      throw error;
    }
  };

  export const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('http://localhost:8080/api/authentification/myprofile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du profil utilisateur');
      }

      const userProfile = await response.json();
      return userProfile;
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
    }
  };

// export const signup = async (username, email, password) => {
//   const response = await axios.post(`${API_URL}/auth/signup`, { username, email, password });
//   return response.data;
// };

// Produits
export const getProducts = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;  // Retourner les produits
};

export const getProductDetails = async (productId) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/products/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;  // Retourner les détails du produit
};

// Panier
export const addToCart = async (productId, quantity) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(`${API_URL}/cart/add`, { productId, quantity }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;  // Ajouter au panier
};
