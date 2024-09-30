// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../mockData';
import { Container, Typography, Button } from '@mui/material';

const ProductPage = () => {
  const { id } = useParams();
  const product = mockProducts.find(prod => prod.id === parseInt(id));

  return (
    <Container>
      <img src={product.photos[0]} alt={product.nom} style={{ width: '100%' }} />
      <Typography variant="h4">{product.nom}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h6">{product.prix} €</Typography>
      <Button variant="contained" color="primary">Add to Cart</Button>
    </Container>
  );
};

export default ProductPage;
