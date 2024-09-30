// src/pages/HomePage.js
import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../mockData';

const HomePage = () => {
  return (
    <Container>
      <h1>Products</h1>
      <Grid container spacing={4}>
        {mockProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
