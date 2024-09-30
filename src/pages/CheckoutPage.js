// src/pages/CheckoutPage.js
import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const CheckoutPage = () => {
  const { user } = useAuth();

  return (
    <Container>
      <h1>Checkout</h1>
      <TextField label="Name" fullWidth value={user?.name || ''} margin="normal" />
      <TextField label="Email" fullWidth value={user?.email || ''} margin="normal" />
      <TextField label="Address" fullWidth value="123 Street, City" margin="normal" />
      <Button variant="contained" color="primary" href="/order-confirmation">
        Confirm and Pay
      </Button>
    </Container>
  );
};

export default CheckoutPage;
