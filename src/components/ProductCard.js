// src/components/ProductCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={product.photos[0]}
      alt={product.nom}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.nom}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body1" color="text.primary">
        {product.prix} €
      </Typography>
      <Button variant="contained" color="primary" component={Link} to={`/product/${product.id}`}>
        View Details
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
