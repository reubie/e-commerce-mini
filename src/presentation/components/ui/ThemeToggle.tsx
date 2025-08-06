'use client';

import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../infrastructure/store/slices/userPreferencesSlice';
import { RootState } from '../../../infrastructure/store';

// Theme toggle
export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => (state.userPreferences as any).theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Tooltip title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
      <IconButton color="inherit" onClick={handleToggle}>
        {theme === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
}; 