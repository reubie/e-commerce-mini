'use client';

import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../infrastructure/store/slices/userPreferencesSlice';
import { RootState } from '../../../infrastructure/store';

// Theme toggle component
export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => (state.userPreferences as any).theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Tooltip title={currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
      <IconButton color="inherit" onClick={handleThemeToggle}>
        {currentTheme === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
}; 