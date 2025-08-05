import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPreferences } from '../../../domain/types';

// User preferences state interface
interface UserPreferencesState extends UserPreferences {
  isInitialized: boolean;
}

// Initial state
const initialState: UserPreferencesState = {
  language: 'en',
  currency: 'USD',
  theme: 'light',
  isInitialized: false,
};

// User preferences slice
const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    // Set language preference
    setLanguage: (state, action: PayloadAction<'en' | 'es' | 'fr'>) => {
      state.language = action.payload;
      state.isInitialized = true;
    },

    // Set currency preference
    setCurrency: (state, action: PayloadAction<'USD' | 'EUR' | 'GBP'>) => {
      state.currency = action.payload;
      state.isInitialized = true;
    },

    // Toggle theme
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      state.isInitialized = true;
    },

    // Set theme directly
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
      state.isInitialized = true;
    },

    // Update multiple preferences at once
    updatePreferences: (state, action: PayloadAction<Partial<UserPreferences>>) => {
      Object.assign(state, action.payload);
      state.isInitialized = true;
    },

    // Reset to defaults
    resetPreferences: (state) => {
      state.language = 'en';
      state.currency = 'USD';
      state.theme = 'light';
      state.isInitialized = true;
    },
  },
});

export const { 
  setLanguage, 
  setCurrency, 
  toggleTheme, 
  setTheme, 
  updatePreferences, 
  resetPreferences 
} = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer; 