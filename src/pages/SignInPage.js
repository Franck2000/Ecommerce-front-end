// src/pages/SignInPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Container, TextField, Button, Typography ,Input } from '@mui/material';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setError('');  // Réinitialiser l'erreur avant l'appel

    const success = await signIn(email, password);  // Attendre la promesse de `signIn`
    if (success) {
      navigate('/');  // Rediriger l'utilisateur après une connexion réussie
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container>
      <h1>Sign In</h1>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSignIn}>
        Sign In
      </Button>
    </Container>
  );
};

export default SignInPage;
