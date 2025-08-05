import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../domain/types';

// Favorites state interface
interface FavoritesState {
  items: Product[];
  count: number;
}

// Initial state
const initialState: FavoritesState = {
  items: [],
  count: 0,
};

// Favorites slice
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // Add product to favorites
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        state.count = state.items.length;
      }
    },

    // Remove product from favorites
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.count = state.items.length;
    },

    // Toggle favorite status
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingIndex >= 0) {
        // Remove if already in favorites
        state.items.splice(existingIndex, 1);
      } else {
        // Add if not in favorites
        state.items.push(action.payload);
      }
      
      state.count = state.items.length;
    },

    // Clear all favorites
    clearFavorites: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});

export const { 
  addToFavorites, 
  removeFromFavorites, 
  toggleFavorite, 
  clearFavorites 
} = favoritesSlice.actions;

export default favoritesSlice.reducer; 