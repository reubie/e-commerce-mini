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
  const currentTheme = useSelector((state: RootState) => (state.userPreferences as any).theme);

  // Create theme
  const theme = createTheme({
    palette: {
      mode: currentTheme || 'light',
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