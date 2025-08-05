'use client';

import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Box, Button } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { RootState } from '../../infrastructure/store';
import { removeFromFavorites, clearFavorites } from '../../infrastructure/store/slices/favoritesSlice';
import { addToCart } from '../../infrastructure/store/slices/cartSlice';
import { Layout } from '../../presentation/components/layout/Layout';
import { ProductGrid } from '../../presentation/components/products/ProductGrid';
import Link from 'next/link';

// Favorites page
export default function FavoritesPage() {
  const dispatch = useDispatch();
  const { items: favorites, count } = useSelector((state: RootState) => (state.favorites as any));

  const handleRemoveFromFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  if (favorites.length === 0) {
    return (
      <Layout>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <FavoriteBorder sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              No favorites yet
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Start adding products to your favorites to see them here.
            </Typography>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="large">
                Browse Products
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1">
            My Favorites ({count} items)
          </Typography>
          
          <Button
            variant="outlined"
            color="error"
            onClick={handleClearFavorites}
          >
            Clear All
          </Button>
        </Box>

        <ProductGrid products={favorites} />
      </Container>
    </Layout>
  );
} 