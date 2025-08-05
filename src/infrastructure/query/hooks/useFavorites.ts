import { useMutation, useQueryClient } from '@tanstack/react-query';
import { favoritesApi } from '../../services/api';
import { Product } from '../../../domain/types';

// Favorites query keys
export const favoritesKeys = {
  all: ['favorites'] as const,
  lists: () => [...favoritesKeys.all, 'list'] as const,
  list: () => [...favoritesKeys.lists()] as const,
};

// Add to favorites mutation
export const useAddToFavorites = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (product: Product) => favoritesApi.addToFavorites(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: favoritesKeys.lists() });
    },
  });
};

// Remove from favorites mutation
export const useRemoveFromFavorites = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => favoritesApi.removeFromFavorites(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: favoritesKeys.lists() });
    },
  });
};

// Toggle favorite mutation
export const useToggleFavorite = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (product: Product) => {
      // Check if product is in favorites first
      const favorites = await favoritesApi.getFavorites();
      const isFavorite = favorites.data?.some(fav => fav.id === product.id);
      
      if (isFavorite) {
        return favoritesApi.removeFromFavorites(product.id);
      } else {
        return favoritesApi.addToFavorites(product);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: favoritesKeys.lists() });
    },
  });
}; 