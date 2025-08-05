import { useQuery } from '@tanstack/react-query';
import { productApi } from '../../services/api';
import { Product, ProductFilters } from '../../../domain/types';

// Product query keys
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: ProductFilters) => [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
};

// Get all products
export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: productKeys.list(filters || {}),
    queryFn: () => productApi.getProducts(filters),
    select: (response) => response.data || [],
  });
};

// Get single product
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productApi.getProduct(id),
    select: (response) => response.data,
    enabled: !!id,
  });
};

// Get products by category
export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: productKeys.list({ category }),
    queryFn: () => productApi.getProductsByCategory(category),
    select: (response) => response.data || [],
    enabled: !!category,
  });
};

// Search products
export const useSearchProducts = (query: string) => {
  return useQuery({
    queryKey: productKeys.list({ search: query }),
    queryFn: () => productApi.searchProducts(query),
    select: (response) => response.data || [],
    enabled: query.length > 0,
  });
}; 