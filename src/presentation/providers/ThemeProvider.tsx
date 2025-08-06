'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import { RootState } from '../../infrastructure/store';

// Theme provider wrapper
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Get theme from Redux state with fallback
  const currentTheme = useSelector((state: RootState) => {
    try {
      return (state.userPreferences as any)?.theme || 'light';
    } catch {
      return 'light';
    }
  });

  // Create theme based on current theme state
  const theme = createTheme({
    palette: {
      mode: currentTheme,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: currentTheme === 'dark' ? '#121212' : '#ffffff',
        paper: currentTheme === 'dark' ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: currentTheme === 'dark' ? '#1e1e1e' : '#1976d2',
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}; 