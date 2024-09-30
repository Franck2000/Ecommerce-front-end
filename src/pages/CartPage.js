// src/pages/CartPage.js
import React, { useState } from 'react';
import { Container, Typography, Button, List, ListItem } from '@mui/material';
import { mockProducts } from '../mockData';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  return (
    <Container>
      <h1>Cart</h1>
      <List>
        {cart.map((product, index) => (
          <ListItem key={index}>
            <Typography>{product.nom} - {product.prix} €</Typography>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" href="/checkout">
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default CartPage;
