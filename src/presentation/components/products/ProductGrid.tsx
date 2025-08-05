'use client';

import { Grid, Container, Box } from '@mui/material';
import { Product } from '../../../domain/types';
import { ProductCard } from './ProductCard';

// Product grid props
interface ProductGridProps {
  products: Product[];
}

// Product grid
export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 3,
        }}
      >
        {products.map((product) => (
          <Box key={product.id}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}; 