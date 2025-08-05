import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice';
import userPreferencesReducer from './slices/userPreferencesSlice';

// Main store configuration
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    userPreferences: userPreferencesReducer,
  },
  // Enable Redux DevTools in development
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 