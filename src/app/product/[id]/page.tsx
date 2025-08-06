'use client';

import { useParams } from 'next/navigation';
import { Container, Grid, Typography, Box, Button, Rating, Chip, Divider } from '@mui/material';
import { AddShoppingCart, Favorite, FavoriteBorder, ArrowBack } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../infrastructure/store/slices/cartSlice';
import { toggleFavorite } from '../../../infrastructure/store/slices/favoritesSlice';
import { RootState } from '../../../infrastructure/store';
import { useProduct } from '../../../infrastructure/query/hooks/useProducts';
import { LoadingSpinner } from '../../../presentation/components/ui/LoadingSpinner';
import { Layout } from '../../../presentation/components/layout/Layout';
import Link from 'next/link';

// Product details page
export default function ProductDetailsPage() {
  const params = useParams();
  const productId = Number(params.id);
  const dispatch = useDispatch();
  
  const { data: product, isLoading, error } = useProduct(productId);
  const favorites = useSelector((state: RootState) => (state.favorites as any).items);
  const isFavorite = favorites.some((fav: any) => fav.id === productId);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  const handleToggleFavorite = () => {
    if (product) {
      dispatch(toggleFavorite(product));
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner message="Loading product details..." />
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <Container>
          <Typography variant="h6" color="error" align="center">
            Product not found
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" startIcon={<ArrowBack />}>
                Back to Products
              </Button>
            </Link>
          </Box>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button variant="text" startIcon={<ArrowBack />}>
              Back to Products
            </Button>
          </Link>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          {/* Product image */}
          <Box>
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: 500,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Box>

          {/* Product info */}
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {product.rating} stars
              </Typography>
            </Box>
            
            <Typography variant="body1" color="text.secondary" paragraph>
              {product.description}
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Brand: {product.brand}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Category: {product.category}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Stock: {product.stock} available
              </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
                      <Typography variant="h6" gutterBottom>
            Features
          </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {product.features.map((feature, index) => (
                <Chip key={index} label={feature} size="small" />
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<AddShoppingCart />}
                onClick={handleAddToCart}
                sx={{ flex: 1 }}
              >
                Add to Cart
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={handleToggleFavorite}
                color={isFavorite ? 'error' : 'primary'}
                startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
              >
                {isFavorite ? 'Favorited' : 'Favorite'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
} 