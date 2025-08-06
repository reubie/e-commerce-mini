'use client';

import { Card, CardMedia, CardContent, Typography, Button, Box, Rating, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, AddShoppingCart } from '@mui/icons-material';
import { Product } from '../../../domain/types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../infrastructure/store/slices/cartSlice';
import { toggleFavorite } from '../../../infrastructure/store/slices/favoritesSlice';
import { RootState } from '../../../infrastructure/store';
import Link from 'next/link';

// Product card props
interface ProductCardProps {
  product: Product;
}

// Product card
export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => (state.favorites as any).items);
  const isFavorite = favorites.some((fav: Product) => fav.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        },
      }}
      className="product-card fade-in"
    >
      <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{ 
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Link>
      
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.brand}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating} readOnly size="small" />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {product.rating}
          </Typography>
        </Box>
        
        <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
          ${product.price}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddShoppingCart />}
            onClick={handleAddToCart}
            sx={{ flex: 1 }}
            className="btn-animate"
          >
            Add to Cart
          </Button>
          
          <IconButton
            onClick={handleToggleFavorite}
            color={isFavorite ? 'error' : 'default'}
            size="small"
            sx={{
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}; 