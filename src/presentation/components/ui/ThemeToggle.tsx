'use client';

import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../../providers/ThemeProvider';

// Theme toggle
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
      <IconButton color="inherit" onClick={toggleTheme}>
        {theme === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
}; 