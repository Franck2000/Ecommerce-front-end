import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Container, Typography } from '@mui/material';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <Typography variant="h6">Chargement des informations...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">Profil de l'utilisateur</Typography>
      <Typography variant="body1">Nom d'utilisateur : {user.username}</Typography>
      <Typography variant="body1">Email : {user.email}</Typography>
      <Typography variant="h6">Adresse :</Typography>
      {user.addresses.map((address, index) => (
        <div key={index}>
          <Typography variant="body2">Rue : {address.street}</Typography>
          <Typography variant="body2">Ville : {address.city}</Typography>
          <Typography variant="body2">Code postal : {address.postalCode}</Typography>
          <Typography variant="body2">Pays : {address.country}</Typography>
        </div>
      ))}
    </Container>
  );
};

export default ProfilePage;
