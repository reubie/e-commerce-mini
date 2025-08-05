'use client';

import { useState, useMemo } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Layout } from '../presentation/components/layout/Layout';
import { ProductGrid } from '../presentation/components/products/ProductGrid';
import { ProductSearch } from '../presentation/components/products/ProductSearch';
import { LoadingSpinner } from '../presentation/components/ui/LoadingSpinner';
import { useProducts } from '../infrastructure/query/hooks/useProducts';
import { ProductFilters } from '../domain/types';

// Main page
export default function HomePage() {
  const [filters, setFilters] = useState<ProductFilters>({});
  const { data: products, isLoading, error } = useProducts(filters);

  // Filter products client-side for better UX
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    return products.filter(product => {
      const matchesSearch = !filters.search || 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesCategory = !filters.category || product.category === filters.category;
      
      const matchesMinPrice = !filters.minPrice || product.price >= Number(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || product.price <= Number(filters.maxPrice);
      
      return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
    });
  }, [products, filters]);

  const handleFiltersChange = (searchFilters: any) => {
    const newFilters: ProductFilters = {};
    
    if (searchFilters.search) newFilters.search = searchFilters.search;
    if (searchFilters.category) newFilters.category = searchFilters.category;
    if (searchFilters.minPrice) newFilters.minPrice = Number(searchFilters.minPrice);
    if (searchFilters.maxPrice) newFilters.maxPrice = Number(searchFilters.maxPrice);
    
    setFilters(newFilters);
  };

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner message="Loading products..." />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container>
          <Typography variant="h6" color="error" align="center">
            Error loading products. Please try again.
          </Typography>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to E-Commerce Mini
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Discover amazing products at great prices
          </Typography>
        </Box>
        
        <ProductSearch onFiltersChange={handleFiltersChange} />
        
        {filteredProducts.length === 0 ? (
          <Typography variant="h6" align="center" color="text.secondary">
            No products found. Try adjusting your filters.
          </Typography>
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </Container>
    </Layout>
  );
}
